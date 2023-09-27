import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: any  = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  


}
