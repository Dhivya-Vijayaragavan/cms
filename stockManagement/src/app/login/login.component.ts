import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router : Router, private route : ActivatedRoute) { }
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  noUser :Boolean = false;
  wrongPassword :Boolean = false;
  submitted :Boolean = false;
  adminData : any = {
    userName : 'admin',
    password : 'admin'
  }
  ngOnInit(): void {
    if(localStorage.getItem('UID')!= null) {
      this.router.navigate(['/home'],{})
    }
  }
  onSubmit() {
    this.submitted = true;
    if(this.submitted && this.loginForm.valid) {
      if(this.loginForm.controls['username'].value ==  this.adminData.userName) {
        this.noUser = false;
        if(this.loginForm.controls['password'].value == this.adminData.password) {
          localStorage.setItem('UID','LIN');
          this.wrongPassword=false;
          this.router.navigate(['/home'],{})
        } else {
          this.wrongPassword = true;
        }
      } else {
        this.noUser = true;
      }
    }
   
  }
}
