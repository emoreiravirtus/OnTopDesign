import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ActionDropdownComponent } from "../shared/action-dropdown/action-dropdown.component";
import { ButtonComponent } from "../shared/button/button.component";
import { SearchBarBigComponent } from "../shared/search-bar-big/search-bar-big.component";
import { SearchBarSmallComponent } from "../shared/search-bar-small/search-bar-small.component";
import { SelectBoxSmallComponent } from "../shared/select-box-small/select-box-small.component";
import { StatusBoxComponent } from "../shared/status-box/status-box.component";
import { ContractsComponent } from "./contracts.component";

@NgModule({
  declarations: [
    ContractsComponent,
    SearchBarSmallComponent,
    SelectBoxSmallComponent,
    StatusBoxComponent,
    SearchBarBigComponent,
    ButtonComponent,
    ActionDropdownComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContractModule { }
