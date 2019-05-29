import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TypeCompteService } from './typecompte.service';
import { TypeCompte } from '../beans/typecompte'

@Component({
  selector: 'app-typecompte',
  templateUrl: './typecompte.component.html',
  styleUrls: ['./typecompte.component.scss']
})
export class TypeCompteComponent implements OnInit {

      typecomptes : TypeCompte[];
      typecompteForm: FormGroup;
      operation : string = 'add';
      selectedTypeCompte :TypeCompte ;

      constructor(private typecompteService : TypeCompteService, private fb: FormBuilder){
         this.createForm();
      }

  ngOnInit() {
    this.initTypeCompte();
    this.loadTypeComptes();
  }

  createForm(){
    this.typecompteForm = this.fb.group({
      role: ''
    });
  }

  loadTypeComptes(){
    this.typecompteService.getTypeComptes().subscribe(
      data => {this.typecomptes = data},
      error => {console.log('ERREUR !!!')},
      () => {console.log('Le chargement des types de compte est terminé' )}
    );
  }

  addTypeCompte(){
    const t = this.typecompteForm.value;
    this.typecompteService.addTypeCompte(t).subscribe(
      res => {
        this.initTypeCompte();
        this.loadTypeComptes();
      }
    );
  }

  updateTypeCompte(){
    console.log("upd  "+this.selectedTypeCompte.role);
    this.typecompteService.updateTypeCompte(this.selectedTypeCompte).subscribe(
      res => {
        this.initTypeCompte();
        this.loadTypeComptes();
        this.operation="add";
      }
    );
  }

  deleteTypeCompte(){
    this.typecompteService.deleteTypeCompte(this.selectedTypeCompte.id).subscribe(
      res => {
        this.selectedTypeCompte = new  TypeCompte();
        this.loadTypeComptes();
      }
    );
  }

  initTypeCompte(){
    this.selectedTypeCompte = new  TypeCompte();
    this.createForm();
  }

}
