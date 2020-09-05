import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url=environment.urlUser
  constructor(private http:HttpClient) { }
  login(user:User):Observable<any>{
    const url=`${this.url}auth`
    return this.http.post(url,user);
  }
}
