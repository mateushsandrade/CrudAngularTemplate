import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'curso-crud-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NavbarComponent, NavbarService]
})
export class HeaderComponent implements OnInit {
  navBar : NavbarService;
  constructor(nav:NavbarService) {
    this.navBar = nav
   }
  ngOnInit(): void {
    this.navBar.show();
   }
  callEvent(){
    this.navBar.toggle();
  }

}
