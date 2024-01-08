import { Injectable } from '@angular/core';
import { Eleve } from './eleve';
import { ELEVES } from './mock-eleve-list';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  getEleveList() : Eleve[] {
    return ELEVES;
  }

  getEleveById(eleveId : number): Eleve|undefined {
    return ELEVES.find(Eleve => Eleve.id == eleveId);
  }
}
