import { Component, Input, Output } from "angular-ts-decorators";
import * as templateUrl from "./sidebar.template.html";

@Component({
    selector: "sidebar",
    templateUrl: String(templateUrl),
    require: {
        parentCtrl: "^^main"
    },
})
export class SidebarComponent {
    private $mdSidenav;
    private $scope;
    private parentCtrl;

    @Input() private view: string;

    @Input() private filter: string;

    constructor($scope, $mdSidenav) {
      this.$mdSidenav = $mdSidenav;

      $scope.handleChangeView = this.handleChangeView.bind(this);
      $scope.handleChangeFilter = this.handleChangeFilter.bind(this);
    }

    /**
     *
     * @method onHide
     * @return {null}
     */
    private onHide() {
        this.$mdSidenav(this.parentCtrl.leftPanelId).close();
    }

    /**
     *
     * @method ngOnInit
     * @return {null}
     */
    private ngOnInit() {
        this.view = this.parentCtrl.view;
        this.filter = this.parentCtrl.filter;
    }

    /**
     *
     * @method handleChangeView
     * @return {null}
     */
    private handleChangeView() {
        this.parentCtrl.setView(this.view);
    }

    /**
     *
     * @method handleChangeFilter
     * @return {null}
     */
    private handleChangeFilter() {
        this.parentCtrl.setFilter(this.filter);
    }
}
