import { NgModule } from "@angular/core";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { authenticationModuleRoutes } from "./routes";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [SharedModule, RouterModule.forChild(authenticationModuleRoutes)],
    declarations: [SignupComponent, LoginComponent],
    bootstrap: [LoginComponent]
})
export class AuthenticationModule {
    constructor() {
        console.log('Authenctication Module Loads');
    }
}