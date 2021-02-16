import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  collapse: any;
  constructor() { }

  ngOnInit(): void {
    this.collapse = false;
  }

  cCollapse(change: any) {
    this.collapse = !change;
  }

  navbar = [
    {
      id:1,
      text:"Portifolio",
      
    }
  ]

}
