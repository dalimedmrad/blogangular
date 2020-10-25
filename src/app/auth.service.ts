import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './models/user.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiPath= "https://nodejsaycourse.herokuapp.com/api";
  public connectedUser$ : BehaviorSubject<User> = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private router:Router) { }

  login(credentials){
    return this.http.post<any>(this.apiPath + "/users/login", credentials).pipe(map(data=>{
      if( data && data.token){
        localStorage.setItem('token',data.token);
        this.authenticate();
        return true;
      }
      return false;
    }))
  }
  signup(user){
    return this.http.post(this.apiPath + "/users", user);
  }
  logout(){
    localStorage.removeItem('token');
    this.connectedUser$.next(null);
    this.router.navigate(['login']);
  }
  isLoggedIn(){
    let token =  localStorage.getItem('token');
    if(token) return true;
    return false;
  }
  authenticate(){
    //let headers = new HttpHeaders().set('x-auth-token',localStorage.getItem('token'));

    return this.http.get<User>(this.apiPath + "/users/me").pipe(map(res=>{
      this.connectedUser$.next(res);
    })).toPromise();
  }
}
