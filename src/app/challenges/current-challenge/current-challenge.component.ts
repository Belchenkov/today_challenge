import { Component, Input } from "@angular/core";
import { ItemEventData } from "ui/list-view";

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.css'],
    moduleId: module.id
})
export class CurrentChallengeComponent {
    @Input() challenges: string[] = [];

    onItemTap(args: ItemEventData) {

    }
}