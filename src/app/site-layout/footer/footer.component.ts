import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  role:any;
  constructor() { }

  ngOnInit(): void {
    const role = JSON.parse(localStorage.getItem('user') || JSON.stringify({user:{role:""}})).user.role;

    this.role = role;
  }

}
