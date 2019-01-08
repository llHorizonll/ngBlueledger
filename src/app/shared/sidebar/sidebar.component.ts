import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SidebarService } from "./sidebar.service";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  constructor(
    private sidebarservice: SidebarService,
    private router: Router
  ) { }

  theme = true;
  menulist = [];
  isOpenOne = true;

  async ngOnInit() {
    await this.sidebarservice.getMenuSidebar().then(menulist => {
      this.menulist = menulist;
      this.findUrl(this.menulist, this.router.url);
    });
  }

  openChange(menulist, url) {
    if (menulist.length > 0) {
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
  }

  findUrl(menulist, url) {
    if (menulist.length > 0) {
      menulist.filter(item => {
        if (item.Url == decodeURIComponent(url)) {
          item.open = true;
        }
        if (item.Item) {
          this.findsubmenuitem(item, item.Item, url);
        }
      });
    }
  }

  findsubmenuitem(parent, menulist, url) {
    if (menulist.length > 0) {
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
}
