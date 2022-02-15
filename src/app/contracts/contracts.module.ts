import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchBarSmallComponent } from "../shared/search-bar-small/search-bar-small.component";
import { SelectBoxBigComponent } from "../shared/select-box-big/select-box-big.component";
import { SelectBoxSmallComponent } from "../shared/select-box-small/select-box-small.component";
import { StatusBoxComponent } from "../shared/status-box/status-box.component";
import { ContractsComponent } from "./contracts.component";

@NgModule({
  declarations: [
    ContractsComponent,
    SearchBarSmallComponent,
    SelectBoxSmallComponent,
    SelectBoxBigComponent,
    StatusBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContractModule { }
