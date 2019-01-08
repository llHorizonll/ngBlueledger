import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams, HttpRequest, HttpResponse, HttpEvent, HttpEventType } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UploadXHRArgs } from "ng-zorro-antd";

@Injectable()
export class VoucherEntryService {
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

  getList(voucherType: string = '1', pageIndex: number = 1, pageSize: number = 10, sortField: string = 'id', sortOrder: string = 'asc', keyWord: string = '') {
    const url = `${environment.http_proxy}/LEDGER/Ledger.svc/voucherlist/byvouchertype`;
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

  getDetail(id: number) {
    const url = `${environment.http_proxy}/LEDGER/Ledger.svc/voucher/item?`;
    let params = this.httpOptions.params
      .append('Id', `${id}`);
    return this.http.get(url, {
      params: params,
      headers: this.httpOptions.headers
    })
  }

  getComment(headerId: number) {
    const url = `${environment.http_proxy}/ATTACH/Attach.svc/comment/list?`;
    let params = this.httpOptions.params
      .append('Id', `${headerId}`)
      .append('type', "voucher");
    return this.http.get(url, {
      params: params,
      headers: this.httpOptions.headers
    })
  }

  getAttachFile(headerId: number) {
    const url = `${environment.http_proxy}/ATTACH/Attach.svc/attach/list?`;
    let params = this.httpOptions.params
      .append('Id', `${headerId}`)
      .append('type', "voucher");
    return this.http.get(url, {
      params: params,
      headers: this.httpOptions.headers
    })
  }

  postAttachFile(item: UploadXHRArgs) {
    console.log(item);
    const url = `${environment.http_proxy}/ATTACH/Attach.svc/attach?type=voucher`;
    const formData = new FormData();
    formData.append('HeaderId', '3');
    formData.append('file', item.file as any);
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      withCredentials: true
    });
    console.log(req)
    return this.http.request(req).subscribe((event: HttpEvent<{}>) => {
      console.log(event);
      if (event.type === HttpEventType.UploadProgress) {
        if (event.total > 0) {
          // tslint:disable-next-line:no-any
          (event as any).percent = event.loaded / event.total * 100;
        }
        item.onProgress(event, item.file);
      } else if (event instanceof HttpResponse) {

        item.onSuccess(event.body, item.file, event);
      }
    }, (err) => {
      item.onError(err, item.file);
    });
  }

  getActivity(headerId: number) {
    const url = `${environment.http_proxy}/ATTACH/Attach.svc/activitylog/list?`;
    let params = this.httpOptions.params
      .append('Id', `${headerId}`)
      .append('type', "voucher");
    return this.http.get(url, {
      params: params,
      headers: this.httpOptions.headers
    })
  }

  removeAttachFile(item) {
    console.log(item)
  }
}
