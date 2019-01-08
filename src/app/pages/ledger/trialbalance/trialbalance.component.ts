import { Component, OnInit } from '@angular/core';
import { BreadcrumbNavService } from 'src/app/services/breadcrumbnav.service';

@Component({
  selector: 'app-trialbalance',
  templateUrl: './trialbalance.component.html',
  styleUrls: ['./trialbalance.component.scss']
})
export class TrialbalanceComponent implements OnInit {

  constructor(private bnService: BreadcrumbNavService) { }

  ngOnInit() {
    this.bnService.setHeader("Trial Balance")
  }

}
