import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared-components/navbar/navbar.component';
import { FooterComponent } from './components/shared-components/footer/footer.component';
import { CarListComponent } from './components/car-components/car-list/car-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CarDetailComponent } from './components/car-components/car-detail/car-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/domain-components/home/home.component';
import { CarListItemComponent } from './components/car-components/car-list-item/car-list-item.component';
import { LoginComponent } from './components/auth-components/login/login.component';
import { RegisterComponent } from './components/auth-components/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import { RentalRequestComponent } from './components/rental-request/rental-request.component';
import { AboutComponent } from './components/domain-components/about/about.component';
import { ServicesComponent } from './components/domain-components/services/services.component';
import { PricingComponent } from './components/domain-components/pricing/pricing.component';
import { BlogComponent } from './components/domain-components/blog/blog.component';
import { ContactComponent } from './components/domain-components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarListComponent,
    SearchBarComponent,
    CarDetailComponent,
    ProfileComponent,
    HistoryComponent,
    HomeComponent,
    CarListItemComponent,
    LoginComponent,
    RegisterComponent,
    RentalRequestComponent,
    AboutComponent,
    ServicesComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
