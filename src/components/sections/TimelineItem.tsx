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
    <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
      <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
        <span className="size-3 shrink-0 rounded-full bg-primary"></span>

        <div className="-mt-2 mx-12">
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
      <Image src={image} alt="Module Image" className="mx-auto p-16" />
    </li>
  );
}
