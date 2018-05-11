import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjCoreModule } from 'wijmo/wijmo.angular2.core';

import { AppComponent } from './app.component';
import { OneAppComponent } from './components/one-app/one-app.component';
import { TwoAppComponent } from './components/two-app/two-app.component';


@NgModule({
  declarations: [
    AppComponent,
    OneAppComponent,
    TwoAppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    WjInputModule,
    WjCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
