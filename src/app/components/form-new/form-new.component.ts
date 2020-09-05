import { Component, OnInit } from '@angular/core';
import { FiguresService } from '../../services/figures.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-form-new',
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.css']
})
export class FormNewComponent implements OnInit {
  constructor(private figuresService:FiguresService,private router:Router,private modal:NgbModal) {}

  figure={
    figureName:'',
    idFigureGroup:0,
    positions:Array<boolean>()
  }
 
  positions:boolean[]=[]
  token=JSON.parse(localStorage.getItem('token'));
  filistgtoupgure:any
  formNew:FormGroup;
  
  openmodal(modal){
    this.modal.open(modal)
  }
  cambio(i){
    this.positions[i]=!this.positions[i]
  }
  create(){
    this.figure={
      figureName:this.formNew.get('figureName').value,
      positions:this.positions,
      idFigureGroup:this.formNew.get('idFigureGroup').value
    }    
    this.figuresService.createFigure(this.figure,this.token).subscribe(data=>{
    },()=>{
        localStorage.removeItem('token');
        this.router.navigateByUrl('')
    })
  }

  ngOnInit(): void {
    this.formNew=new FormGroup({
      idFigureGroup:new FormControl('',Validators.required),
      figureName:new FormControl('',Validators.required)
    })
    for (let index = 0; index < 25; index++) {
      this.positions.push(false);
    }
    this.figuresService.getGroupFigures(this.token).subscribe(data=>{
      this.filistgtoupgure=data;
    },()=>{
      localStorage.removeItem('token');
      this.router.navigateByUrl('')
    })
  }

}
