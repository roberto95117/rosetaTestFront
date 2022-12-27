import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  power: number = 10;
  
  constructor() { }

  ngOnInit() {
  }

  title1 :string = 'soy el titulo';
  nombres = ['roberto','martin','xocop','cuxil'];
  products: Product[]  =[{
    id: 1,
    title: 'camisa',
    image: 'src/image.jpg',
    description: 'talla l muu larga',
    price: 12.22
  },
  {
    id: 2,
    title: 'camisa 2',
    image: 'src/image2.jpg',
    description: 'talla l muu larga 2',
    price: 22.22
  },
  {
    id: 3,
    title: 'camisa 3',
    image: 'src/image3.jpg',
    description: 'talla l muu larga 3',
    price: 22.22
  },
  {
    id: 4,
    title: 'camisa 4',
    image: 'src/image4.jpg',
    description: 'talla l muu larga 4',
    price: 22.22
  },
  {
    id: 5,
    title: 'camisa 5',
    image: 'src/image5.jpg',
    description: 'talla l muu larga 5',
    price: 22.22
  },
  {
    id: 6,
    title: 'camisa 6',
    image: 'src/image2.jpg',
    description: 'talla l muu larga 6',
    price: 22.22
  }];
  addItem(){
    this.nombres.push('new elemnt');
  }

  rmItem(index: number){
    this.nombres.splice(index,1);
  }

  onReciveEvent(id: number){
    console.log('productId Received ', id);
  }
}

