import { Component, OnInit } from '@angular/core';
import { FiguresService } from '../../services/figures.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheckCircle,faSpinner } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  id=this.active.snapshot.paramMap.get('id');
  figure:any={};
  token=JSON.parse(localStorage.getItem('token'));
  edita=true;
  faCheckCircle=faCheckCircle;
  loading=false;
  faSpinner=faSpinner

  constructor(private figuresService:FiguresService,private active:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    this.figuresService.getFigureById(this.id,this.token).subscribe(data=>{
        this.figure=data;
        setTimeout(() => {
          this.loading=true
        }, 300);
    },err=>{
      localStorage.removeItem('token');
      this.router.navigateByUrl('')
    })
  }
  edit(){
    const figure={
      figureName:this.figure.name,
      idFigureGroup:this.figure.groupFigureId.id,
      positions:this.figure.positionsWinner
    }  
    console.log(figure);
    
    this.figuresService.updateFigure(this.id,figure,this.token).subscribe(data=>{
      this.edita=false
      setTimeout(() => {
        this.router.navigateByUrl('/dashboard/figure');
      }, 300);
      
    })
  }
  cambio(i){
    this.figure.positionsWinner[i]=!this.figure.positionsWinner[i];
  }
}
