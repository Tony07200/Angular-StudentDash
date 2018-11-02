import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../etudiant.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  etudiant;

  constructor(
    private route: ActivatedRoute,
    private etudiantsService: EtudiantService,

  ) { }

  ngOnInit() {
    this.getStudent();

  }

  getStudent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.etudiantsService.getStudentDetails(Number(id)).subscribe(etudiant => this.etudiant = etudiant);
  }
}





