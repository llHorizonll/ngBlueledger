import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ChequereconComponent } from "./chequerecon.component";

const routes: Routes = [
  {
    path: "",
    component: ChequereconComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ChequereconComponent]
})
export class ChequereconModule {}
