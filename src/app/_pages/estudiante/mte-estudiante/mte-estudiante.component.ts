import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Estudiante } from 'src/app/_model/estudiante';
import { EstudianteService } from 'src/app/core/_service/estudiante.service';

@Component({
  selector: 'app-mte-estudiante',
  templateUrl: './mte-estudiante.component.html',
  styleUrls: ['./mte-estudiante.component.css']
})
export class MteEstudianteComponent implements OnInit {

  form: FormGroup;
  id:number;
  edicion:boolean;
  maxFecha:Date=new Date();

  constructor(
    private service: EstudianteService,
    private route: ActivatedRoute,
    private router:Router
  ) {
    this.route.params.subscribe((params: Params)=>{
      this.id=params['id'];
      this.edicion= params['id'] !=null;
      this.initForm();
    })
   }

   

  ngOnInit() {
    this.form=new FormGroup({
      'id': new FormControl(0),
      'alias': new FormControl(''),
      'fecha': new FormControl(new Date())
    }); 
  }
  operar(){
    if(this.form.invalid){
      return;
    }
    let obj= new Estudiante();
    obj.idEstudiante=this.form.value['id'];
    obj.alias=this.form.value['alias'];
    obj.fechaNac=this.form.value['fecha'];

    if(this.edicion){
      this.service.modificar(obj).subscribe();
    }else{
      this.service.registrar(obj).subscribe();
    } 
    this.router.navigate(['/estudiante']);
  }

  initForm(){
    if(this.edicion){
      this.service.listarPorId(this.id).subscribe((obj: Estudiante)=>{
        this.form=new FormGroup({
          'id': new FormControl(obj.idEstudiante),
          'alias': new FormControl(obj.alias),
          'fecha': new FormControl(obj.fechaNac)
        });
      })
    }
  }

  get f(){return this.form.controls;}

}
