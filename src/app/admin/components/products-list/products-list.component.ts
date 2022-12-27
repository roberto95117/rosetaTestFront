import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ProductService } from 'src/app/core/_service/product-sevice.service';
import { Product } from 'src/app/_model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products : Product[]=[];
  dataSource: MatTableDataSource<Product>;
  displayedColumns=['id','title','price','acciones'];
  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productService.getAllProducts().subscribe((products)=>{
      this.products=products;
      this.dataSource=new MatTableDataSource(products);
    })
  }

  eliminar(id: number){
    this.productService.deleteProduct(id).subscribe((resp)=>{
      this.fetchProducts();
    })
  }

}
