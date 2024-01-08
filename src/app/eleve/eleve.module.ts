import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EleveListComponent } from './eleve-list/eleve-list.component';
import { EleveFilterComponent } from './eleve-filter/eleve-filter.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  ]
})
export class EleveModule { }
