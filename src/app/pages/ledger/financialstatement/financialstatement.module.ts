import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { CardlistComponent } from "./cardlist/cardlist.component";
import { ProfitandlossComponent } from "./profitandloss/profitandloss.component";
import { BalancesheetComponent } from "./balancesheet/balancesheet.component";

const routes: Routes = [
  {
    path: "",
    component: CardlistComponent
  },
  {
    path: "Profit And Loss",
    component: ProfitandlossComponent
  },
  {
    path: "Balance Sheet",
    component: BalancesheetComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    CardlistComponent,
    ProfitandlossComponent,
    BalancesheetComponent
  ]
})
export class FinancialstatementModule {}
