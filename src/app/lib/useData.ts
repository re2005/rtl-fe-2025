import data from './assignment.json';

export interface Block {
  id: number | string;
  title?: string | null;
  menuId?: string;
  type: string;
  analyticsTitle?: string | null;
  link?: string | null;
  template?: string;
  artikelen?: {
    id: number;
    titel: string;
    type: string;
  }[];
}

export interface Region {
  name: string;
  blocks: Block[];
}

export interface ItemRaw {
  id: number;
  titel: string;
  labelValue: string;
  urlAlias: string;
  afbeelding: {
    afbeelding: string;
  };
  lead: string;
}

export interface Item {
  id: number;
  title: string;
  label: string;
  url: string;
  image: string;
  description?: string;
}

interface useDataReturnTypes {
  regions: Region[];
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
      description: item.lead,
  }));

  return {
    regions: data.regions,
    items: mapItems,
  };
}