import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeCartComponent } from './bike-cart/bike-cart.component';

import { FormsModule } from '@angular/forms';
import { BikeAboutComponent } from './bike-about/bike-about.component';
import { BikeHomeComponent } from './bike-home/bike-home.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BikeListComponent,
    BikeCartComponent,
    BikeAboutComponent,
    BikeHomeComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
