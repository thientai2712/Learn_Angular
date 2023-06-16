import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { productdata } from '../shared/productmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products!:productdata[];

  constructor(private api:ApiService, private router:Router){

  }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.api.getProduct().subscribe((res)=>{
      this.products = res;
    })
  }
  removeProduct(productId: any){
    console.log(productId);

    return this.api.delete(productId).subscribe((result)=>{
      this.products = result
      this.getProduct();
    })
  }
}
