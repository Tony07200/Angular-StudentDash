import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { TirageAuSortComponent } from './tirage-au-sort/tirage-au-sort.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import {FormsModule} from '@angular/forms';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    TirageAuSortComponent,
    EtudiantListComponent,
    DetailsStudentComponent,
    AddEtudiantComponent,
    StatistiquesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
