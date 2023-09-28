import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: any  = [];
  selectedProduct: any = null;

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.orderService.getProducts().subscribe(
      (data) => {
        this.products = data.map((product) => ({
          ...product,
          showDetails: false  // Initially, details are hidden
        }));
      }
    );
  }

  showProductDetails(id: number){
   this.router.navigate(['/products_details', id]);
  }
  

  


}
