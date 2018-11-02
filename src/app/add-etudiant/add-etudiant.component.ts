import { Component } from '@angular/core';
import { Etudiant} from '../etudiant';
import { Router} from '@angular/router';
import {EtudiantService} from '../etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent  {
  constructor(
    private etudiantsService: EtudiantService,
    private router: Router,
  ) {}
  data: any = {};

  onSubmit(): void {
    const id = this.etudiantsService.etudiants.length + 1;
    const img = '../../assets/img/profil.png';
    const name = this.data.name;
    const firstname = this.data.firstname;
    const birthdate = this.data.birthdate;
    const matieres =  [];

    const Student = new Etudiant(
      id,
      img,
      name,
      firstname,
      birthdate,
      matieres
    );

    this.etudiantsService.addStudent(Student);
    this.router.navigate(['/etudiants']);
    alert('Nouvel étudiant ajouté !');
  }
}


