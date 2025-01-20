import UiArticles from "../Ui/UiArticles";
import type { Item } from "../../lib/data-types";

export default function Template({ artikelen }: { artikelen: Item[] }) {
  return (
    /*  This should also dynamically load speficic templates based on the type of the article,
        using the BlockRender component, but for now we load Articles */
    <UiArticles items={artikelen} />
  );
}
