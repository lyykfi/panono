
import * as angular from "angular";
import "angular-mocks";
import { AppComponent } from "../../app/components/app/app.component";

describe("Controller", () => {
    let controller;
    let scope;

    const TEST = "TEST";
    const favorites = ["123", "gdfg", "4234"];

    beforeEach(angular.mock.module("app"));

    beforeEach(inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();
        controller = $componentController('app', {$scope: scope});
    }));

    it('setView() Equal', () => {
        controller.setView(TEST);
        expect(controller.view).toEqual(TEST);
    });

    it('setFilter() Equal', () => {
        controller.setFilter(TEST);
        expect(controller.filter).toEqual(TEST);
    });

    it('updateFavorites() Equal', () => {
        controller.updateFavorites(favorites);
        expect(controller.favorites).toEqual(favorites);
    });
});
