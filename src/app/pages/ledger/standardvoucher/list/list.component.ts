import { Component, OnInit } from '@angular/core';
import { BreadcrumbNavService } from 'src/app/services/breadcrumbnav.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { StandardVoucherService } from '../standardvoucher.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  prefixId = 1;
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
    private standardVoucherService: StandardVoucherService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  async ngOnInit() {
    await this.active_route();
    this.bnService.setNewButton(false);
    this.bnService.setEditButton(false);
    this.bnService.setDeleteButton(false);
    this.bnService.setPrintButton(false);
    await this.searchData();
  }

  async active_route() {
    await this.activeRoute.params.subscribe(p => {
      this.prefix = p['prefix'];
    })
    await this.activeRoute.queryParams.subscribe(p => {
      this.prefixId = p['prefixId'];
    })
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
    this.standardVoucherService.getList(this.prefixId, this.pageIndex, this.pageSize, this.sortKey, this.sortValue, this.keyWord).subscribe((item: any) => {
      this.total = item.Header.RecordCount;
      this.data = item.Data.filter(item => item['EntryDate'] = moment(item['EntryDate']).format(item['DateFormat']))
      console.log(this.data)
    });
  }
}
