import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductCategory } from '@dpg/shared/interfaces/product-category.interface';
import { Products } from '@dpg/shared/interfaces/products.interface';
import { ProductsService } from '@dpg/shared/services/products.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  protected title = 'Join the AD';
  protected productsData!: Array<ProductCategory>;
  protected errorMessage = '';
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: Products) => {
          if (response.data.length) {
            this.productsData = response.data;
          }
        },
        error: (error) => {
          debugger;
          this.errorMessage = error;
        },
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
