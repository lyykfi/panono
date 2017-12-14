import { Component, Input } from "angular-ts-decorators";
import * as templateUrl from "./gallery.template.html";

@Component({
    selector: "gallery",
    templateUrl: String(templateUrl),
    require: {
        parentCtrl: "^^main"
    },
})
export class GalleryComponent {
    @Input() private data: any[] | null = null;

    private $scope;

    private ExploreFactory;

    private parentCtrl;

    constructor($scope, ExploreFactory) {
        this.$scope = $scope;
        this.ExploreFactory = ExploreFactory;
    }

    /**
     *
     * @method ngOnInit
     * @return {null}
     */
    private ngOnInit() {
        this.ExploreFactory.getData().then((data) => {
            this.data = data.data.items;
        });
    }

    /**
     *
     * @method isFavorite
     * @param  {string}   id
     * @return {boolean}
     */
    private isFavorite(id: string) {
        return this.ExploreFactory.isFavorite(id);
    }

    /**
     *
     * @method onAddToFavorite
     * @param  {string}        id
     * @return {null}
     */
    private onAddToFavorite(id: string) {
        this.ExploreFactory.addToFavorite(id);
        this.parentCtrl.updateFavorites();
    }

    /**
     *
     * @method onRemoveFromFavorite
     * @param  {string}             id
     * @return {null}
     */
    private onRemoveFromFavorite(id: string) {
        this.ExploreFactory.removeFromFavorite(id);
        this.parentCtrl.updateFavorites();
    }
}
