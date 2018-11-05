import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { TrialbalanceComponent } from "./trialbalance.component";

const routes: Routes = [
  {
    path: "",
    component: TrialbalanceComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [TrialbalanceComponent]
})
export class TrialbalanceModule {}
