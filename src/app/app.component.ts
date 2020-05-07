import {Component, OnDestroy, OnInit} from "@angular/core";
import { Subscription } from "rxjs";

import { UiService } from "~/app/shared/ui/ui.service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {
    activeChallenges = '';
    private drawerSub: Subscription;

    constructor(
        private uiService: UiService
    ) {
    }

    ngOnInit() {
        this.drawerSub = this.uiService.drawerState.subscribe();
        console.log('Toggle side drawer')
    }

    onChallengeInput(challengeDescription: string) {
        this.activeChallenges = challengeDescription;
        console.log(challengeDescription);
    }

    ngOnDestroy() {
        if (this.drawerSub) this.drawerSub.unsubscribe();
    }

}
