import { Employe } from './Employe';
import { Etudiant } from './Etudiant';

export class Attestation{
  constructor(
    public id?: number,
    public dateSortie?: any,
    public numero?: string,
    public employe?: any,
    public etudiant?: any
  )
  {
    
  }
}
