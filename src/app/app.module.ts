import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { PlanesComponent } from './components/planes/planes.component';
import { BlogComponent } from './components/blog/blog.component';
import { MicuentaComponent } from './components/micuenta/micuenta.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CursosLiveComponent } from './components/cursos-live/cursos-live.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { app_routing } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CursosComponent,
    PlanesComponent,
    BlogComponent,
    MicuentaComponent,
    FooterComponent,
    CursosLiveComponent,
    WebinarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
