import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

import { Subscription } from "../models/subscription";
import { Alert } from "../models/alert";

@Injectable()
export class AlertService
{
    constructor(){}

    getAlerts(subscription : Subscription) : Observable<Alert[]>
    {
            const alerts = new Array<Alert>();

            for (let i = 0; i < 5; i++) {
                const s = new Alert();
                s.text = i.toString();
                s.name = i.toString();
                alerts.push(s);
            }
    
            return of(alerts);
    }



}

