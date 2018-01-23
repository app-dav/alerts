import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { ViewerComponent } from './viewer/viewer.component';
import { SubscriptionService } from './services/subscription.service';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [SubscriptionService],
  bootstrap: [AppComponent, SubscriptionsComponent]
})
export class AppModule { }
