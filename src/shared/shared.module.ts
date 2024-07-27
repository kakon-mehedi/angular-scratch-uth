import { NgModule } from "@angular/core";
import { MaterialModule } from "./modules/material.moudle";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

@NgModule({
    declarations: [],
    imports: [BrowserAnimationsModule, MaterialModule],
    exports: [MaterialModule]
})
export class SharedModule {

}