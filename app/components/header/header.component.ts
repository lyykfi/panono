import { Component } from "angular-ts-decorators";
import * as templateUrl from "./header.template.html";

@Component({
    selector: "header",
    templateUrl: String(templateUrl),
})
export class HeaderComponent {
    private $mdSidenav;

    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
    }

    public showSidebar() {
        this.$mdSidenav("left").open();
    }
}
