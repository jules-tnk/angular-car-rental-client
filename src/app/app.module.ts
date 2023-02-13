import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared-components/navbar/navbar.component';
import { FooterComponent } from './components/shared-components/footer/footer.component';
import { CarListComponent } from './components/car-components/car-list/car-list.component';
import { CarDetailComponent } from './components/car-components/car-detail/car-detail.component';
import { ProfileComponent } from './components/user-component/profile/profile.component';
import { HistoryComponent } from './components/user-component/history/history.component';
import { HomeComponent } from './components/domain-components/home/home.component';
import { CarListItemComponent } from './components/car-components/car-list-item/car-list-item.component';
import { LoginComponent } from './components/auth-components/login/login.component';
import { RegisterComponent } from './components/auth-components/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RentalRequestComponent } from './components/user-component/rental-request/rental-request.component';
import { AboutComponent } from './components/domain-components/about/about.component';
import { ServicesComponent } from './components/domain-components/services/services.component';
import { PricingComponent } from './components/domain-components/pricing/pricing.component';
import { BlogComponent } from './components/domain-components/blog/blog.component';
import { ContactComponent } from './components/domain-components/contact/contact.component';
import {AuthenticationService} from "./services/authentication/authentication.service";
import {AuthHttpInterceptorService} from "./services/http-interceptor/auth-interceptor/auth-http-interceptor.service";
import {CatalogService} from "./services/catalog/catalog.service";
import {TransactionService} from "./services/transaction/transaction.service";
import { LogoutComponent } from './components/auth-components/logout/logout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterCompletedComponent } from './components/auth-components/register-completed/register-completed.component';
import {
  HttpResponseInterceptor
} from "./services/http-interceptor/response-interceptor/http-response-interceptor.service";
import { CarRentalDetailComponent } from './components/user-component/car-rental-detail/car-rental-detail.component';
import { MissionDetailComponent } from './components/user-component/mission-detail/mission-detail.component';
import { CarRentalManageListComponent } from './components/user-component/car-rental-manage-list/car-rental-manage-list.component';
import { CarRentalManageDetailComponent } from './components/user-component/car-rental-manage-detail/car-rental-manage-detail.component';
import { AddPaymentComponent } from './components/user-component/add-payment/add-payment.component';
import { AddPaymentTenantComponent } from './components/user-component/add-payment-tenant/add-payment-tenant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarListComponent,
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
    ContactComponent,
    LogoutComponent,
    RegisterCompletedComponent,
    CarRentalDetailComponent,
    MissionDetailComponent,
    CarRentalManageListComponent,
    CarRentalManageDetailComponent,
    AddPaymentComponent,
    AddPaymentTenantComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [AuthenticationService,
    CatalogService,
    TransactionService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
