import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BreadcrumbNavService {

  showNewButton = new BehaviorSubject<Boolean>(false);
  showEditButton = new BehaviorSubject<Boolean>(false);
  showDeleteButton = new BehaviorSubject<Boolean>(false);
  showPostButton = new BehaviorSubject<Boolean>(false);
  showImportButton = new BehaviorSubject<Boolean>(false);
  showCopyButton = new BehaviorSubject<Boolean>(false);
  showPrintButton = new BehaviorSubject<Boolean>(false);
  showFieldEdit = new BehaviorSubject<Boolean>(true);
  showSaveButton = new BehaviorSubject<Boolean>(false);
  showCancelButton = new BehaviorSubject<Boolean>(false);

  onEdit = new BehaviorSubject<Boolean>(false);
  onDelete = new BehaviorSubject<Boolean>(false);
  onPost = new BehaviorSubject<Boolean>(false);
  onImport = new BehaviorSubject<Boolean>(false);
  onCopy = new BehaviorSubject<Boolean>(false);
  onSave = new BehaviorSubject<Boolean>(false);
  onCancel = new BehaviorSubject<Boolean>(false);
  onPrint = new BehaviorSubject<Boolean>(false);

  breadcrumbHeader = new BehaviorSubject<string>(null);
  searchByKeyword = new BehaviorSubject<string>(null);

  constructor() { }

  setHeader(text: string) {
    this.breadcrumbHeader.next(text);
  }

  // -- Set Element --
  setNewButton(status: boolean) {
    this.showNewButton.next(status);
  }

  setEditButton(status: boolean) {
    this.showEditButton.next(status);
  }

  setDeleteButton(status: boolean) {
    this.showDeleteButton.next(status);
  }

  setPostButton(status: boolean) {
    this.showPostButton.next(status);
  }

  setImportButton(status: boolean) {
    this.showImportButton.next(status);
  }

  setCopyButton(status: boolean) {
    this.showCopyButton.next(status);
  }


  setPrintButton(status: boolean) {
    this.showPrintButton.next(status);
  }

  setEditField(status: boolean) {
    this.showFieldEdit.next(status);
  }

  setSaveButton(status: boolean) {
    this.showSaveButton.next(status);
  }

  setCancelButton(status: boolean) {
    this.showCancelButton.next(status);
  }
  // -- End Set Element --

  // -- Set Event --
  setOnEdit(status: boolean) {
    this.onEdit.next(status);
  }

  setOnDelete(status: boolean) {
    this.onDelete.next(status);
  }

  setOnPrint(status: boolean) {
    this.onPrint.next(status);
  }

  setOnSave(status: boolean) {
    this.onSave.next(status);
  }

  setOnCancel(status: boolean) {
    this.onCancel.next(status);
  }
  // -- End Set Event
}
