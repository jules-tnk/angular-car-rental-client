import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {LoginResponse} from "../../../model/api-response/login-response";
import {UserAuthInfo} from "../../../model/userAuthInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailInput: string = "erl@gmail.com";
  passwordInput: string = "sacarina";

  constructor(private authService: AuthenticationService,
              private router: Router,) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.emailInput, this.passwordInput).subscribe(
      response => {
        if (response.status === 200){
          let loginResponse: LoginResponse | null = response.body;
          if (loginResponse){
            let newUserInfo: UserAuthInfo = {
              currentUser: loginResponse.user,
              sessionToken: loginResponse.accessToken,
              isUserAuthenticated: true,
            }
            console.log(JSON.stringify(newUserInfo))
            this.authService.setUserInfo(newUserInfo);
            this.router.navigate(["/profile"]);
          }
        }


      }
    );
  }
}
