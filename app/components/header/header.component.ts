import { Component } from "angular-ts-decorators";
import * as templateUrl from "./header.template.html";

@Component({
    selector: "header",
    templateUrl: String(templateUrl),
    require: {
        parentCtrl: "^^app"
    },
})
export class HeaderComponent {
    private $mdSidenav;

    private parentCtrl;

    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
    }

    /**
     *
     * @method showSidebar
     * @return {null}
     */
    public showSidebar() {
        console.log(this);
        this.$mdSidenav(this.parentCtrl.leftPanelId).open();
    }
}
