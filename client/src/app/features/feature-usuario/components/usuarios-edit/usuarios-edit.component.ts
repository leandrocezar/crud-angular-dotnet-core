import { DatePipe } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { Usuario } from "../../models/usuario.model";
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.css']
})
export class UsuariosEditComponent implements OnInit {

  usuario: Usuario;

  constructor (
    private datePipe: DatePipe,
    private usuarioService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.usuarioService.getById(id)
      .subscribe((response: Usuario) => {
        this.usuario = response
      },
      (error) => {
        console.log(error);
      })

  }


  updateUser(usuario: Usuario) {


    this.usuarioService.update(usuario.id, usuario)
      .subscribe((response: Usuario) => {
        alert("Operação realizada com sucesso");
        this.router.navigateByUrl("/users");
      },
      (error) => {console.log(error)})

  }

}
