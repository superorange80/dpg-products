import { Product } from "./product.interface";

export interface ProductCategory {
  categoryName: string;
  products: Array<Product>;
}
