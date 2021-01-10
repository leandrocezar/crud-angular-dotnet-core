import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { Escolaridade, EscolaridadeLabel } from "../../enums/escolaridade.enum";
import { Usuario } from "../../models/usuario.model";
import * as moment from "moment";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit, OnChanges {

  @Input()
  usuario: Usuario = {};

  @Output()
  submitEvent: EventEmitter<any> = new EventEmitter();

  public usuarioForm: FormGroup;

  constructor (private datePipe: DatePipe) { }

  escolaridades = Array.from((EscolaridadeLabel.keys()));

  submitted = false;


  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    const usuarioChange: Usuario = changes.usuario.currentValue;
    this.carregarDados();
  }

  carregarDados() {

    if (!this.usuario) {
      this.initForm();
    } else {
      if (this.usuarioForm) {
        this.usuarioForm.get("id").patchValue(this.usuario.id);
        this.usuarioForm.get("firstName").patchValue(this.usuario.firstName);
        this.usuarioForm.get("lastName").patchValue(this.usuario.lastName);
        this.usuarioForm.get("email").patchValue(this.usuario.email);
        this.usuarioForm.get("birthdayDate").patchValue(this.datePipe.transform(this.usuario.birthdayDate, "dd/MM/yyyy"));
        this.usuarioForm.get("education").patchValue(this.usuario.education);
      }
    }

  }
  initForm() {
    this.usuarioForm = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      birthdayDate: new FormControl(null, [Validators.required, this.isValidDate(), this.isFutureDate()]),
      education: new FormControl(null, [Validators.required])
    });
  }


  isFutureDate() {

    return (control: AbstractControl) => {

      if (control?.value?.length > 0) {

        const dateInput = moment(control?.value, "DD/MM/YYYY", true);
        const today = moment(new Date());

        if (today.diff(dateInput) < 0) {
          return { futureDate: true }
        }

        return null;
      }

    }
  }

  isValidDate() {

    return (control: AbstractControl) => {

      if (control?.value?.length > 0) {

        if (!moment(control?.value, "DD/MM/YYYY", true).isValid()) {
          return { validDate: true }
        }

        return null;
      }

    }

  }

  onSubmit() {
    this.submitted = true;


    this.submitEvent.emit(this.getModelValue());
  }

  getModelValue(): Usuario {
    const model = new Usuario();

    model.id = this.usuarioForm.get("id").value ? Number(this.usuarioForm.get("id").value) : null;
    model.firstName = this.usuarioForm.get("firstName").value;
    model.lastName = this.usuarioForm.get("lastName").value;
    model.email = this.usuarioForm.get("email").value;

    const ptBrDate = this.usuarioForm.get("birthdayDate").value;
    model.birthdayDate = new Date(ptBrDate);

    model.education = Number(this.usuarioForm.get("education").value);

    return model;
  }

  get escolaridadeKey() {
    return Object.keys(EscolaridadeLabel);
  }

  get diagnostic() { return JSON.stringify(this.usuario); }

}
