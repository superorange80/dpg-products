import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '@dpg/shared/services/products.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  protected title = 'Product list';
  protected productsData: any = [];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
        if (response.data.length) {
          this.productsData = response.data;
        }
      });
  }

  addToCart(product: any) {
    console.log('Product added to cart::', product);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
