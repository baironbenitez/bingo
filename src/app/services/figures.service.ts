import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiguresService {
  token=JSON.parse(localStorage.getItem('token'));
  /*headers=new HttpHeaders({'Authorization': `${this.token}`});*/
  urlUser=environment.urlUser;
  urlFigure=environment.urlFigure;
  constructor(private http:HttpClient) {
   }
  getPerfil(token:string):Observable<any>{
    const url=`${this.urlUser}myprofile`;
    const headers=new HttpHeaders({'Authorization': `${token}`});
    return this.http.get(url,{headers}).pipe(map(data=>{
     return data['data'];
    }))
  }
  getFigure(token:string):Observable<any>{
    const url=`${this.urlFigure}figure`;
    const headers=new HttpHeaders({'Authorization': `${token}`});
    return this.http.get(url,{headers}).pipe(map(data=>{
      return data['data']
    }))
  }
  getFigureById(id,token:string):Observable<any>{
    const url=`${this.urlFigure}figure/${id}`;
    const headers=new HttpHeaders({'Authorization': `${token}`});
    return this.http.get(url,{headers}).pipe(map(data=>{
      return data['data']
    }))
  }
  getGroupFigures(token:string){
    const url=`${this.urlFigure}groupfigure`;
    const headers=new HttpHeaders({'Authorization': `${token}`});
    return this.http.get(url,{headers}).pipe(map(data=>{
      return data['data']
    }))
  }
  updateFigure(id,figure,token:string){
    const url=`${this.urlFigure}figure/${id}`;
    const headers=new HttpHeaders({'Authorization': `${token}`});
    return this.http.put(url,figure,{headers});
  }
  createFigure(figure,token:string){
    const url=`${this.urlFigure}figure`;
    const headers=new HttpHeaders({'Authorization': `${token}`});
    return this.http.post(url,figure,{headers});
  }
}
