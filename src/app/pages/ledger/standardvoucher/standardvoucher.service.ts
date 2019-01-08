import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class StandardVoucherService {
  constructor(private http: HttpClient) { }

  private httpOptions = {
    params: new HttpParams(),
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  getPrefixList(pageIndex: number = 1, pageSize: number = 10) {
    const url = `${environment.http_proxy}/LEDGER/Ledger.svc/vouchertype/list`;
    let params = this.httpOptions.params
      .append('p', `${pageIndex}`)
      .append('s', `${pageSize}`);
    return this.http.get(url, {
      params: params,
      headers: this.httpOptions.headers
    });
  }

  getList(voucherType: number = 1, pageIndex: number = 1, pageSize: number = 10, sortField: string = 'id', sortOrder: string = 'asc', keyWord: string = '') {
    const url = `${environment.http_proxy}/LEDGER/Ledger.svc/standardvoucherlist/byvouchertype`;
    let params = this.httpOptions.params
      .append('Id', `${voucherType}`)
      .append('p', `${pageIndex}`)
      .append('s', `${pageSize}`)
      .append('c', sortField)
      .append('o', sortOrder)
      .append('k', keyWord);
    return this.http.get(url, {
      params: params,
      headers: this.httpOptions.headers
    });
  }

  getDetail(id: string) {
    const url = `${environment.http_proxy}/LEDGER/Ledger.svc/voucher/item?`;
    let params = this.httpOptions.params
      .append('Id', `${id}`)
    return this.http.get(url, {
      params: params,
      headers: this.httpOptions.headers
    });
  }
}
