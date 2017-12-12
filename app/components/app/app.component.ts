import { Component } from "angular-ts-decorators";
import * as templateUrl from "./app.template.html";

@Component({
    selector: "app",
    templateUrl: String(templateUrl),
})
export class AppComponent {}
