import data from './assignment.json';

export interface Item {
  id: number;
  title: string;
  label: string;
  url: string;
  image: string;
}  

interface useDataReturnTypes {
  data: typeof data;
  items: Item[];
}

export function useData(): useDataReturnTypes {

  // Mapping the items to remove unused data
  const mapItems = data.items.map((item) => ({
      id: item.id,
      title: item.titel,
      label: item.labelValue,
      url: item.urlAlias,
      image: item.afbeelding.afbeelding,
  }));

  return {
    data,
    items: mapItems,
  };
}