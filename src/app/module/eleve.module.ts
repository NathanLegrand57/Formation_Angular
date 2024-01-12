import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EleveListComponent } from '../eleve/eleve-list/eleve-list.component';
import { EleveFilterComponent } from '../eleve/eleve-filter/eleve-filter.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ErrorInterceptorService } from '../service/error-interceptor.service';

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
    BrowserModule,
    CommonModule,
    RouterModule.forChild(eleveRoutes),
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    }
  ]
})
export class EleveModule { }
