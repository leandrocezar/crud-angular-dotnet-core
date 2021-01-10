import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./core/components/home/home.component";
import { UsuariosListaComponent } from "./features/feature-usuario/components/usuarios-lista/usuarios-lista.component";
import { PageNotFoundComponent } from "./core/components/page-not-found/page-not-found.component";
import { UsuariosDetalheComponent } from "./features/feature-usuario/components/usuarios-detalhe/usuarios-detalhe.component";
import { UsuariosCreateComponent } from "./features/feature-usuario/components/usuarios-create/usuarios-create.component";
import { UsuariosEditComponent } from "./features/feature-usuario/components/usuarios-edit/usuarios-edit.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UsuariosListaComponent },
  { path: "users/:id", component: UsuariosDetalheComponent },
  { path: "users/edit/:id", component: UsuariosEditComponent },
  { path: "user/new", component: UsuariosCreateComponent },
  { path: "**", component: PageNotFoundComponent, pathMatch: "full"}
];

@NgModule({
  declarations: [],
  imports: [
CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
