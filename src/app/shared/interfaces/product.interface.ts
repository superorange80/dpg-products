export interface Product {
  id: number;
  name: string;
  subTitle1?: string;
  subTitle2?: string;
  korting?: number;
  price: string;
  priceValidityInterval: string;
  stock: boolean;
}
