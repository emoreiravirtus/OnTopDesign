import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContractModule } from './contracts/contracts.module';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { SelectBoxBigComponent } from './shared/select-box-big/select-box-big.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SelectBoxBigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContractModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
