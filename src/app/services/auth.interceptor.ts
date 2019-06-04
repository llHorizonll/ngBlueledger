import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = localStorage.getItem("currentUser");
    //console.log(currentUser)
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          //new service
          //Authorization: `Bearer ${currentUser}`
          "Accept-Token": `${currentUser}`
        }
      });
    }

    return next.handle(request);
  }
}
