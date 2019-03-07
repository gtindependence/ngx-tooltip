import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TooltipModule, TooltipOptions } from 'ngx-tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot({
        placement: 'top',
        content: 'Lorem ipsum dolor'
    } as TooltipOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }