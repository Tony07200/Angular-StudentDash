import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../etudiant.service';
import {EtudiantComponent} from '../etudiant/etudiant.component';

@Component({
  selector: 'app-tirage-au-sort',
  templateUrl: './tirage-au-sort.component.html',
  styleUrls: ['./tirage-au-sort.component.css']
})
export class TirageAuSortComponent implements OnInit {

  etudiants: EtudiantComponent[];
  nbAleatoire: number;
  response: EtudiantComponent[] = [];
  response2: EtudiantComponent[] = [];
  response3: EtudiantComponent[] = [];
  etudiant: EtudiantComponent;

  constructor(private etudiantsService: EtudiantService) { }
  ngOnInit() {
    this.getEtudiant();
  }

  sortGroup2(): EtudiantComponent[] {
    // let nbTirage = 0;
    // while ( nbTirage < 2) {
    //   this.nbAleatoire = Math.round(Math.random() * this.etudiants.length );
    //   console.log('Nb aleatoire:' + this.nbAleatoire);
    //   this.etudiantsService.getStudentDetails(this.nbAleatoire).subscribe(etudiant => this.etudiant = etudiant);
    //   console.log('Etudiant delete: ' + this.etudiant.name);
    //   this.response.push(this.etudiant);
    //   this.etudiants.splice(this.nbAleatoire , 1);
    //   nbTirage ++;
    //   console.log(this.etudiants);
    // }
    //   return this.response;
    this.shuffle(this.etudiants);
    this.response = this.etudiants;
    console.log(this.response);
    return this.response;
  }

  sortGroup3(): EtudiantComponent[] {
    this.shuffle(this.etudiants);
    this.response2 = this.etudiants;
    return this.response2;
  }
  sortGroup4(): EtudiantComponent[] {
    this.shuffle(this.etudiants);
    this.response3 = this.etudiants;
    return this.response3;
  }

  getEtudiant(): void{
    this.etudiantsService.getEtudiant().subscribe(etudiants => this.etudiants = etudiants);
  }

  shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
}
