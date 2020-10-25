import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../validators/username.validators';
import { EmailValidators } from '../validators/email.validators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form= new FormGroup({
    name: new FormControl('', Validators.required),
   // username: new FormControl('', [Validators.required,UsernameValidators.cannotContainSpace]),
    email: new FormControl('', [Validators.required,Validators.email], [EmailValidators.shoudBeUnique]),
    password: new FormControl('', Validators.required)


  })

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }
  get name(){
    return this.form.get('name');
  }
  get username(){
    return this.form.get('username');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
  signup(){
  this.auth.signup(this.form.value).subscribe(data=>{
   this.router.navigate(['/login']);
  }, err=>{
    this.form.setErrors({
      invalidUser:true
    })
  })
  }

}
