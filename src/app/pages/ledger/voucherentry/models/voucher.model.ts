export class voucherList {
  Id: number;
  Prefix: string;
  Description: string;
  DocumentStatusId: number;
  DocumentStatus: string;
  PostReference: string;
  DateFormat: string;
  EntryDate: string;
  VoucherNo: string;
  VoucherTypeId: number;
  TotalAmount: number;
  Active: boolean;
  ReconciliationStatus: number;
}

export class voucherDetail {
  Id: number;
  Prefix: string;
  Description: string;
  DocumentStatusId: number;
  DocumentStatus: string;
  PostReference: string;
  DateFormat: string;
  EntryDate: string;
  VoucherNo: string;
  VoucherTypeId: number;
  TotalAmount: number;
  Active: boolean;
  ReconciliationStatus: number;
  ViewVoucherTransaction: ViewVoucherTransaction[];
}

export class ViewVoucherTransaction {
  Id: number;
  Seq: number;
  DepartmentId: number;
  Department: string;
  DepartmentDesc: string;
  AccountCodeId: number;
  AccountCode: string;
  AccountDesc: string;
  CurrencyId: number;
  Currency: string;
  BaseCurrency: string;
  ManagementCurrencyId: number;
  ExchangeRate: string;
  ManagementExchangeRate: string;
  // BaseDecimalDigit
  // BaseDecimalSeparator
  // BaseFormat
  // BaseThousandSeparator
  Credit: string;
  Debit: string;
  BaseCredit: string;
  BaseDebit: string;
  ManagementCredit: string;
  ManagementDebit: string;
  DecimalDigit: string;
  DecimalSeparator: string;
  ThousandSeparator: string;
  Description: string;
}


