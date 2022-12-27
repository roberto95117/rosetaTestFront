import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../_model/product.model';
import { ProductService } from '../core/_service/product-sevice.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.fetchProduct(params.id);
    });
  }

  fetchProduct(id: number){
      this.productService.getProduct(id).subscribe((product)=>{
        this.product=product;
      })
    
  }

}
