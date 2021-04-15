import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Email } from "../modelo/email.modelo";

@Injectable()
export class EnviarEmailService{
    emailColeccion:AngularFirestoreCollection<Email>;
    emailDoc:AngularFirestoreDocument<Email>;
    emails:Observable<Email[]>;
    email:Observable<Email>;

    constructor(private db:AngularFirestore,private router:Router){
        this.emailColeccion=db.collection('email',ref=>ref.orderBy('nombre','asc'));
    }

    enviarEmail(email:Email){
        this.emailColeccion.add(email);
    }
}