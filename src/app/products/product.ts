export interface Product {
  id: number;
  title: number;
  value: number;
  categoryId: number;
  subCategoryId: number;
  gender: string;
  description: string;
  images: Images[];
}

export interface Images {
  name: string;
  size: string;
}
