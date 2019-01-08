import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbNavService } from 'src/app/services/breadcrumbnav.service';
import { VoucherEntryService } from '../voucherentry.service';
import { PreloaderService } from 'src/app/shared/preloader/preloader.service';

@Component({
  selector: 'app-prefixlist',
  templateUrl: './prefixlist.component.html',
  styleUrls: ['./prefixlist.component.scss']
})
export class PrefixlistComponent implements OnInit {
  prefixlist: [];
  constructor(
    private bnService: BreadcrumbNavService,
    private preLoaderService: PreloaderService,
    private voucherEntryService: VoucherEntryService,
    private router: Router) { }

  async ngOnInit() {
    this.preLoaderService.setShowPreloader(true);
    this.bnService.setHeader("Voucher Entry")
    this.bnService.setNewButton(false);
    this.bnService.setEditButton(false);
    this.bnService.setDeleteButton(false);
    this.bnService.setPrintButton(false);

    await this.voucherEntryService.getPrefixList().subscribe((item: any) => {
      this.prefixlist = item.Data;
      this.preLoaderService.setShowPreloader(false);
    });
  }

  addParamstoLocalstorage(id: string) {
    localStorage.setItem("prefixId", id);
  }

}
