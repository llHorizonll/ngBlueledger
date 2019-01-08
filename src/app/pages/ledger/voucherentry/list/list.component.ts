import { Component, OnInit } from '@angular/core';
import { BreadcrumbNavService } from 'src/app/services/breadcrumbnav.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VoucherEntryService } from '../voucherentry.service';
import * as moment from 'moment';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  prefixId: string;
  prefix: string;
  data: [];
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  sortKey = 'id';
  sortValue = 'asc';
  keyWord = '';
  constructor(
    private bnService: BreadcrumbNavService,
    private voucherEntryService: VoucherEntryService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  async ngOnInit() {
    await this.active_route();
    this.bnService.setNewButton(true);
    this.bnService.setEditButton(false);
    this.bnService.setDeleteButton(false);
    this.bnService.setPostButton(false);
    this.bnService.setCopyButton(false);
    this.bnService.setImportButton(false);
    this.bnService.setPrintButton(true);
    await this.searchData();
  }

  async active_route() {

    await this.activeRoute.params.subscribe(p => {
      this.prefix = p['prefix'];
      this.prefixId = localStorage.getItem("prefixId");
    })
    // await this.activeRoute.queryParams.subscribe(p => {
    //   this.prefixId = p['prefixId'];
    //   console.log(p);
    // })
    await this.bnService.setHeader(this.prefix);
  }

  async sort(sort: { key: string, value: string }) {
    this.sortKey = sort.key;
    this.sortValue = sort.value.slice(0, 3);
    this.searchData();
  }

  async searchData(reset: boolean = false) {
    if (reset) {
      this.pageIndex = 1;
    }
    this.voucherEntryService.getList(this.prefixId, this.pageIndex, this.pageSize, this.sortKey, this.sortValue, this.keyWord).subscribe((item: any) => {
      this.total = item.Header.RecordCount;
      this.data = item.Data.filter(item => item['EntryDate'] = moment(item['EntryDate']).format(item['DateFormat']))
      console.log(this.data)
    });
  }
}
