import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallsService } from 'src/app/apicalls.service';
import { browserRefresh } from '../../app.component';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  public browserRefresh: boolean;
  constructor(private apicallsServiceObj:ApicallsService, private router: Router) { }

  ngOnInit() {
    this.browserRefresh = browserRefresh;
    console.log('refreshed?:', browserRefresh);
    if(this.browserRefresh){
      this.router.navigateByUrl("https://authenicationapp.netlify.app");
    }
  }

  logout(){
     console.log(this.apicallsServiceObj.getToken());
     this.apicallsServiceObj.logout().subscribe(data=>{
       console.log(data);
       this.router.navigateByUrl("");
     })
  }

}
