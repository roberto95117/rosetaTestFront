import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/core/_service/product-sevice.service';
import { MyValidators } from 'src/app/util/validator';

@Component({
  selector: 'app-form-control-product-edit',
  templateUrl: './form-control-product-edit.component.html',
  styleUrls: ['./form-control-product-edit.component.css']
})
export class FormControlProductEditComponent implements OnInit {

  form : FormGroup;
  id : number;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params)=>{
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe((data)=>{
        this.form.patchValue({
          id: data.id,
          title: data.title,
          price: data.price,
          image: data.image,
          description: data.description
        })
      });
    });
  }

  private buildForm() {
    this.form=this.formBuilder.group({
      title: ['',Validators.required],
      price: [0,[Validators.required,MyValidators.isPriceValid]],
      image: ['',Validators.required],
      description: ['',Validators.required]
    });
  }

  updateProduct(event: Event){
    const product=this.form.value;
    this.productService.updateProduct(this.id,product).subscribe((resp)=>{
      this.router.navigate(['./admin/products']);
    })
  }

}
