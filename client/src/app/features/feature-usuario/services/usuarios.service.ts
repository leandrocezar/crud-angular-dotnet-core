import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl = "https://localhost:5001/api/";

  constructor (private _http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(this.baseUrl + `users`);
  }

  getById(id: number): Observable<Usuario> {
    return this._http.get<Usuario>(this.baseUrl + `users/${id}`);
  }

  create(resource: any): Observable<Usuario>{
    return this._http.post<Usuario>(this.baseUrl + "users", resource);
  }

  update(id: number, resource: any) : Observable<Usuario> {
    return this._http.put<Usuario>(this.baseUrl + `users/${id}`, resource);
  }

  remove(id: number, resource: any) {
    return this._http.delete<Usuario>(this.baseUrl + `users/${id}`, resource);
  }
}
