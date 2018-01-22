import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from '../models/subscription';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.subscriptions = this.getSubs();
    }

 getSubs()
{
  const subs = new Array<Subscription>();

    for(let i =0; i < 5; i++){
      const s = new Subscription();
      s.name = i.toString();
      subs.push(s);
    }
     
    return subs;
}

    @Input()
public subscriptions : Array<Subscription> 
}
