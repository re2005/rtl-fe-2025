import UiBlockRegions from "./components/Block/BlockRegions";
import BlockItems from "./components/Block/BlockItems";
import { Item, Region } from "@/app/lib/data-types";
import data from "@/app/lib/assignment.json";

export default async function Home() {
  const { items, regions } = data;
  const mappedItems = items.map((item: Item) => ({
    id: item.id,
    title: item.titel,
    label: item.labelValue,
    url: item.urlAlias,
    image: item.afbeelding?.afbeelding,
    description: item.lead,
  }));

  return (
    <div className="mt-2 grid-container">
      <UiBlockRegions regions={regions as Region[]} />
      <BlockItems items={mappedItems} />
    </div>
  );
}
