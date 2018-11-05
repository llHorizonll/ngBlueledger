import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { appConfig } from "../app.config";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  login(value: any) {
    return this.http
      .post<any>(
        `${appConfig.apiUrl}/SYS/Auth.svc/Login`,
        {
          Username: value.Username,
          Password: value.Password
        },
        this.httpOptions
      )
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", user.SessionId);
            localStorage.setItem("user", user.UserName);
          }
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }
}
