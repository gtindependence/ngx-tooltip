import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TooltipModule, TooltipOptions } from '@gtindependence/ngx-tooltip';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot({
      content: 'lorem ipsom',
      placement: 'top',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
