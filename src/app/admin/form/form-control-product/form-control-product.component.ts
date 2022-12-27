import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event, Router } from '@angular/router';
import { ProductService } from 'src/app/core/_service/product-sevice.service';
import { MyValidators } from 'src/app/util/validator';

@Component({
  selector: 'app-form-control-product',
  templateUrl: './form-control-product.component.html',
  styleUrls: ['./form-control-product.component.css']
})
export class FormControlProductComponent implements OnInit {

  form : FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
    ) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form=this.formBuilder.group({
      id: ['',Validators.required],
      title: ['',Validators.required],
      price: [0,[Validators.required,MyValidators.isPriceValid]],
      image: ['',Validators.required],
      description: ['',Validators.required]
    });
  }

  saveProduct(event: Event){
    const product=this.form.value;
    this.productService.createProduct(product).subscribe((resp)=>{
      this.router.navigate(['./admin/products']);
    })
  }



}
