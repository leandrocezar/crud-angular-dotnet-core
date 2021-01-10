import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../models/usuario.model";
import { UsuariosService } from "../../services/usuarios.service";


@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  constructor (private usuariosService: UsuariosService) { }

  usuarios: Usuario[];

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuariosService.getAll()
      .subscribe((response: Usuario[]) => {
        this.usuarios = response;
        console.log(this.usuarios);
      },
      (error) => console.log(error));
  }

  removeUser(usuario: Usuario){
    this.usuariosService.remove(usuario.id)
      .subscribe((response: Usuario) => {
        alert("Operação realizada com sucesso")
        this.getUsuarios();
      },
      error => {
        console.log(error)
      });
  }



}
