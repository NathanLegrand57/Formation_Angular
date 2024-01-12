import { Component, Input, OnInit } from '@angular/core';
import { Eleve } from '../eleve';
import { EleveService } from '../../service/eleve.service';
import { Router } from '@angular/router';
import { ELEVES } from '../mock-eleve-list';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';
import { ProgressSpinnerMode, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-eleve-list',
  templateUrl: './eleve-list.component.html',
  styleUrl: './eleve-list.component.scss',
})
export class EleveListComponent implements OnInit {
  eleveList: Eleve[] = ELEVES; // ELEVES est censé être supprimé grâce au service mais pas de solution
  addedEleve: boolean | undefined;
  newEleveId!: number;
  newEleveName: string = '';
  newEleveSurname: string = '';
  loading: boolean = false;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(
    private router: Router,
    private eleveService: EleveService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get<Eleve[]>("https://localhost:7207/api/eleve").subscribe({
      next: data => {
        this.eleveList = data;
      },
      error: error => {
        // console.error("Erreur lors de la récupération des élèves :");
        // confirm("test"+error);
      }
    });
  }

  deleteEleve(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet élève ?')) {
      this.loading = true;

      const eleveToDelete = this.eleveList.find(eleve => eleve.id === id);

      if (eleveToDelete) {
        this.eleveService.deleteEleveMethod(eleveToDelete.id)
          .subscribe({
            next: res => {
              this.eleveList = res as Eleve[];
              this.loading = false;
            },
            error: error => {
              // console.log("Erreur lors de la suppression de l'élève: " + error);
              this.loading = false;
            }
          });
      } else {
        console.error("Élève non trouvé dans la liste locale");
        this.loading = false;
      }
    }
  }

  newEleve() {
    this.addedEleve = true;
  }

  addEleve() {
    this.loading = true;
    const newEleve: Eleve = {
      id: this.newEleveId,
      name: this.newEleveName,
      surname: this.newEleveSurname,
    };
    this.eleveService.addEleveMethod(newEleve).subscribe({
      next: res => {
        console.log(res);
        this.eleveList = res as Eleve[];
        this.loading = false;
      },
      error: err => {
        // console.log("Erreur lors de l'ajout de l'élève: " + err);
        this.loading = false;
      }
    });

    this.newEleveId = +'';
    this.newEleveName = '';
    this.newEleveSurname = '';
    this.addedEleve = false;
  }

}

