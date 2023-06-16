import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productdata } from './shared/productmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  apiUrl: string = 'http://localhost:3000/products';

  addProduct(data: any){
    let API_URL = `${this.apiUrl}` ;
    return this.http.post(API_URL, data);
  }
  getProduct(){
    let API_URL = `${this.apiUrl}` ;
    return this.http.get<productdata[]>(API_URL)
  }
  delete(id: any): Observable<any>{
    let API_URL = `${this.apiUrl}/${id}` ;
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
