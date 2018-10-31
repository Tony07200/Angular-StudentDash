import {Matiere} from './matiere';

export class Etudiant {
  constructor(
    public id: number,
    public img: string,
    public name: string,
    public firstname: string,
    public birthdate: string,
    public matieres: Matiere[],
  ) {}
}
