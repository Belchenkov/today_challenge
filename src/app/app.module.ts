import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { FormsModule } from "@angular/forms";
import { NativeScriptFormsModule } from "nativescript-angular";

import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from "~/app/challenges/current-challenge/current-challenge.component";
import { StackComponent } from './layouts/stack/stack.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        FormsModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        StackComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
