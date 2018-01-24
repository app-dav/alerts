import { Component, OnInit, Input } from '@angular/core';
import {MatCardModule} from "@angular/material";

import {Alert} from  "../models/alert";

@Component({
  selector: 'app-alert-view',
  templateUrl: './alert.view.component.html',
  styleUrls: ['./alert.view.component.css']
})
export class AlertViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public alert : Alert
}
