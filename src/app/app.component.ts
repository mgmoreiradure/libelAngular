import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libelAngular';




  abilitar(idx: boolean){
    if(idx== true){
      alert("logueado");
    }else{
      alert("no logueado");
    }
  }
}
