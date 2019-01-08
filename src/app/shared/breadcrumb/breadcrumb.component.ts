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

  }

  async ngOnInit() {
    this.newButton = this.bnService.showNewButton;
    this.editButton = this.bnService.showEditButton;
    this.deleteButton = this.bnService.showDeleteButton;
    this.postButton = this.bnService.showPostButton;
    this.importButton = this.bnService.showImportButton;
    this.copyButton = this.bnService.showCopyButton;
    this.printButton = this.bnService.showPrintButton;
    this.headerNavigate = this.bnService.breadcrumbHeader;
  }

}
