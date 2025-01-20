interface ApiResponse {
    id: number;
    title: string;
    beschrijving: string;
    woordenboek: string;
    url: string;
    analytics: {
      viewLabels: {
        adobe: Record<string, string>;
      };
    };
    advertising: {
      adserverid: string | null;
      publicatiepunt: string | null;
      type?: string;
      nav: string;
      uuid: string | null;
      temp: string;
      neerslag: string;
      wind: string;
    };
    items: Item[];
    pager: Pager;
    regions: Region[];
    metadata: Metadata;
    kruimelpad: Breadcrumb[];
    type: string;
  }
  
  interface Item {
    type: string;
    id: number;
    aangemaaktDatum: {
      timestamp: number;
      formatted: string;
    };
    bijgewerktDatum: {
      timestamp: number;
      formatted: string;
    };
    titel: string;
    urlAlias: string;
    afbeelding: MediaImage;
    branded: {
      status: boolean;
      label: string | null;
      campaign: string | null;
      partnerLogo: string | null;
      partnerUrl: string | null;
      clickTracker: string | null;
      impressieTracker: string | null;
    };
    sectie: Section;
    overigeSecties: Section[];
    labelValue: string;
    labelType: string;
    metadata: Metadata;
    highlighted: boolean;
    chapeau: string | null;
    lead: string;
    showVideoIcon: boolean;
    duration: string | null;
    fotoBijschrift: string | null;
    canonicalUrl: string;
    isPremium: boolean;
  }
  
  interface MediaImage {
    bijschrift: string | null;
    copyright: string | null;
    afbeelding: string;
    crops: MediaCrop[];
    type: string;
  }
  
  interface MediaCrop {
    type: string;
    height: number;
    width: number;
    ratio: string;
    path: string;
  }
  
  interface Section {
    id: number;
    title: string;
    beschrijving: string;
    woordenboek: string;
    url: string;
    analytics: null | Record<string, unknown>;
    advertising: null | Record<string, unknown>;
    items: null | unknown[];
    pager: null | unknown;
    regions: Region[];
    metadata: Metadata;
    kruimelpad: null | Breadcrumb[];
    type: string;
  }
  
  interface Pager {
    page: number;
    offset: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    nextPage: string;
  }
  
  interface Region {
    name: string;
    blocks: Block[];
  }
  
  interface Block {
    id: number | string;
    titel: string | null;
    analyticsTitle: string | null;
    link: string | null;
    template: string;
    artikelen: Item[];
    metaData: {
      entityQueue: string;
      terms: string[];
      sections: number[];
    };
    hideLabelFromItems: boolean;
    type: string;
    title?: string | null;
    menuId?: string;
  }
  
  interface Metadata {
    entityType: string;
    entityBundle: string;
    template: string;
    theme: string;
  }
  
  interface Breadcrumb {
    titel: string;
    url: string;
  }

  interface ItemsRemaped {
    id: number;
    title: string;
    label: string;
    url: string;
    image: string;
    description: string;
  }

  export type { ApiResponse, Item, ItemsRemaped, MediaImage, MediaCrop, Section, Pager, Region, Block, Metadata, Breadcrumb };
  