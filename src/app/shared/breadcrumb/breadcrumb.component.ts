import { Component, OnInit } from '@angular/core';
import { BreadcrumbNavService } from '../../services/breadcrumbnav.service';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  backButton: any;
  newButton: any;
  editButton: any;
  deleteButton: any;
  postButton: any;
  importButton: any;
  voidButton: any;
  copyButton: any;
  printButton: any;

  cancelButton: any;
  saveButton: any;

  headerNavigate: any;
  constructor(
    private bnService: BreadcrumbNavService
  ) {
    this.headerNavigate = this.bnService.breadcrumbHeader;

    this.newButton = this.bnService.showNewButton;
    this.editButton = this.bnService.showEditButton;
    this.deleteButton = this.bnService.showDeleteButton;
    this.postButton = this.bnService.showPostButton;
    this.importButton = this.bnService.showImportButton;
    this.copyButton = this.bnService.showCopyButton;
    this.printButton = this.bnService.showPrintButton;

    this.cancelButton = this.bnService.showCancelButton;
    this.saveButton = this.bnService.showSaveButton;
  }

  ngOnInit() {

  }


  clickEdit() {
    // // set false
    this.bnService.setNewButton(false);
    this.bnService.setEditButton(false);
    this.bnService.setPostButton(false);
    this.bnService.setImportButton(false);
    this.bnService.setCopyButton(false);
    this.bnService.setDeleteButton(false);
    this.bnService.setPrintButton(false);
    // set true
    this.bnService.setSaveButton(true);
    this.bnService.setCancelButton(true);
    // set event click edit
    this.bnService.setOnEdit(true);
  }

  clickCancel() {
    // // set true
    // this.navService.setEditField(true);
    // this.navService.setEditButton(true);
    // this.navService.setPrintButton(true);
    // this.navService.setDeleteButton(true);
    // // set false
    // this.navService.setSaveButton(false);
    // this.navService.setCancelButton(false);
    // set event click cancel
    this.bnService.setOnCancel(true);
  }

}
