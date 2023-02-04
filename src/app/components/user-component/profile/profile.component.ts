import { Component, OnInit } from '@angular/core';
import {UserAuthInfo} from "../../../model/userAuthInfo";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {CarRental} from "../../../model/carRental";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUserInfo?: UserAuthInfo;
  carRentalHistory: CarRental[] = [];
  missionHistory: CarRental[] = [];

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getBasicUserInfo();
    this.getProfileInfo();
  }

  getBasicUserInfo(){
    this.currentUserInfo = this.authService.getUserInfo();
  }

  getProfileInfo(){
    this.authService.getProfileInfo().subscribe(
      profileResponse => {
        this.carRentalHistory = profileResponse.carRentalHistory;
        this.missionHistory = profileResponse.missionHistory;
      }
    )
  }

}
