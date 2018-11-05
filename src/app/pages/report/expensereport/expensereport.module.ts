import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ExpensereportComponent } from "./expensereport.component";

const routes: Routes = [
  {
    path: "",
    component: ExpensereportComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ExpensereportComponent]
})
export class ExpensereportModule {}
