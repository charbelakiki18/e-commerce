import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor{
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === 401) {

          this.router.navigate(['/signin']);
        } else if (error.status === 403) {


        } else if (error.status === 404) {

          this.router.navigate(['/not-found']);
        } else if (error.status === 500) {
          console.log("email already taken")
        } 
        else {

          console.error('Error occurreds:', error.error.message || error.message);
        }

        return throwError(error);
      })
    );
  }
}
