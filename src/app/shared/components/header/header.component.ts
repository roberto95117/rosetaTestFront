import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/_service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total = 0;
  total$ : Observable<number>;
  constructor(private CartService: CartService) { 
    this.CartService.cart$.pipe(
      map(productos => productos.length)
    ).subscribe(total =>{
      this.total=total;
    });
    this.total$ = this.CartService.cart$.pipe(
      map(productos => productos.length)
    );
    // this.CartService.cart$.subscribe((products )=>{
    //   this.total=products.length;
    // });
  }

  ngOnInit() {
  }

}
