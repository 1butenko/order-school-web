import Image from "next/image";
import type { StructureColsProps } from "@/types";

export default function StructureCols({
  paragph1,
  paragph2,
  span,
  header,
}: StructureColsProps) {
  return (
    <div className="max-w-96">
      <h3 className="uppercase font-mono font-semibold text-2xl tracking-wide">
        {header}
      </h3>
      <p className="text-base text-justify font-mono font-medium mt-2">
        {paragph1} <br />
        <span className="text-primary">{span}</span> {paragph2}
      </p>
    </div>
  );
}
