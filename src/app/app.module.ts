import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { ZippyNgprojectComponent } from './zippy-ngproject/zippy-ngproject.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ZippyNgprojectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
