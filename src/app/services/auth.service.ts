import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders().set("Content-Type", "application/json"),
    withCredentials: true,
  };

  private corshttpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      'X-Requested-With': 'XMLHttpRequest'
    })
  }

  login(value: any) {
    return this.http
      .post<any>(
        `${environment.http_proxy}/SYS/Auth.svc/Login`,
        // `${appConfig.apiUrl}/SYS/Auth.svc/Login`,
        {
          Username: value.Username,
          Password: value.Password
        },
        this.httpOptions
      )
      .pipe(
        map(user => {
          // user = JSON.parse(user);
          // login successful if there's a jwt token in the response
          if (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", user.SessionId);
            localStorage.setItem("user", user.Username);
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
