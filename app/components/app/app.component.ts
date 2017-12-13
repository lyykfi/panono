import { Component, Input } from "angular-ts-decorators";
import * as templateUrl from "./app.template.html";

@Component({
    selector: "app",
    templateUrl: String(templateUrl),
})
export class AppComponent {
    @Input() private view: string = "GRID";

    @Input() private filter: string = "ALL";

    @Input() private favorites: string[] = [];

    /**
     *
     * @method setView
     * @param  {string} view
     * @return {null}
     */
    public setView(view: string) {
        this.view = view;
    }

    /**
     *
     * @method setFilter
     * @param  {string}  filter
     * @return {null}
     */
    public setFilter(filter: string) {
        this.filter = filter;
    }

    /**
     *
     * @method updateFavorites
     * @param  {string[]}  favorites
     * @return {null}
     */
    public updateFavorites(favorites: string[]) {
        this.favorites = favorites;
    }
}
