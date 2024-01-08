import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ELEVES } from './eleve/mock-eleve-list';
import { Eleve } from './eleve/eleve';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'projet_formation';
  eleveList: Eleve[] = ELEVES;
  eleveSelected: Eleve | undefined;

  ngOnInit(): void {
    console.table(this.eleveList)
  }

  constructor(private route:ActivatedRoute, private router: Router) { }

  GoToElevesList() {
    this.router.navigate(['eleves'])
  }

  GoToElevesFilter() {
    this.router.navigate(['eleves-filter'])
  }

}
