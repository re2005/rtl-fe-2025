import type { ItemRaw } from "../../lib/useData";
import UiArticlesItem from "./UiArticlesItem";
import UiArticleHighlight from "./UiArticleHighlight";

export default function UiArticles({ items }: { items: ItemRaw[] }) {
  const mappedItems = items.map((item) => ({
    id: item.id,
    title: item.titel,
    label: item.labelValue,
    url: item.urlAlias,
    image: item.afbeelding.afbeelding,
    description: item.lead,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <UiArticleHighlight
          key="highlight"
          item={mappedItems.length > 0 ? mappedItems[0] : undefined}
        />
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4">
        {mappedItems.slice(1, mappedItems.length).map((item) => (
          <UiArticlesItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
