import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./services/auth.guard";
import { LayoutComponent } from "./shared/layout/layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "login",
    loadChildren: "./pages/login/login.module#LoginModule"
  },
  {
    path: "home",
    loadChildren: "./pages/home/home.module#HomeModule",
    component: LayoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "GeneralLedger/Voucher Entry",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./pages/ledger/voucherentry/voucherentry.module#VoucherentryModule"
      }
    ]
  },
  {
    path: "GeneralLedger/StandardVouchers",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./pages/ledger/standardvoucher/standardvoucher.module#StandardvoucherModule"
      }
    ]
  },
  {
    path: "GeneralLedger/AccountLedger",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./pages/ledger/ledgerdetail/ledgerdetail.module#LedgerdetailModule"
      }
    ]
  },
  {
    path: "GeneralLedger/TrialBalances",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./pages/ledger/trialbalance/trialbalance.module#TrialbalanceModule"
      }
    ]
  },
  {
    path: "GeneralLedger/FinancialStatement",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./pages/ledger/financialstatement/financialstatement.module#FinancialstatementModule"
      }
    ]
  },
  {
    path: "Expense/Invoice",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: "./pages/expense/invoice/invoice.module#InvoiceModule"
      }
    ]
  },
  {
    path: "Expense/Payment",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: "./pages/expense/payment/payment.module#PaymentModule"
      }
    ]
  },
  {
    path: "Expense/Vendor",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: "./pages/expense/vendor/vendor.module#VendorModule"
      }
    ]
  },
  {
    path: "Expense/Cheque",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./pages/expense/chequerecon/chequerecon.module#ChequereconModule"
      }
    ]
  },
  {
    path: "Budget",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: "./pages/budget/budget/budget.module#BudgetModule"
      }
    ]
  },
  {
    path: "Asset/Register",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: "./pages/asset/register/register.module#RegisterModule"
      }
    ]
  },
  {
    path: "Asset/Disposal",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: "./pages/asset/disposal/disposal.module#DisposalModule"
      }
    ]
  },
  {
    path: "Receivables/Profile",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: "./pages/receivables/profile/profile.module#ProfileModule"
      }
    ]
  },
  {
    path: "Receivables/Invoice",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: "./pages/receivables/invoice/invoice.module#InvoiceModule"
      }
    ]
  },
  {
    path: "Receivables/Receipt",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: "./pages/receivables/receipt/receipt.module#ReceiptModule"
      }
    ]
  },
  {
    path: "Receivables/Contract",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./pages/receivables/contract/contract.module#ContractModule"
      }
    ]
  },
  {
    path: "GeneralLedger/Report",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./pages/report/ledgerreport/ledgerreport.module#LedgerreportModule"
      }
    ]
  },
  {
    path: "Expense/Report",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./pages/report/expensereport/expensereport.module#ExpensereportModule"
      }
    ]
  },
  {
    path: "Asset/Report",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./pages/report/assetreport/assetreport.module#AssetreportModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
