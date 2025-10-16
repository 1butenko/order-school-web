import { Instagram, Mail, Send } from "lucide-react";
import FooterIcon from "@/components/sections/FooterIcon";

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="text-center bg-primary py-12">
        <div className=" text-white font-sans">
          <h1 className="text-4xl tracking-wider uppercase mb-2">
            Наші соцмережі
          </h1>
          <h2 className="mt-4 font-normal tracking-wide">
            Більше про гурток дізнавайся написавши нам у телеграм або на пошту
          </h2>
          <div className="mx-auto max-w-xs flex justify-between mt-12">
            <a href="https://www.instagram.com/polithurtok_kse"><FooterIcon icon={Instagram} /></a>
            <a href="mailto:polithurtok@kse.org.ua"><FooterIcon icon={Mail} /></a>
            <a href="https://t.me/polithurtok_kse"><FooterIcon icon={Send} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
