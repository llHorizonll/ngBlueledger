import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
@Injectable()
export class SidebarService {
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  private async resposePromisGet(params: string, url: string) {
    var res = await this.http.get<any>(url, this.httpOptions).toPromise();
    //res = JSON.parse(res)
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
    const url = `${environment.http_proxy}/MENU/Menu.svc/menu/list`;
    //const url = `${environment.http_proxy}/MENU/Menu.svc/Json/G/MENULIST`;
    return this.resposePromisGet("", url);
  }
}
