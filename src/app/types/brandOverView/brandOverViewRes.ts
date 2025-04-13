export interface DataListRes {
  englishName: string;
  chineseName: string;
  img: string;
  products: string;
  tag: string[];
  webUrl: string;
  twitterUrl: string;
  discordUrl: string;
  qqNumber: string;
  productsList: ProductsListRes[];
}

export interface ProductsListRes {
  mouseList?: string[];
  keybordList?: string[];
  mousePadList?: string[];
}
