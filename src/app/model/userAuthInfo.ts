import {User} from "./user";

export interface UserAuthInfo {
  currentUser?: User;
  isUserAuthenticated: boolean;
  sessionToken?: string;
}
