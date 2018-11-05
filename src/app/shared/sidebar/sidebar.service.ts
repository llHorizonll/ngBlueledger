import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { appConfig } from "../../app.config";

@Injectable()
export class SidebarService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  private async resposePromisGet(params: string, url: string) {
    const res = await this.http.get<any>(url, this.httpOptions).toPromise();
    const IsSuccess = new Boolean(res.Response.Result);
    if (!IsSuccess) {
      return [];
    }
    if (!res.Data.length) {
      return [];
    }
    return res.Data;
  }

  getMenuSidebar() {
    const url = `${appConfig.apiUrl}/MENU/Menu.svc/menu/list`;
    return this.resposePromisGet("", url);
  }
}
