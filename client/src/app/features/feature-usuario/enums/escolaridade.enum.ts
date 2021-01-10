export enum Escolaridade {
  Infantil = 1,
  Fundamental = 2,
  EnsinoMedio = 3,
  Superior = 4
}

export const EscolaridadeLabel = new Map<number, string>([
  [Escolaridade.Infantil, "Infantil"],
  [Escolaridade.Fundamental, "Fundamental"],
  [Escolaridade.EnsinoMedio, "Ensino Médio"],
  [Escolaridade.Superior, "Superior"],
]);
