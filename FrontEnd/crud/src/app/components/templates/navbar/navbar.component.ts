import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'curso-crud-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NavbarService]
})
export class NavbarComponent implements OnInit {
  navBar : NavbarService;

  constructor(public nav: NavbarService) { this.navBar = nav}

  ngOnInit(): void {
 
  }
  getNavValue(){
    return this.navBar.visible;
  } 
}
