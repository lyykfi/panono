
import * as angular from "angular";
import "angular-mocks";
import { AppComponent } from "../../app/components/app/app.component";

describe("Controller", () => {
    let controller;
    let scope;

    beforeEach(angular.mock.module("app"));

    beforeEach(inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();
        controller = $componentController('gallery', {$scope: scope});
    }));

});
