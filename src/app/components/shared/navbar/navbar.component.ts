import { Component, OnInit } from '@angular/core';

declare var  $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  verRegistro(){
    $('#myModal').modal('show');
  }
}
