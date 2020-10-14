import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  constructor(private http: HttpClient) { }
  tokenFromServer: string;
  public signUp(email, password){
    //console.log("Signup Method Came");
    const data = {
     "email": email,
     "password": password
    };
    return this.http.post("https://karthik1998-task-manager-app.herokuapp.com/users", data).pipe(tap(data=>{
      this.tokenFromServer = data['token'];
    }));
  }

  public login(email, password, token):Observable<any>{
      const data = {
        "email": email,
        "password": password
      };
    return this.http.post('https://karthik1998-task-manager-app.herokuapp.com/user/login', data).pipe(tap(data=>{
      //console.log("Data from Tap is: ", data);
      this.tokenFromServer = data['token'];
      //console.log("Token from Tap is: ", this.tokenFromServer);
    }));
  }

  public getToken(){
    return this.tokenFromServer;
  }

  public logout(){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.tokenFromServer}`);
    return this.http.post("https://karthik1998-task-manager-app.herokuapp.com/user/logout",null,{headers: headers});
  }

}
