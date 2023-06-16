import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { productdata } from '../shared/productmodel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private api:ApiService, private router:Router){

  }

  ngOnInit(): void {

  }

  addData(data:productdata){
    // console.log(data);

    this.api.addProduct(data).subscribe((result=>{
      console.log(result);
      this.router.navigate(['/view-product'])
    }))

  }
}
