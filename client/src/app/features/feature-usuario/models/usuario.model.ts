import { Escolaridade } from "../enums/escolaridade.enum";

export interface Usuario {

  id?: number;
  firstName?: string;
  lastName?: string;
  email: string;
  birthDayDate?: Date;
  education?: Escolaridade;
}
