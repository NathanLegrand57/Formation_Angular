import { Component, Input, OnInit } from '@angular/core';
import { Eleve } from '../eleve';
import { EleveService } from '../eleve.service';
import { Router } from '@angular/router';
import { ELEVES } from '../mock-eleve-list';

@Component({
  selector: 'app-eleve-list',
  templateUrl: './eleve-list.component.html',
  styleUrl: './eleve-list.component.scss'
})
export class EleveListComponent implements OnInit {
  eleveList: Eleve[] = ELEVES; // ELEVES est censé être supprimé grâce au service mais pas de solution
  addedEleve: boolean | undefined;
  newEleveId!: number;
  newEleveName: string = '';
  newEleveSurname: string = '';

  constructor(
    private router: Router,
    private eleveService: EleveService,
  ) { }

  ngOnInit(): void {
    this.eleveList = this.eleveService.getEleveList();
  }

  deleteItem(index: number): void {
    this.eleveList.splice(index, 1);
  }

  newEleve() {
    this.addedEleve = true;
  }

  addEleve() {
    const newEleve: Eleve = {
      id: this.newEleveId,
      name: this.newEleveName,
      surname: this.newEleveSurname
    };

    this.eleveList.push(newEleve);

    this.newEleveId = +'';
    this.newEleveName = '';
    this.newEleveSurname = '';
    this.addedEleve = false;
  }
}

