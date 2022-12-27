import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit, DoCheck, OnDestroy} from '@angular/core'
import { CartService } from '../core/_service/cart.service';
import { Product } from '../_model/product.model'
@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styleUrls:['product.component.css']
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy{

    @Input() productInput: Product;
    @Output() onAgregarCarrito: EventEmitter<any> = new EventEmitter();

    today = new Date();
    constructor(private carService: CartService){
 //       console.log("constructor");
    }

    ngOnChanges(changes: SimpleChanges): void {
    //    console.log('onChanges', changes);
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //console.log('onInit');
    }

    ngDoCheck(): void {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        //console.log("doCheck");
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
      //  console.log("onDestroy");
    }

    agregarCarrito(){
        this.onAgregarCarrito.emit(this.productInput.id);
        this.carService.addCart(this.productInput);
    }
}