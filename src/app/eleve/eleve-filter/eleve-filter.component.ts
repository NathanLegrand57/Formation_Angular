import { Component, Input } from '@angular/core';
import { Eleve } from '../eleve';
import { ELEVES } from '../mock-eleve-list';
import { EleveService } from '../eleve.service';

@Component({
  selector: 'app-eleve-filter',
  templateUrl: './eleve-filter.component.html',
  styleUrl: './eleve-filter.component.scss'
})


export class EleveFilterComponent {
  @Input() eleve!: Eleve;
  filteredEleveList: Eleve[] = [];
  eleveList: Eleve[] = ELEVES;
  eleveNotFound!: Boolean;

  constructor(private eleveService: EleveService) {
    this.eleveList = this.eleveService.getEleveList();
    this.filteredEleveList = this.eleveList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredEleveList = this.eleveList;
      return;
    }
  
    this.filteredEleveList = this.eleveList.filter(
      eleve => eleve?.name.toLowerCase().includes(text.toLowerCase())
    );
    this.eleveNotFound = false;
  }
}
