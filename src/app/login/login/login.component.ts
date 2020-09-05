import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscripcion:Subscription;
  form:FormGroup;
  user:User;
  img='assets/img/logo.png'
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
  }
  login(){    
    this.user=this.form.value;
    this.authService.login(this.user).subscribe(data=>{
      localStorage.setItem('token',JSON.stringify(data.Authorization));
      this.router.navigateByUrl('dashboard');
      this.form.reset()
    })
  }

}
