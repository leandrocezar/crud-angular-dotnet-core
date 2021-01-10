import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from "../../models/usuario.model";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit {

  usuario: Usuario;

  constructor (
    private usuarioService: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  createUser(usuario: Usuario) {

    this.usuarioService.create(usuario)
      .subscribe((response: Usuario) => {
          alert("Operação realizada com sucesso!");
        this.router.navigateByUrl("/users");
      },
      (error) => {
        console.log(error)
      })

  }

}
