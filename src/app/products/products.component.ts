import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product.model';
import { ProductService } from '../core/_service/product-sevice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[]=[];

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.fetchAllProducts();
  }

  fetchAllProducts(){
    this.productService.getAllProducts().subscribe((products)=>{
      this.products=products;
    });
  }

}
