import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarListComponent } from './car-list/car-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { CarListItemComponent } from './car-list-item/car-list-item.component';

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
    CarListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
