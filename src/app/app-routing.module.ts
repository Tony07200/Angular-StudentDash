import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TirageAuSortComponent} from './tirage-au-sort/tirage-au-sort.component';
import {EtudiantListComponent} from './etudiant-list/etudiant-list.component';
import {DetailsStudentComponent} from './details-student/details-student.component';
import {AddEtudiantComponent} from './add-etudiant/add-etudiant.component';

const routes: Routes = [
  { path: '', component: EtudiantListComponent},
  { path: 'etudiants', component: EtudiantListComponent},
  { path: 'addetudiants', component: AddEtudiantComponent},
  { path: 'tirageausort', component: TirageAuSortComponent },
  { path: 'details/:id', component: DetailsStudentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
