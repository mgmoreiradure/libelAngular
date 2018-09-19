import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  @Output() autenticado: EventEmitter<boolean>;
  constructor() { 
    this.autenticado= new EventEmitter();
  }
  ngOnInit() {
  }
  seLogue(){
    //this._router.navigate(['/heroe',this.index]);
    this.autenticado.emit(true);
  }
}
