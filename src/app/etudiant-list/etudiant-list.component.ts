import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../etudiant.service';
import {EtudiantComponent} from '../etudiant/etudiant.component';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  etudiants: EtudiantComponent[];
  constructor(private etudiantsService: EtudiantService) { }

  ngOnInit() {
    this.getEtudiant();
  }

  getEtudiant(): void{
    this.etudiantsService.getEtudiant().subscribe(etudiants => this.etudiants = etudiants);
  }
}
