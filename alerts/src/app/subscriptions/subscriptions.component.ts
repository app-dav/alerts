import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from '../models/subscription';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private subService : SubscriptionService) { }

  ngOnInit() {
    this.subService.getSubscriptions().subscribe(s => this.subscriptions = s);
    }

    @Input()
public subscriptions : Subscription[]
}
