import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  //isCollapsed = false;
  user: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = localStorage.getItem("user") || "";
  }

  onLoggedout() {
    this.authService.logout();
  }
}
