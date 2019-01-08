import { Component, OnInit } from '@angular/core';
import { BreadcrumbNavService } from 'src/app/services/breadcrumbnav.service';

@Component({
  selector: 'app-ledgerdetail',
  templateUrl: './ledgerdetail.component.html',
  styleUrls: ['./ledgerdetail.component.scss']
})
export class LedgerdetailComponent implements OnInit {

  constructor(private bnService: BreadcrumbNavService) {
    this.bnService.setPrintButton(true);
  }

  async ngOnInit() {
    // this.bnService.setHeader("Standard Vouchers")
    // this.bnService.setNewButton(true);
    // this.bnService.setEditButton(true);
    //this.bnService.setPrintButton(true);
  }


}
