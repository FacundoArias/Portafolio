import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navside',
  templateUrl: './navside.component.html',
  styleUrls: ['./navside.component.scss']
})
export class NavsideComponent{

  pantalla:number;
  bool:boolean=false;
  @ViewChild('cerrar') cerrar:ElementRef;

  constructor(){
    addEventListener("resize",()=>{
      let contenedor=document.getElementById('toggle');
      if(innerWidth<=992 && this.bool==false ){
      contenedor.classList.add('esconder');
      this.bool=true;
    }else if(innerWidth>992 && this.bool==true){
      contenedor.classList.remove('esconder');
      this.bool=false;

    }
    });

   
  }  

  mostrar(){
    let contenedor=document.getElementById('toggle');
    contenedor.classList.toggle('esconder');
  }


  activo(ref,cerrar){
    console.log();
    if(ref.classList.contains('active')){
    console.log('estas en esta seccion')
    }
    else{
      document.querySelectorAll('.li').forEach(e=>{
        e.classList.remove('active');
      });
      ref.classList.add('active');
    }
    if(innerWidth <= 992){
      this.cerrar.nativeElement.click();
    }
  }
  

}


