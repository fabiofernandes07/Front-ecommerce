import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() { }

  ngOnInit() {
    console.log(this.isLoged());
    console.log('teste')
   }

  isLoged() {
    return localStorage.getItem('token') !== null;
  }

}
