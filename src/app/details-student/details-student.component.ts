import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EtudiantService} from '../etudiant.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {

  etudiant;


  constructor(
    private route: ActivatedRoute,
    private etudiantsService: EtudiantService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.etudiantsService.getStudentDetails(Number(id)).subscribe(etudiant => this.etudiant = etudiant);
  }

  goBack(): void {
    this.location.back();
  }

  removeStudent(id): void {
    this.etudiantsService.etudiants.splice(id, 1);
    alert('Etudiant supprimé !');
    this.router.navigate(['/etudiants']);
  }
}

