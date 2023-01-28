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
  newUser: User = {email: "", firstName: "", lastName: "", password: "", phoneNumber: ""};

  constructor(private authService: AuthenticationService,
              private router: Router,) { }

  ngOnInit(): void {
  }

  async register() {
    this.authService.register(this.newUser).subscribe(
      response => {
        let isRegisterSuccess: boolean = (response.status === 200);
        if (isRegisterSuccess) {
          this.router.navigate(["/register/complete"]);
        }
      }
    );
  }
}
