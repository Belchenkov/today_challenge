import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UiService {
    private _toggleDrawer = new BehaviorSubject<void>(null);

    get drawerState() {
        return this._toggleDrawer.asObservable();
    }

    toggleDrawer() {
        this._toggleDrawer.next();
    }
}
