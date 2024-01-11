import { Injectable } from '@angular/core';
import { Eleve } from './eleve';
import { ELEVES } from './mock-eleve-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  constructor(private http: HttpClient) {}

  getEleveListMethod() {
    return this.http.get('https://localhost:7207/api/eleve');
  }

  addEleveMethod(newEleve: Eleve): Observable<any> {
    return this.http.post('https://localhost:7207/api/eleve', newEleve);
  }

  deleteEleveMethod(id: number) {
    return this.http.delete('https://localhost:7207/api/eleve/' + id)
  }

  // getEleveById(eleveId : number): Eleve|undefined {
  //   return ELEVES.find(Eleve => Eleve.id == eleveId);
  // }
}
