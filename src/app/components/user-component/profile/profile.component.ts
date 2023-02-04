import { Component, OnInit } from '@angular/core';
import {UserAuthInfo} from "../../../model/userAuthInfo";
import {AuthenticationService} from "../../../services/authentication/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUserInfo?: UserAuthInfo;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getBasicUserInfo();
  }

  getBasicUserInfo(){
    this.currentUserInfo = this.authService.getUserInfo();
  }

}
