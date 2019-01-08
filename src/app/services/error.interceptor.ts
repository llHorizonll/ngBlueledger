import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthService } from "./auth.service";
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private message: NzMessageService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        console.log(err);
        if (err.status === 401 || err.status === 400) {
          // auto logout if 401 response returned from api
          this.authService.logout();
          //location.reload(true);
        }
        const error = err.error.Message || err.error.message || err.statusText;
        this.message.create('error', `${error}`);
        return throwError(error);
      })
    );
  }
}
