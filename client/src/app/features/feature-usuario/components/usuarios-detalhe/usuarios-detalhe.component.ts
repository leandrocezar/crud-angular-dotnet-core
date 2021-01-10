import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Usuario } from "../../models/usuario.model";
import { UsuariosService } from "./../../services/usuarios.service";

@Component({
  selector: 'app-usuarios-detalhe',
  templateUrl: './usuarios-detalhe.component.html',
  styleUrls: ['./usuarios-detalhe.component.css']
})
export class UsuariosDetalheComponent implements OnInit {

  usuario: Usuario;

  constructor (
    private usuarioService: UsuariosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.usuarioService.getById(id)
      .subscribe((response: Usuario) => { this.usuario = response },
      (error) => {
        throw new Error(error);
      })

  }

}
