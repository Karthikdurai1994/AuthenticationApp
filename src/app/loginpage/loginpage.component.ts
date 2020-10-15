import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallsService } from '../apicalls.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private apiServiceObj: ApicallsService, private router: Router) { }
  token:string;
  flag: boolean = false;
  e: string;
  ngOnInit() {
  }

  signUpApi(email, password){
    //console.log(email, password);
    this.apiServiceObj.signUp(email, password).subscribe(data=>{
      //console.log(data);
      this.token = data['token'];
      this.router.navigateByUrl("/firstPage/"+data['user']._id);
    }, error=>{
       this.flag = true;
      console.log("Error is: ",error);
      this.e = error.error.message
    })
  }

  loginApi(email, password){
    this.apiServiceObj.login(email, password, this.token).subscribe(data=>{
      //console.log(data);
      this.token = data['token'];
      this.router.navigateByUrl("/firstPage/"+data['user']._id);
    },(error)=>{
      this.flag = true;
      console.log("Error is: ", error);
      this.e = "Email ID or Passowrd is Incorrect"
    })
  }

}
