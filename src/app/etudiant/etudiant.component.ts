import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {

  id: number;
  img: string;
  name: string;
  firstname: string;
  birthdate: string;

}
