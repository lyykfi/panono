import { Component, Input } from "angular-ts-decorators";
import * as templateUrl from "./app.template.html";

@Component({
    selector: "main",
    templateUrl: String(templateUrl),
})
export class AppComponent {
    @Input() private view: string;

    @Input() private filter: string;

    @Input() private favorites: string[];

    @Input() private leftPanelId: string;

    /**
     *
     * @method ngOnInit
     * @return {null}
     */
    private ngOnInit() {
        this.favorites = [];
        this.leftPanelId = "left";
        this.filter = "ALL";
        this.view = "GRID";
    }

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
