import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email],),
    password: new FormControl('', Validators.required)

  })

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
  login() {
    console.log(this.form.value);
   
    this.auth.login(this.form.value).subscribe(isLoggedIn =>{
      if( isLoggedIn){
        this.router.navigate(['/']);
      }else{ this.form.setErrors({
        invalidLogin:true
      })
      }
    }, err=>{
      this.form.setErrors({
        invalidLogin:true
      })  
    })
  }

}
