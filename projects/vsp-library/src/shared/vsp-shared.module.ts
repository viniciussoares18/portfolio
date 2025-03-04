import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VspButtonComponent } from "./components/vsp-button/vsp-button.component";
import { VspTextComponent } from "./components/vsp-text/vsp-text.component";

@NgModule({
    imports: [CommonModule],
    exports: [VspButtonComponent, VspTextComponent],
    declarations: [VspButtonComponent, VspTextComponent]
})
export class VspSharedModule {
};