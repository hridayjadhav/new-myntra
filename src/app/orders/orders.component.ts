import { Component, OnInit } from '@angular/core';
import {
  faBox,
  faCircleCheck,
  faMagnifyingGlass,
  faSliders,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { OrderService } from '../order.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  searchIcon = faMagnifyingGlass;
  filterIcon = faSliders;
  deliveryBoxIcon = faBox;
  checkIcon = faCircleCheck;
  starIcon = faStar;
  orders: any[] = [];
  searchForm: any;

  constructor(private orderService: OrderService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchQuery: [''],
    });
    this.searchForm.get('searchQuery').valueChanges.subscribe((searchQuery: any) => {
        this.onSubmitSearch(searchQuery);
      });
  }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  onSubmitSearch(searchQuery: any) {
    if (!searchQuery) {
      this.orderService.getOrders().subscribe((data) => {
        this.orders = data;
      });
      return;
    }
    this.orders = this.orders.filter((order) => {
      return (
        order.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.product_size.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }
}
