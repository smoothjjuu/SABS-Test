import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TicketsComponent } from './tickets/tickets.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { dateFormat } from './formats/dateFormat.pipe';
import { timeFormat } from './formats/timeFormat.pipe';
import { BtnScrollComponent } from './components/btn-scroll/btn-scroll.component';
import { totalTimeFormat } from './formats/totalTimeFortmat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    HeaderComponent,
    FooterComponent, 
    dateFormat,
    timeFormat,
    totalTimeFormat,
    BtnScrollComponent
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
