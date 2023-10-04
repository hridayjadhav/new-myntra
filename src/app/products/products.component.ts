import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: any  = [];
  selectedProduct: any = null;
  searchQuery: string = '';

  constructor(private orderService: OrderService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'] || '';
      this.loadProducts();
    });
  }

  loadProducts() {
    this.orderService.getProducts().subscribe((data) => {
      // Filter products based on the search query
      this.products = data.filter((product) =>
        product.product_name.includes(this.searchQuery)
      );
    });
  }

  showProductDetails(id: number){
   this.router.navigate(['/products_details', id]);
  }
  
  

  


}
