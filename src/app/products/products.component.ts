import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product} from '../utils/utils';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [];
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
      this.products = data.filter((product) =>
      this.matchesSearch(product)
      );
    });
  }
  matchesSearch(product: Product): boolean {
    const query = this.searchQuery.toLowerCase();
    return (
      product.product_name.toLowerCase().includes(query) ||
      product.product_brand.toLowerCase().includes(query) ||
      product.product_type.toLowerCase().includes(query)
    );
  }
  
  showProductDetails(id: number){
    this.router.navigate(['/products_details', id]);
   }

  


}
