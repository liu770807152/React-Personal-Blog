export interface ICatalogBase {
  id: number;
  name: string;
  orderNum: number;
  icon: string;
}

export interface ICatalogList extends ICatalogBase {
  catalogList: Array<ICatalogBase>;
}
