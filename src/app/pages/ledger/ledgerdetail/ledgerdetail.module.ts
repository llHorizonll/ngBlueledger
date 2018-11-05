import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LedgerdetailComponent } from "./ledgerdetail.component";

const routes: Routes = [
  {
    path: "",
    component: LedgerdetailComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LedgerdetailComponent]
})
export class LedgerdetailModule {}
