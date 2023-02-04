import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {AuthenticationService} from "../../authentication/authentication.service";

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            // if(event.status == 401) {
            //   alert('You need to be logged in')
            // }
          }
          return event;
        },
        error: (error) => {
          if(error.status === 401) {
            if (this.authService.isUserLoggedIn()){
              alert('Your session has expired.')
            }
            this.authService.logout();
          }
          else if(error.status === 404) {
            alert('Page Not Found!')
          }
        }
      })
    );
  }
}
