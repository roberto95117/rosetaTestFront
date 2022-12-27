import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Estudiante } from 'src/app/_model/estudiante';
import { EstudianteService } from 'src/app/core/_service/estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  constructor(private estudianteService:EstudianteService,public route: ActivatedRoute) { }

  dataSource: MatTableDataSource<Estudiante>;
  displayedColumns=['idEstudiante','fechaNacimiento','Alias'];

  ngOnInit() {
    this.estudianteService.listar().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }

  mostrarMas(){

  }

  eliminar(){
    
  }





  
  
}
