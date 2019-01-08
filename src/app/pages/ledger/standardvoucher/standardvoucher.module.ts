import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PrefixlistComponent } from "./prefixlist/prefixlist.component";
import { ListComponent } from "./list/list.component";
import { DetailComponent } from "./detail/detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgPipesModule } from "ngx-pipes";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { StandardVoucherService } from "./standardvoucher.service";

const routes: Routes = [
  {
    path: "",
    component: PrefixlistComponent
  },
  {
    path: ":prefix",
    component: ListComponent
  },
  {
    path: ":prefix/:id",
    component: DetailComponent
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), NgPipesModule, ReactiveFormsModule, NgZorroAntdModule],
  declarations: [PrefixlistComponent, ListComponent, DetailComponent],
  providers: [StandardVoucherService]
})
export class StandardvoucherModule { }
