import { AfterViewInit } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApicallsService } from "src/app/apicalls.service";
import { AppComponent, browserRefresh } from "../../app.component";
import "../../../assets/script.js";
import { LoginpageComponent } from 'src/app/loginpage/loginpage.component';
// declare function BotStarApi(arg1, arg2): any;
declare var hello: any;
declare global {
  interface Window {
    BotStarApi: any;
  }
}
@Component({
  selector: "app-firstpage",
  templateUrl: "./firstpage.component.html",
  styleUrls: ["./firstpage.component.css"],
})
export class FirstpageComponent implements OnInit, AfterViewInit {
  public browserRefresh: boolean;
  public flag:boolean = false;
  constructor(
    private apicallsServiceObj: ApicallsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.browserRefresh = browserRefresh;
    console.log("refreshed?:", browserRefresh);
    if (this.browserRefresh) {
      this.router.navigateByUrl("");
    }

    //new hello();
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit came");
    this.onLoadChatBot();
  }

  onLoadChatBot() {
    console.log("Came to chatbot function");
    var BotStar = {
      appId: "s4f323620-c0ca-4358-9da6-605dbfdcacb5",
      mode: "livechat",
      block: "s34042ad8-a3b5-461a-bb4d-d8045a9f9796"
    };
    window.BotStarApi("boot", BotStar);
    // !function(t,a):any{
    //    console.log("Function 1");

    //      var e = function(){(e["q"]=e["q"]||[]).push(arguments)};
    //      e["q"]=e["q"]||[];
    //      console.log("e is: ", e);
    //      t["BotStarApi"]=e;
    //      !function():any{
    //       const body = <HTMLDivElement> a.body;
    //       var t=a.createElement('script');
    //       t.innerHTML = '';
    //       t.type="text/javascript",
    //       t.src="https://widget.botstar.com/static/js/widget.js"
    //       t.async = false;
    //       t.defer = true;
    //       //var e=a.getElementsByTagName("script")[0];
    //       body.appendChild(t);
    //     //  t.parentNode.insertBefore(e, t.nextSibling);
    //       //e.parentNode.insertBefore(t,e)
    //      // e.parentNode.insertBefore(t,e)

    //       console.log("t is: ",t);
    //       console.log("e is: ", e);
    //       //body.appendChild(t);
    //      }();

    //   }(window,document)
  }

  logout() {

    console.log(this.apicallsServiceObj.getToken());
    this.apicallsServiceObj.logout().subscribe((data) => {
      console.log(data);
      //this.router.navigateByUrl("");
      this.router.navigateByUrl("", { skipLocationChange: true }).then(() => {
        this.router.navigate([LoginpageComponent]);
    });

    });
  }
}
