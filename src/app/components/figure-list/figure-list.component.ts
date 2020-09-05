import { Component, OnInit } from '@angular/core';
import { FiguresService } from '../../services/figures.service';
import { faEdit,faSpinner,faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-figure-list',
  templateUrl: './figure-list.component.html',
  styleUrls: ['./figure-list.component.css']
})
export class FigureListComponent implements OnInit {
  faPlusCircle=faPlusCircle;
  figuras:any[];
  faEdit=faEdit;
  faSpinner=faSpinner;
  loading=false;
  token=JSON.parse(localStorage.getItem('token'));
  constructor(private figuresService:FiguresService,private router:Router) {
  }
  ngOnInit(): void {
      this.figuresService.getFigure(this.token).subscribe(data=>{
        this.figuras=data;
        setTimeout(() => {
          this.loading=true;
        }, 300);
      },err=>{
        localStorage.removeItem('token');
        this.router.navigateByUrl('')
      });
  }
}
