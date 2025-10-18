import Image from "next/image";
import { StaticImageData } from "next/image";
import HoverInfo from "@/components/sections/HoverInfo";
import { CSSProperties } from "react";

interface TimelineItemProps {
  module : string;
  date : string;  
  text: string;
  label: string;
  image: StaticImageData;
}

export default function TimelineItem({module, date, text, label, image} : TimelineItemProps) {
  return (
    <li className="group relative md:grid md:grid-cols-2 md:odd:-me-3 md:even:-ms-3 flex flex-col px-6">
      {/* Desktop Layout */}
      <div className="hidden md:relative md:flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
        <span className="size-3 shrink-0 rounded-full bg-primary absolute top-1/2"></span>

        <div className="mt-48 mx-12">
          <div>
            <h3 className="text-4xl font-medium text-foreground font-sans tracking-wider">
              {module}
            </h3>
            <div className="mt-2">
              <time className="text-4xl/none font-medium text-foreground font-sans tracking-wider">
                {date}
              </time>
            </div>
            <HoverInfo
              label={label}
              text={text}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative flex flex-col ml-8 mb-8">
        {/* Кружок на лінії */}
        <span className="size-3 shrink-0 rounded-full bg-primary absolute -left-[30px] top-2"></span>

        <div className="mb-4">
          <h3 className="text-lg font-bold text-black font-sans tracking-normal uppercase">
            {module}
          </h3>
          <time className="text-lg font-bold text-black font-sans tracking-normal">
            {date}
          </time>
        </div>

        <HoverInfo
          label={label}
          text={text}
        />

        {/* Зображення під текстом */}
        <div className="mt-4 w-full">
          <Image src={image} alt="Module Image" className="w-full h-auto" />
        </div>
      </div>

      {/* Desktop Image */}
      <Image src={image} alt="Module Image" className="hidden md:block mx-auto p-16 min-w-200" />
    </li>
  );
}
