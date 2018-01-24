import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Alert } from '../models/alert';
import {AlertViewComponent} from "../alert.view/alert.view.component"

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor(private alertsService: AlertService) { }

  ngOnInit() {
    this.alertsService.getAlerts(null).subscribe(a => this.activeAlerts = a);
  }

  public activeAlerts : Alert[]
}
