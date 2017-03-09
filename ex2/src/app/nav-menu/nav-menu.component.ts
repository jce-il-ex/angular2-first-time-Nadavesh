import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  myList = [
    {
      id: 'Home'
    },
    {
      id: 'About'
    },
    {
      id: 'News'
    },
    {
      id: 'Contact Us'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
