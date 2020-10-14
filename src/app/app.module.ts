import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FirstpageComponent } from './Pages/firstpage/firstpage.component';
import { SecondpageComponent } from './Pages/secondpage/secondpage.component';
import { ApicallsService } from './apicalls.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    LoginpageComponent,
    SecondpageComponent
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
