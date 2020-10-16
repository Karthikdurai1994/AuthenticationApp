import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';

import { SecondpageComponent } from './Pages/secondpage/secondpage.component';


const routes: Routes = [
 {path: '', component: LoginpageComponent},
 {path: 'firstPage/:id', children:[
  {path:'', component: FirstpageComponent},
  {path:'secondPage', component:SecondpageComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
