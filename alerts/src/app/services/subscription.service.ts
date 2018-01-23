import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable"
import { of } from "rxjs/observable/of";
import { Subscription } from "../models/subscription";

@Injectable()
export class SubscriptionService {
constructor(){}

    getSubscriptions(): Observable<Subscription[]> {
        const subs = new Array<Subscription>();

        for (let i = 0; i < 5; i++) {
            const s = new Subscription();
            s.name = i.toString();
            subs.push(s);
        }

        return of(subs);
    }
}