import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import {LoginRequest} from "../../model/loginRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserAuthenticated: boolean = false;
  sessionToken: string = "";
  USER_AUTH_KEY: string = "USER_AUTH_KEY"
  TOKEN_KEY: string = "TOKEN_KEY"
  DEFAULT_USER_EMAIL = "juju@gmail.com"
  DEFAULT_PASSWORD = "sacarina"

  constructor() {
    this.loadUserAuthStatusFromLocalStorage();
  }

  isUserLoggedIn(): boolean {
    this.loadUserAuthStatusFromLocalStorage()
    return this.isUserAuthenticated;
  }

  getUserEmail(): string {
    return this.DEFAULT_USER_EMAIL;
  }

  register(newUser: User){

  }

  login(username: string, password: string){
    //send login request
    if (username == this.DEFAULT_USER_EMAIL && password == this.DEFAULT_PASSWORD){
      this.isUserAuthenticated = true;
      this.sessionToken = "456985uzi";
      this.saveUserAuthStatusInLocalStorage();
      this.saveSessionTokenInLocalStorage();
    }
  }

  logout(){
    //send logout request
    this.isUserAuthenticated = false;
    this.TOKEN_KEY = "";
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

}
