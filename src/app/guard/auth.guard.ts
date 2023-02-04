import {inject} from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../services/authentication/authentication.service";

export const authGuard = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.isUserLoggedIn()) {
    return true;
  }

  // Redirect to the login page
  window.alert("You need to be connected");
  return router.parseUrl('/login');
};
