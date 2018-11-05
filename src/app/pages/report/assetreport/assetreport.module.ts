import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AssetreportComponent } from "./assetreport.component";

const routes: Routes = [
  {
    path: "",
    component: AssetreportComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [AssetreportComponent]
})
export class AssetreportModule {}
