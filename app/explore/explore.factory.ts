import { Injectable } from "angular-ts-decorators";
import CONFIG from "../config";

@Injectable()
export class ExploreFactory {
    private $http;

    constructor($http) {
        this.$http = $http;
    }

    public getData() {
        return this.$http({
            method: "GET",
            url: `${CONFIG.SERVER}/explore`,
        });
    }
}
