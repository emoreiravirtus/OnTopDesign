import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SelectBoxSmallComponent } from "../shared/select-box-small/select-box-small.component";
import { ContractsComponent } from "./contracts.component";

@NgModule({
  declarations: [
    ContractsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContractModule { }
