import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VspSharedModule } from "vsp-library";
import { VspMenuComponent } from "./header/components/vsp-menu/vsp-menu.component";

@NgModule({
    imports: [CommonModule, VspSharedModule],
    declarations: [VspMenuComponent],
    exports: [VspMenuComponent]
})

export class VspLayoutModule {

};