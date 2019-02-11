import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }
  getFauzan(){
    return [
      {id:0,hobby:"Gaming", ket : "Setiap hari selalu login dalam game"},
      {id:1,hobby:"Mancing", ket : "Setiap hari selasa selalu memancing"},
      {id:2,hobby:"Jogging", ket : "Jogging membuat badan sehat"}      
    ];
  }
}
