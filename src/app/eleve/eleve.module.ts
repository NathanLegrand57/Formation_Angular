import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EleveListComponent } from './eleve-list/eleve-list.component';
import { EleveFilterComponent } from './eleve-filter/eleve-filter.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

export const eleveRoutes: Routes = [
  { path: 'eleves', component: EleveListComponent },
  { path: 'eleves-filter', component: EleveFilterComponent },
]

@NgModule({
  declarations: [
    EleveListComponent,
    EleveFilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(eleveRoutes),
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ]
})
export class EleveModule { }
