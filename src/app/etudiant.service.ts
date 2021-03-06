import {Injectable} from '@angular/core';
import {EtudiantComponent} from './etudiant/etudiant.component';
import {Observable, of} from 'rxjs';
import {Etudiant} from './etudiant';
import {Matiere} from './matiere';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {


  constructor() {
  }

  etudiants: Etudiant[] = [
    {
      id: 0,
      img: '../assets/img/profil.png',
      name: 'Tony',
      firstname: 'Baptiste',
      birthdate: '26/06/1990',
      matieres: [{
        title: 'PHP',
        notes: [10, 20, 15]
      },{
        title: 'JAVASCRIPT',
        notes: [1, 16, 13]
      },{
        title: 'HTML/CSS',
        notes: [3, 18, 12]
      },{
        title: 'REACT NATIVE',
        notes: [10, 2, 1]
      },{
        title: 'PHOTOSHOP',
        notes: [6, 20, 19]
      }]
    },
    {
      id: 1,
      img: '../assets/img/profil.png',
      name: 'Romaric',
      firstname: 'Gilson',
      birthdate: '8/03/1790',
      matieres: [{
        title: 'PHP',
        notes: [10, 20, 15]
      },{
        title: 'JAVASCRIPT',
        notes: [1, 16, 13]
      },{
        title: 'HTML/CSS',
        notes: [3, 18, 12]
      },{
        title: 'REACT NATIVE',
        notes: [10, 2, 1]
      },{
        title: 'PHOTOSHOP',
        notes: [6, 20, 19]
      }]
    },
    {
      id: 2,
      img: '../assets/img/profil.png',
      name: 'Damien',
      firstname: 'Thibault',
      birthdate: '2/01/1998',
      matieres: [{
        title: 'PHP',
        notes: [10, 20, 15]
      },{
        title: 'JAVASCRIPT',
        notes: [1, 16, 13]
      },{
        title: 'HTML/CSS',
        notes: [3, 18, 12]
      },{
        title: 'REACT NATIVE',
        notes: [10, 2, 1]
      },{
        title: 'PHOTOSHOP',
        notes: [6, 20, 19]
      }]
    },
    {
      id: 3,
      img: '../assets/img/profil.png',
      name: 'Ghis',
      firstname: 'Chalas',
      birthdate: '2/01/1998',
      matieres: [{
        title: 'PHP',
        notes: [10, 20, 15]
      },{
        title: 'JAVASCRIPT',
        notes: [1, 16, 13]
      },{
        title: 'HTML/CSS',
        notes: [3, 18, 12]
      },{
        title: 'REACT NATIVE',
        notes: [10, 2, 1]
      },{
        title: 'PHOTOSHOP',
        notes: [6, 20, 19]
      }]
    },
    {
      id: 4,
      img: '../assets/img/profil.png',
      name: 'Maxence',
      firstname: 'La menace',
      birthdate: '2/01/1998',
      matieres: [{
        title: 'PHP',
        notes: [10, 20, 15]
      },{
        title: 'JAVASCRIPT',
        notes: [1, 16, 13]
      },{
        title: 'HTML/CSS',
        notes: [3, 18, 12]
      },{
        title: 'REACT NATIVE',
        notes: [10, 2, 1]
      },{
        title: 'PHOTOSHOP',
        notes: [6, 20, 19]
      }]
    },
    {
      id: 5,
      img: '../assets/img/profil.png',
      name: 'Nicolas',
      firstname: 'Le parieur',
      birthdate: '2/01/1998',
      matieres: [{
        title: 'PHP',
        notes: [10, 20, 15]
      },{
        title: 'JAVASCRIPT',
        notes: [1, 16, 13]
      },{
        title: 'HTML/CSS',
        notes: [3, 18, 12]
      },{
        title: 'REACT NATIVE',
        notes: [10, 2, 1]
      },{
        title: 'PHOTOSHOP',
        notes: [6, 20, 19]
      }]
    },
    {
      id: 6,
      img: '../assets/img/profil.png',
      name: 'Vins',
      firstname: 'le retardataire',
      birthdate: '2/01/1998',
      matieres: [{
        title: 'PHP',
        notes: [10, 20, 15]
      },{
        title: 'JAVASCRIPT',
        notes: [1, 16, 13]
      },{
        title: 'HTML/CSS',
        notes: [3, 18, 12]
      },{
        title: 'REACT NATIVE',
        notes: [10, 2, 1]
      },{
        title: 'PHOTOSHOP',
        notes: [6, 20, 19]
      }]
    },
    {
      id: 7,
      img: '../assets/img/profil.png',
      name: 'Micka',
      firstname: 'Chauffagiste',
      birthdate: '2/01/1998',
      matieres: [{
        title: 'PHP',
        notes: [10, 20, 15]
      },{
        title: 'JAVASCRIPT',
        notes: [1, 16, 13]
      },{
        title: 'HTML/CSS',
        notes: [3, 18, 12]
      },{
        title: 'REACT NATIVE',
        notes: [10, 2, 1]
      },{
        title: 'PHOTOSHOP',
        notes: [6, 20, 19]
      }]
    },
    {
      id: 8,
      img: '../assets/img/profil.png',
      name: 'Remi',
      firstname: 'El Colonnel',
      birthdate: '2/01/1998',
      matieres: [{
        title: 'PHP',
        notes: [10, 20, 15]
      }, {
        title: 'JAVASCRIPT',
        notes: [1, 16, 13]
      },{
        title: 'HTML/CSS',
        notes: [3, 18, 12]
      },{
        title: 'REACT NATIVE',
        notes: [10, 2, 1]
      },{
        title: 'PHOTOSHOP',
        notes: [6, 20, 19]
      }]
    },
    {
      id: 9,
      img: '../assets/img/profil.png',
      name: 'Marie',
      firstname: 'Fontanel',
      birthdate: '2/01/1998',
      matieres: [{
        title: 'PHP',
        notes: [10, 20, 15]
      },{
        title: 'JAVASCRIPT',
        notes: [1, 16, 13]
      },{
        title: 'HTML/CSS',
        notes: [3, 18, 12]
      },{
        title: 'REACT NATIVE',
        notes: [10, 2, 1]
      },{
        title: 'PHOTOSHOP',
        notes: [6, 20, 19]
      }]
    }
  ];

  getEtudiant(): Observable<Etudiant[]> {
    return of(this.etudiants);
  }

  getStudentDetails(id: number): Observable<Etudiant> {
    return of(this.etudiants.find(etudiant => etudiant.id === id));
  }

  addStudent(etudiant: Etudiant) {
    this.etudiants.push(etudiant);
    this.getEtudiant();
  }
}
