import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input()
  newUser: User = {email: "newuser@gmail.com",
    firstName: "Juju", lastName: "Loulou", password: "sacarina", phoneNumber: 608895423, role:""};

  constructor(private authService: AuthenticationService,
              private router: Router,) { }

  ngOnInit(): void {
  }

  async register(repeatPassword: string) {
    if (repeatPassword != this.newUser.password){
      window.alert("The passwords do not match")
      return;
    }

    if (!this.checkEmailByRegex(this.newUser.email)){
          window.alert("Invalid email")
          return;
    }

    this.authService.logout();
    this.authService.register(this.newUser).subscribe(
      response => {
        if (response.status === 200) {
          this.router.navigate(["/register/complete"]);
        } else {
          window.alert("Error while creating user")
        }
      }
    );
  }

  checkEmailByRegex(email: string): boolean {
    let emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$");
    return emailRegex.test(email);
  }

}
