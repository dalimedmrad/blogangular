import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AppInterceptor implements HttpInterceptor {
    intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    // console.log('intercept');
    const token = localStorage.getItem('token');
    if(token){
        req = req.clone({
            headers: req.headers.set('x-auth-token', token)
        })
    }
     return next.handle(req);
    }
}
 