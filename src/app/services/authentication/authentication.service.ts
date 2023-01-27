import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import {LoginRequest} from "../../model/api-request/loginRequest";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {LoginResponse} from "../../model/api-response/login-response";
import {API_PARAM} from "../../model/constants";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser?: User;
  isUserAuthenticated: boolean = false;
  sessionToken: string = "";
  USER_AUTH_KEY: string = "USER_AUTH_KEY"
  TOKEN_KEY: string = "TOKEN_KEY"



  constructor(private http: HttpClient) {
    this.loadUserAuthStatusFromLocalStorage();
  }

  isUserLoggedIn(): boolean {
    this.loadUserAuthStatusFromLocalStorage()
    return this.isUserAuthenticated;
  }

  getUserEmail(): string {
    if (this.currentUser){
      return this.currentUser?.email;
    }
    return "";
  }

  register(newUser: User){

  }

  login(email: string, password: string){
    // create login request
    let loginRequest: LoginRequest = {email: email, password: password}

    //send login request
    let loginUrl: string = API_PARAM.BASE_URL+API_PARAM.LOGIN_PATH;
    this.http.post<LoginResponse>(loginUrl, loginRequest).pipe(
      catchError(this.handleError<LoginResponse>("userLogin"))
    ).subscribe(
      loginResponse => {
        this.sessionToken = loginResponse.accessToken;
        this.isUserAuthenticated = true;
      }
    )

    // save received session token
    this.saveSessionTokenInLocalStorage();
  }

  logout(){
    //send logout request
    this.isUserAuthenticated = false;
    this.TOKEN_KEY = "";
    this.currentUser = undefined;
    this.saveUserAuthStatusInLocalStorage();
    this.saveSessionTokenInLocalStorage();
  }

  saveUserAuthStatusInLocalStorage(){
    localStorage.setItem(this.USER_AUTH_KEY, JSON.stringify(this.isUserAuthenticated))
  }

  loadUserAuthStatusFromLocalStorage(){
    let savedUserAuthStatus = localStorage.getItem(this.USER_AUTH_KEY);
    if (savedUserAuthStatus) {
      this.isUserAuthenticated = JSON.parse(savedUserAuthStatus);
    }
  }

  saveSessionTokenInLocalStorage(){
    localStorage.setItem(this.TOKEN_KEY, String(this.sessionToken))
  }

  loadSessionTokenFromLocalStorage(){
    this.sessionToken = String(localStorage.getItem(this.TOKEN_KEY));
  }

  getSessionToken(){
    this.loadSessionTokenFromLocalStorage();
    return this.sessionToken;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
