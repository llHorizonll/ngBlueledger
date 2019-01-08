import { Component, OnInit } from '@angular/core';
import { BreadcrumbNavService } from 'src/app/services/breadcrumbnav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private bnService: BreadcrumbNavService) { }

  async ngOnInit() {
    this.bnService.setHeader("Dashboard");
    this.bnService.setNewButton(false);
    this.bnService.setEditButton(false);
    this.bnService.setPrintButton(false);
  }

}
