import { Component, Input, Output } from "angular-ts-decorators";
import * as templateUrl from "./sidebar.template.html";

@Component({
    selector: "sidebar",
    templateUrl: String(templateUrl),
})
export class SidebarComponent {
    @Input() private visible: boolean = true;
    private $mdSidenav;

    constructor($mdSidenav) {
      this.$mdSidenav = $mdSidenav;
    }

    private onHide() {
        this.$mdSidenav("left").close();
    }
}
