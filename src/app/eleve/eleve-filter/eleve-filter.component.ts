import { Component, Input, OnInit } from '@angular/core';
import { Eleve } from '../eleve';
import { ELEVES } from '../mock-eleve-list';
import { HttpClient } from '@angular/common/http';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-eleve-filter',
  templateUrl: './eleve-filter.component.html',
  styleUrl: './eleve-filter.component.scss'
})


export class EleveFilterComponent implements OnInit {
  @Input() eleve!: Eleve;
  filteredEleveList: Eleve[] = [];
  eleveList: Eleve[] = ELEVES;
  eleveNotFound!: Boolean;
  loading: boolean = false;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(
    private http: HttpClient
  ) {
    // this.filteredEleveList = this.eleveList;
  }

  ngOnInit(): void {
    this.http.get<Eleve[]>("https://localhost:7207/api/eleve").subscribe(
      data => {
        this.eleveList = data;
        this.filteredEleveList = data;
      },
      error => {
        console.error("Erreur lors de la récupération des élèves :", error);
      }
    );
  }

  filterResults(text: string) {
    this.loading = true;
    if (!text) {
      this.filteredEleveList = this.eleveList;
      this.loading = false;
      return;
    }
  
    this.filteredEleveList = this.eleveList.filter(
      eleve => eleve?.name.toLowerCase().includes(text.toLowerCase())
    );
    this.eleveNotFound = false;
    this.loading = false;
  }
}
