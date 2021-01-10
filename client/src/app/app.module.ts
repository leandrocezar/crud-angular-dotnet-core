import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { UsuariosListaComponent } from './features/feature-usuario/components/usuarios-lista/usuarios-lista.component';
import { HomeComponent } from './core/components/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { UsuariosDetalheComponent } from './features/feature-usuario/components/usuarios-detalhe/usuarios-detalhe.component';
import { SharedModule } from "./shared/shared.module";
import { EscolaridadePipe } from "./shared/pipes/escolaridade.pipe";
import { UsuarioFormComponent } from "./features/feature-usuario/components/usuario-form/usuario-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsuariosCreateComponent } from "./features/feature-usuario/components/usuarios-create/usuarios-create.component";
import { UsuariosEditComponent } from './features/feature-usuario/components/usuarios-edit/usuarios-edit.component';
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    UsuariosListaComponent,
    HomeComponent,
    UsuariosDetalheComponent,
    UsuarioFormComponent,
    UsuariosCreateComponent,
    UsuariosEditComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    EscolaridadePipe,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
