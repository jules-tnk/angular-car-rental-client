import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../authentication/authentication.service";
@Injectable({
  providedIn: 'root'
})
export class AuthHttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req);
  }


  addSessionTokenToRequest(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken: string|undefined = this.authService.getSessionToken();

    if (authToken){
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken)
      });
    }

    //// Clone the request and set the new header in one step.
    // const authReq = req.clone({ setHeaders: { Authorization: authToken } });

    // send cloned request with header to the next handler.
    return next.handle(req);
  }

}
