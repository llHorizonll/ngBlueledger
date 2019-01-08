import { Component, OnInit } from '@angular/core';
import { BreadcrumbNavService } from 'src/app/services/breadcrumbnav.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VoucherEntryService } from '../voucherentry.service';
import { PreloaderService } from 'src/app/shared/preloader/preloader.service';
import { FormGroup, FormBuilder, FormArray, FormControl, ValidationErrors, Validators } from '@angular/forms';
import * as fromModels from '../models/voucher.model';
import { Observable, Observer } from 'rxjs';
import * as moment from 'moment';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { environment } from "src/environments/environment";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  prefixId: string;
  prefix: string;
  id: number;
  data: [];
  commentData: [];
  attachFileList: [];
  activityData: [];
  detailFG: FormGroup;

  get voucherDetail(): FormArray {
    return this.detailFG.get('voucherDetail') as FormArray;
  }
  get ViewVoucherTransaction(): FormArray {
    return this.detailFG.get('ViewVoucherTransaction') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private bnService: BreadcrumbNavService,
    private voucherEntryService: VoucherEntryService,
    private preLoaderService: PreloaderService,
    private activeRoute: ActivatedRoute,
    private msg: NzMessageService,
    private router: Router) { }

  async ngOnInit() {
    this.preLoaderService.setShowPreloader(true);

    this.active_route();

    this.bnService.setNewButton(true);
    this.bnService.setEditButton(true);
    this.bnService.setDeleteButton(true);
    this.bnService.setPostButton(true);
    this.bnService.setCopyButton(true);
    this.bnService.setImportButton(true);
    this.bnService.setPrintButton(true);

    this.createForm();

    await this.voucherEntryService.getDetail(this.id).subscribe(async (item: fromModels.voucherDetail) => {
      let data = item['Data'];
      await this.patchTransaction(data['ViewVoucherTransaction']);
      this.detailFG.patchValue(data);
      await this.voucherEntryService.getComment(data['Id']).subscribe(item => {
        this.commentData = item['Data'];
      })
      await this.voucherEntryService.getAttachFile(data['Id']).subscribe(item => {
        //this.attachFileList = item['Data'];
        this.attachFileList = item['Data'].map(item => {
          return {
            imageId: item['ImageId'],
            uid: item['HeaderId'],
            name: item['Name'],
            status: 'done',
            url: `${environment.http_proxy}${item['DataUrl']}`,
          }
        })
      })
      await this.voucherEntryService.getActivity(data['Id']).subscribe(item => {
        this.activityData = item['Data'];
      })
      this.preLoaderService.setShowPreloader(false);
    });
  }

  async active_route() {
    await this.activeRoute.params.subscribe(p => {
      this.prefix = p['prefix'];
      this.id = p['id'];
      this.prefixId = localStorage.getItem("prefixId");

    })
    await this.bnService.setHeader(this.prefix);
  }

  async patchTransaction(transaction: fromModels.ViewVoucherTransaction[]) {
    this.setItemFormArray(transaction, 'ViewVoucherTransaction');
  }

  setItemFormArray(array: any[], formControl: string) {
    if (array !== undefined && array.length) {
      const itemFGs = array.map(item => this.fb.group(item));
      const itemFormArray = this.fb.array(itemFGs);
      this.detailFG.setControl(formControl, itemFormArray);
      console.log(this.detailFG)
    }
  }

  private createForm() {
    this.detailFG = this.fb.group({
      Id: [''],
      Prefix: ['', [Validators.required]],
      Description: [''],
      DocumentStatusId: [''],
      DocumentStatus: [''],
      PostReference: [''],
      DateFormat: [''],
      EntryDate: [''],
      VoucherNo: [''],
      VoucherTypeId: [''],
      TotalAmount: [''],
      Active: [''],
      ReconciliationStatus: [''],
      ViewVoucherTransaction: this.fb.array([])
    })
  }

  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.detailFG.controls) {
      this.detailFG.controls[key].markAsDirty();
      this.detailFG.controls[key].updateValueAndValidity();
    }
    console.log(value);
  };

  postAttachFile = this.voucherEntryService.postAttachFile;

  removeAttachFile = this.voucherEntryService.removeAttachFile;

}
