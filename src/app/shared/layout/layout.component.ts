import { Component, OnInit } from "@angular/core";
import { PreloaderService } from "../preloader/preloader.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  isPreloader: any;
  isCollapsed = false;
  constructor(private preloader: PreloaderService) {}

  ngOnInit() {
    this.isPreloader = this.preloader.showPreloader;
  }
}
