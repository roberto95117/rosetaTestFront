import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './_service/product-sevice.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers:[
    ProductService
  ]
})
export class CoreModule { }
