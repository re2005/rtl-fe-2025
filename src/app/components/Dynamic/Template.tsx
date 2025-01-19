import UiArticles from "../Ui/UiArticles";
import type { ItemRaw } from "../../lib/useData";

export default function Template({ artikelen }: { artikelen: ItemRaw[] }) {
  return (
    /*  This should also dynamically load speficic templates based on the type of the article,
        using the BlockRender component, but for now we load Articles */
    <UiArticles items={artikelen} />
  );
}
