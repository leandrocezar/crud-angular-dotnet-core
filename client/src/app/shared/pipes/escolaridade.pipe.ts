import { Pipe, PipeTransform } from '@angular/core';
import { Escolaridade, EscolaridadeLabel } from "src/app/features/feature-usuario/enums/escolaridade.enum";

@Pipe({
  name: 'escolaridade'
})
export class EscolaridadePipe implements PipeTransform {

  transform(value: Escolaridade): unknown {

    return EscolaridadeLabel.get(value);
  }

}
