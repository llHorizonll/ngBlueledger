import { NgModule, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreloaderComponent } from "./preloader.component";
import { PreloaderService } from "./preloader.service";
import { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  imports: [CommonModule, NgZorroAntdModule.forRoot()],
  declarations: [PreloaderComponent],
  exports: [PreloaderComponent],
  providers: [PreloaderService]
})
export class PreloaderModule implements OnInit {
  constructor() {}

  ngOnInit() {}
}
