import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { SecondpageComponent } from './Pages/secondpage/secondpage.component';
import { ApicallsService } from './apicalls.service';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SecondpageComponent,
    FirstpageComponent
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
