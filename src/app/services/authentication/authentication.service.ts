import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import {LoginRequest} from "../../model/api-request/loginRequest";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {LoginResponse} from "../../model/api-response/login-response";
import {API_PARAM, LOCAL_STORAGE_KEY} from "../../model/constants";
import {UserAuthInfo} from "../../model/userAuthInfo";
import {ProfileResponse} from "../../model/api-response/profileResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userInfo: UserAuthInfo = {
    currentUser: undefined,
    isUserAuthenticated: false,
    sessionToken: undefined,
  }

  constructor(private http: HttpClient) {
    this.loadUserInfoFromLocalStorage()
  }

  register(newUser: User): Observable<HttpResponse<any>> {
    let registerUrl = API_PARAM.BASE_URL + API_PARAM.REGISTER_PATH;
    return this.http.post<any>(registerUrl, newUser, {observe: "response"})
  }

  login(email: string, password: string): Observable<HttpResponse<any>> {
    // create login request
    let loginRequest: LoginRequest = {email: email, password: password}

    //send login request
    let loginUrl: string = API_PARAM.BASE_URL+API_PARAM.LOGIN_PATH;
    return this.http.post<LoginResponse>(loginUrl, loginRequest, {observe: "response"}).pipe(
      catchError(this.handleLoginError<HttpResponse<any>>("login"))
    )
  }

  logout(){
    //send logout request

    //update local user information
    this.userInfo.isUserAuthenticated = false;
    this.userInfo.currentUser = undefined;
    this.userInfo.sessionToken = undefined;
    this.saveUserInfoInLocalStorage();
  }

  isUserLoggedIn(): boolean {
    this.loadUserInfoFromLocalStorage()
    return this.userInfo.isUserAuthenticated;
  }

  getUserEmail(): string {
    this.loadUserInfoFromLocalStorage()
    if (this.userInfo.currentUser?.email){
      return this.userInfo.currentUser?.email;
    }
    return "";
  }

  setUserInfo(newUserInfo: UserAuthInfo) {
    this.userInfo = newUserInfo;
    this.saveUserInfoInLocalStorage();
  }

  getUserInfo(): UserAuthInfo {
    this.loadUserInfoFromLocalStorage()
    return this.userInfo;
  }

  saveUserInfoInLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_KEY.USER_INFO, JSON.stringify(this.userInfo))
  }

  loadUserInfoFromLocalStorage(){
    let userInfo = localStorage.getItem(LOCAL_STORAGE_KEY.USER_INFO);
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
    }
  }

  getSessionToken(){
    if (this.isUserLoggedIn()){
      this.loadUserInfoFromLocalStorage();
      return this.userInfo.sessionToken;
    }
    return;
  }

  getProfileInfo(): Observable<ProfileResponse>{
    let profileUrl: string = API_PARAM.BASE_URL + API_PARAM.PROFILE_PATH;
    return this.http.get<ProfileResponse>(profileUrl).pipe(
      catchError(this.handleProfileError<ProfileResponse>("getProfile"))
    )
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
      window.alert(
        JSON.stringify(error.error.exception)+"\n"+
        JSON.stringify(error.error.message)+"\n"+
        JSON.stringify(error.message)
      )
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private handleLoginError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      alert("Incorrect credentials")
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private handleProfileError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      alert("Error getting the profile")
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
