import { Component } from '@angular/core';
import { ClassService } from './class.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = "Mohammad Fauzan Arramadhan";
  alamat = "Jl. Kalimosodo 12 no 9";
  hob = "Hobby saya belajar"
  hari = Date.now();

  hobby : any [];

  constructor(private classServe:ClassService){}
  ngOnInit(){
    this.hobby = this.classServe.getFauzan();
  }
}
