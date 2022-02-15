import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { SelectBoxBigComponent } from './shared/select-box-big/select-box-big.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ContractsComponent } from './contracts/contracts.component';
import { SearchBarSmallComponent } from './shared/search-bar-small/search-bar-small.component';
import { SelectBoxSmallComponent } from './shared/select-box-small/select-box-small.component';
import { StatusBoxComponent } from './shared/status-box/status-box.component';
import { SearchBarBigComponent } from './shared/search-bar-big/search-bar-big.component';
import { ButtonComponent } from './shared/button/button.component';
import { ActionDropdownComponent } from './shared/action-dropdown/action-dropdown.component';
import { TableComponent } from './contracts/table/table.component';
import { TableItemComponent } from './contracts/table/table-item/table-item.component';
import { FiltersComponent } from './contracts/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SelectBoxBigComponent,
    ChatBoxComponent,
    ContractsComponent,
    TableComponent,
    SearchBarSmallComponent,
    SelectBoxSmallComponent,
    StatusBoxComponent,
    SearchBarBigComponent,
    ButtonComponent,
    ActionDropdownComponent,
    TableItemComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
