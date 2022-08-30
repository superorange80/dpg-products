import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@dpg/shared/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()
  product!: Product;

  addToCart(product: any) {
    console.log('Product added to cart::', product);
  }

}
