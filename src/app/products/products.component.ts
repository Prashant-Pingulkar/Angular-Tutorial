import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
value=''
products=[]
totalProducts=0
page=1
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getProducts(this.page).subscribe((data)=>{
      console.log(data.bookings)
      this.totalProducts=data.bookings.cnt
      this.products=data.bookings.data2

    },(error)=>{
      console.log(error)
    })
  }

  getProducts(event:any){
    this.page=event.pageIndex+1
    console.log(event)
    this.productService.getProducts(this.page).subscribe((data)=>{
      console.log(data.bookings)
      this.totalProducts=data.bookings.cnt
      this.products=data.bookings.data2

    },(error)=>{
      console.log(error)
    })
  }

}
