import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarDetailComponent} from "./car-detail/car-detail.component";
import {HomeComponent} from "./home/home.component";
import {CarListComponent} from "./car-list/car-list.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: 'detail/:id', component: CarDetailComponent},
  {path: "catalog", component: CarListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
