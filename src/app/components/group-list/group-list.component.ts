import { Component, OnInit } from '@angular/core';
import { FiguresService } from '../../services/figures.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  listGroupFigure:any[]=[];
  faSpinner=faSpinner;
  loading=false;
  token=JSON.parse(localStorage.getItem('token'));
  constructor(private figuresService:FiguresService,private router:Router) { }

  ngOnInit(): void {
    this.figuresService.getGroupFigures(this.token).subscribe(data=>{
      console.log(data);
      this.listGroupFigure=data
      setTimeout(() => {
        this.loading=true;
      }, 300);
    },err=>{
      localStorage.removeItem('token');
      
      this.router.navigateByUrl('')
    })
  }

}
