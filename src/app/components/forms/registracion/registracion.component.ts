
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../../../services/user.service';
import {map} from 'rxjs/operators';
declare var  $: any;
@Component({
  selector: 'app-registracion',
  templateUrl: './registracion.component.html'
})
export class RegistracionComponent implements OnInit {

  // usuariologin: any={
  //   'email':'',
  //   'password':''    
  // };
  registerForm: FormGroup;  
  errorMessage;
  mostrarmsj=false;
  mostrarmsjFinal=false;

  //@Output() autenticado: EventEmitter<boolean>;
  constructor(private _userService: UserService) { 
    
  }
  ngOnInit() {

    this.registerForm= new FormGroup({
      'username': new FormControl('',Validators.required),
      'firstname': new FormControl('',Validators.required),
      'lastname': new FormControl('',Validators.required),
      'email': new FormControl('',[
        Validators.required
        , 
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                ]),
      'password': new FormControl('',Validators.required),
      'confpassword': new FormControl('',Validators.required)

    });
    // this.registerForm.setValue(this.usuariologin);
  }
  mostrarMensaje(){
    this.mostrarmsj=true;
  }
  seRegistro(){
    //this._router.navigate(['/heroe',this.index]);
    //this.autenticado.emit(true);
    this.mostrarmsjFinal=true;
    this.registerForm.reset();
    
  }
  cerrar(){
    this.mostrarmsjFinal=false;
    $('#modalRegistro').modal('hide');
  }
  registrar(){  
    this.mostrarmsj=false;
    let formulario= this.registerForm.value;
    let usuario={
      'username': formulario.username,
      'firstname': formulario.firstname,
      'lastname': formulario.lastname,
      'email': formulario.email,
      'password': formulario.password
    };
    this._userService.registrarse(usuario).subscribe(
      (response: any) =>{
        let identity = response.user;             
        if(!identity._id){
          console.log("El usuario no está correctamente identificado");
        }else{    
          this.seRegistro();                 
        }
      },
      error => {
        this.errorMessage = <any>error;                
                  this.errorMessage = error.error.message;  
                  this.mostrarMensaje();                                  
      }
    );
    
  }

}