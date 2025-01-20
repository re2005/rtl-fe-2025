import React from "react";
import UiBlockRender from "./BlockRender";
import type { Region } from "@/app/lib/data-types";

interface UiBlockRegionsProps {
  regions: Region[];
}

export default function UiBlockRegions({ regions }: UiBlockRegionsProps) {
  return (
    <>
      {regions.map(
        (region, regionIndex) =>
          region.blocks.length > 0 && (
            <React.Fragment key={regionIndex}>
              {region.blocks.map((block) => (
                <UiBlockRender key={block.id} block={block} />
              ))}
            </React.Fragment>
          )
      )}
    </>
  );
}
