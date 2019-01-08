import { Component, TemplateRef, ViewChild, OnInit } from "@angular/core";
import { PreloaderService } from "../preloader/preloader.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  isPreloader: any;
  constructor(private preloader: PreloaderService) { }

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  ngOnInit() {
    this.isPreloader = this.preloader.showPreloader;
  }
}
