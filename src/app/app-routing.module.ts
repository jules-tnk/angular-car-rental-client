import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarDetailComponent} from "./components/car-components/car-detail/car-detail.component";
import {HomeComponent} from "./components/domain-components/home/home.component";
import {CarListComponent} from "./components/car-components/car-list/car-list.component";
import {RentalRequestComponent} from "./components/user-component/rental-request/rental-request.component";
import {AboutComponent} from "./components/domain-components/about/about.component";
import {ServicesComponent} from "./components/domain-components/services/services.component";
import {PricingComponent} from "./components/domain-components/pricing/pricing.component";
import {BlogComponent} from "./components/domain-components/blog/blog.component";
import {ContactComponent} from "./components/domain-components/contact/contact.component";
import {LoginComponent} from "./components/auth-components/login/login.component";
import {LogoutComponent} from "./components/auth-components/logout/logout.component";
import {RegisterComponent} from "./components/auth-components/register/register.component";
import {RegisterCompletedComponent} from "./components/auth-components/register-completed/register-completed.component";
import {ProfileComponent} from "./components/user-component/profile/profile.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'services', component: ServicesComponent},
  {path:'pricing', component: PricingComponent},
  {path:'blog', component: BlogComponent},
  {path:'contact', component: ContactComponent},
  {path: "rent/:id", component: RentalRequestComponent},
  {path: 'detail/:id', component: CarDetailComponent},
  {path: "catalog", component: CarListComponent},
  {path: "register", component: RegisterComponent},
  {path: "register/complete", component: RegisterCompletedComponent},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent},
  {path: "profile", component: ProfileComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
