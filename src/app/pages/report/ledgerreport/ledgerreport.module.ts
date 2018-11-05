import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LedgerreportComponent } from "./ledgerreport.component";

const routes: Routes = [
  {
    path: "",
    component: LedgerreportComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LedgerreportComponent]
})
export class LedgerreportModule {}
