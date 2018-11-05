import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SidebarService } from "./sidebar.service";
import { PreloaderService } from "../preloader/preloader.service";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  constructor(
    private sidebarservice: SidebarService,
    private preLoaderService: PreloaderService,
    private router: Router
  ) {}

  theme = true;
  isCollapsed = false;
  menulist = [];
  isOpenOne = true;

  async ngOnInit() {
    this.preLoaderService.setShowPreloader(true);

    await this.sidebarservice.getMenuSidebar().then(menulist => {
      this.menulist = menulist;
      this.findUrl(this.menulist, this.router.url);
    });

    this.preLoaderService.setShowPreloader(false);
  }

  openChange(menulist, url) {
    menulist.filter(item => {
      if (item.Url !== url) {
        item.open = false;
      } else {
        item.open == true;
      }
      if (item.Item) {
        this.openChange(item.Item, url);
      }
    });
  }

  findUrl(menulist, url) {
    menulist.filter(item => {
      if (item.Url == decodeURIComponent(url)) {
        item.open = true;
      }
      if (item.Item) {
        this.findsubmenuitem(item, item.Item, url);
      }
    });
  }

  findsubmenuitem(parent, menulist, url) {
    menulist.forEach(subitem => {
      if (subitem) {
        if (`${subitem.Url}` == decodeURIComponent(url)) {
          parent.open = true;
        }
        if (subitem.Item) {
          this.findsubmenuitem(parent, subitem.Item, url);
        }
      }
    });
  }
}
