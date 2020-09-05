import { Component, OnInit } from '@angular/core';
import { FiguresService } from '../../services/figures.service';
import { faUser,faSpinner,faUserFriends,faCalendarAlt,faAngleLeft,faAngleRight,faToolbox } from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil:any={};
  loading=false;
  faUserFriends=faUserFriends;
  faCalendarAlt=faCalendarAlt;
  faSpinner=faSpinner;
  faUser=faUser;
  faAngleRight=faAngleRight;
  faAngleLeft=faAngleLeft;
  faToolbox=faToolbox;
  img='assets/img/logo-perfil.png';
  token=JSON.parse(localStorage.getItem('token'));
  constructor(private figureService:FiguresService,private router:Router) {
  }
  ngOnInit(): void { 
    this.figureService.getPerfil(this.token).subscribe(data=>{
      console.log(data);
      this.perfil=data;  
      setTimeout(() => {
        this.loading=true;
      }, 300);        
    },()=>{
        localStorage.removeItem('token')
        this.router.navigateByUrl('')
    })
  }

}
