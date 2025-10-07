import type { LucideIcon } from "lucide-react";

interface FooterIconProps {
  icon: LucideIcon;
}

export default function FooterIcon({ icon: Icon }: FooterIconProps) {
  return (
    <div className="rounded-full border border-white p-4 cursor-pointer">
      <Icon />
    </div>
  );
}