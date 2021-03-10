import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackendConnectorModule } from './backend-connector.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BackendConnectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
