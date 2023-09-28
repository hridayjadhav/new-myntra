import { Component, OnInit } from '@angular/core';
import { faBagShopping, faHeart} from '@fortawesome/free-solid-svg-icons';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  details: any = null;
  bagIcon = faBagShopping;
  heartIcon = faHeart;

  constructor(private orderService: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the product ID from the route parameters
    this.route.params.subscribe((params) => {
      const productId = params['id'];

      // Fetch product details by ID
      this.orderService.getProductById(productId).subscribe(
        (data) => {
          this.details = data;
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );
    });
  }

}
