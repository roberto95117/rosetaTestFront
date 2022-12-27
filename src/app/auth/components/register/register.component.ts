import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit() {
  }

  buildForm(){
    this.form= this.builder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  onSubmit(){
    if(this.form.valid){
      this.authService.createUser(this.form.get('username').value,this.form.get('password').value).then(()=>{
        this.router.navigate(['auth/login']);
      }).catch(()=>{
        alert('ocurrio un error');
      })
    }
  }

}
