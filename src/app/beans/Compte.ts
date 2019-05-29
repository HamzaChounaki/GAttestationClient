import { TypeCompte } from './TypeCompte';

export class Compte{
  constructor(
    public id?: number,
    public login?: string,
    public password?: string,
    public typecompte?: any
  )
  {
    
  }
}
