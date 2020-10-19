import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallsService } from 'src/app/apicalls.service';
import { browserRefresh } from '../../app.component';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit, AfterViewInit  {
  public browserRefresh: boolean;
  constructor(private apicallsServiceObj:ApicallsService, private router: Router) { }

  ngOnInit() {
    this.browserRefresh = browserRefresh;
    console.log('refreshed?:', browserRefresh);
    if(this.browserRefresh){
      this.router.navigateByUrl("");
    }


  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit came");
    this.onLoadChatBot();
  }

  onLoadChatBot(){

    console.log("Came to chatbot function");
    var BotStar=
   {
    appId:"s4f323620-c0ca-4358-9da6-605dbfdcacb5",
    mode:"livechat",
    variables: {
     userTokens: "The Witcher",
    }
  };
  !function(t,a):any{
     console.log("Function 1");

       var e = function(){(e["q"]=e["q"]||[]).push(arguments)};
       e["q"]=e["q"]||[];
       console.log("e is: ", e);
       t["BotStarApi"]=e;
       !function():any{
        //const body = <HTMLDivElement> document.body;
        var t=document.createElement('script');
        t.innerHTML = '';
        t.type="text/javascript",
        t.src="https://widget.botstar.com/static/js/widget.js"
        t.async = false;
        t.defer = true;
        var e=a.getElementsByTagName("script")[0];
        //e.parentNode.insertBefore(t,e)
        console.log("t is: ",t);
        console.log("e is: ", e);
        //body.appendChild(t);
       }();

    }(window,document)

  }


  logout(){
     console.log(this.apicallsServiceObj.getToken());
     this.apicallsServiceObj.logout().subscribe(data=>{
       console.log(data);
       this.router.navigateByUrl("");
     })
  }

}
