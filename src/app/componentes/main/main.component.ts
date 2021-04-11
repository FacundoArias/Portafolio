import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from 'src/app/servicio/comunicador.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private ComunicadorService:ComunicadorService) { 
  }
  
  ngOnInit(): void {
  }
  
  actualizar(secHerramientas,secProyectos,secContacto){
    let posicionHerramientas= secHerramientas.getBoundingClientRect().top;
    let posicionProyectos= secProyectos.getBoundingClientRect().top;
    let posicionContacto= secContacto.getBoundingClientRect().top;
  
    if(posicionHerramientas<=0 && posicionProyectos>0){
      this.ComunicadorService.setEstado("herramientas");
      
    }
    else if(posicionProyectos<=0 && posicionContacto>100){
      this.ComunicadorService.setEstado("proyectos");
      
    }
    else if(posicionContacto<=100){
      console.log(posicionContacto);
      this.ComunicadorService.setEstado("contacto");
    }
    else if(posicionHerramientas>300){
      this.ComunicadorService.setEstado("sobremi");
    }
    

  }

}

