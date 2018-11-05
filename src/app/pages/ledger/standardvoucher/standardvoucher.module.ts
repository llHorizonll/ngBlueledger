import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PrefixlistComponent } from "./prefixlist/prefixlist.component";
import { ListComponent } from "./list/list.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  {
    path: "",
    component: PrefixlistComponent
  },
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "detail",
    component: DetailComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PrefixlistComponent, ListComponent, DetailComponent]
})
export class StandardvoucherModule {}
