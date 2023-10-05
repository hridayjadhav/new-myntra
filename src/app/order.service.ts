import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://650be3e547af3fd22f66a3f6.mockapi.io/orders';
  private productsUrl = 'https://650be3e547af3fd22f66a3f6.mockapi.io/products';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any[]> {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': this.apiUrl,
    };
    const options = {
      headers: headers,
    };
    return this.http.get<any[]>(this.apiUrl, options);
  }
  getProducts(): Observable<any[]> {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': this.productsUrl,
    };
    const options = {
      headers: headers,
    };
    return this.http.get<any[]>(this.productsUrl, options);
  }

  getProductById(id: number): Observable<any> {
    const productUrl = `${this.productsUrl}/${id}`;
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': productUrl,
    };
    const options = {
      headers: headers,
    };
    return this.http.get<any>(productUrl, options);
  }

}
