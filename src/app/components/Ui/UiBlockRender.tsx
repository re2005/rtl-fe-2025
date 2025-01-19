import MenuBlock from "@/app/components/Dynamic/MenuBlock";
import Template from "@/app/components/Dynamic/Template";
import type { Block } from "@/app/lib/useData";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockComponents: { [key: string]: React.FC<any> } = {
  MenuBlock,
  Template,
};

interface UiBlockRenderProps {
  block: Block;
}

export default function UiBlockRender({ block }: UiBlockRenderProps) {
  const Component = blockComponents[block.type];
  if (!Component) {
    console.warn(`No component for block type: ${block.type}`);
    return null;
  }
  return <Component {...block} />;
}
