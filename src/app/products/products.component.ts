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
    let searchValue=this.value==''?'NoSearch':this.value
    this.productService.getProducts(this.page,searchValue).subscribe((data)=>{
      console.log(data.bookings)
      this.totalProducts=data.bookings.cnt
      this.products=data.bookings.data2

    },(error)=>{
      console.log(error)
    })
  }
  Search(){
    this.getProducts()
  }
  clear(){
    this.value=''
    this.getProducts()
  }
  getProducts(event?:any){
    console.log(event)
    this.page=event?event.pageIndex+1:1
    let searchValue=this.value==''?'NoSearch':this.value
    this.productService.getProducts(this.page,searchValue).subscribe((data)=>{
      console.log(data.bookings)
      this.totalProducts=data.bookings.cnt
      this.products=data.bookings.data2

    },(error)=>{
      console.log(error)
    })
  }

}
