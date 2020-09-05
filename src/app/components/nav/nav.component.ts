import { Component, OnInit } from '@angular/core';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faBars=faBars;
  constructor(private Router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token');
    this.Router.navigateByUrl('');
  }
  

}
