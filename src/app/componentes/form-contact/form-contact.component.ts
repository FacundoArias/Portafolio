import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/modelo/email.modelo';
import { EnviarEmailService } from 'src/app/servicio/enviarEmail.service';
@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {
  emailObj={
    nombre:'',
    asunto:'',
    email:'',
    msj:''
  };
  constructor(private EnviarEmailService:EnviarEmailService) { }

  ngOnInit(): void {
  }
  
  enviarForm(){
    if(this.emailObj.asunto!='',this.emailObj.nombre!='',this.emailObj.email!='',this.emailObj.msj!=''){
    let expRegular=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if(expRegular.test(this.emailObj.email)){
    this.EnviarEmailService.enviarEmail(this.emailObj);
    this.emailObj.nombre='';
    this.emailObj.asunto='';
    this.emailObj.email='';
    this.emailObj.msj='';
    alert('Su Mensaje fue enviado con exito. Muchas gracias');
    }else{
    alert("El email es invalido")
    }
  }else{
    alert('Es obligatorio completar los campos');
  }
  }

}
