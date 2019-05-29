import { Etablissement } from './Etablissement';

export class Etudiant{
  constructor(
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public dateNaissance?: any,
    public lieuNaissance?: string,
    public codeNationale?: string,
    public niveau?: number,
    public etablissement?: any
  )
  {

  }
}