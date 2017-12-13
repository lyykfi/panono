import { Injectable } from "angular-ts-decorators";
import CONFIG from "../config";

@Injectable()
export class ExploreFactory {
    private $http;

    private storageName: string = "favorites";

    private favorites: string[] | null = null;

    constructor($http) {
        this.$http = $http;
    }

    /**
     *
     * @method getData
     * @return {Promise}
     */
    public getData() {
        return this.$http({
            method: "GET",
            url: `${CONFIG.SERVER}/explore`,
        });
    }

    /**
     *
     * @method addToFavorite
     * @param  {string}      id
     * @return {string[]}
     */
    public addToFavorite(id: string) {
        const favorites: string[] =  this.getFavorites();

        if (favorites.indexOf(id) === -1) {
            favorites.push(id);
        }

        localStorage.setItem(this.storageName, JSON.stringify(favorites));

        return favorites;
    }

    /**
     *
     * @method isFavorite
     * @param  {string}   id
     * @return {boolean}
     */
    public isFavorite(id: string) {
        const favorites: string[] = this.getFavorites();
        return favorites.indexOf(id) === -1 ? false : true;
    }

    /**
     *
     * @method removeFromFavorite
     * @param  {string}           id
     * @return {string[]}
     */
    public removeFromFavorite(id: string) {
        const favorites: string[] = this.getFavorites();
        const index = favorites.indexOf(id);

        if (index >= 0) {
            favorites.splice(index, 1);
        }

        localStorage.setItem(JSON.stringify(favorites), this.storageName);

        return favorites;
    }

    /**
     *
     * @method getFavorites
     * @return {string[]}
     */
    public getFavorites() {
        if (!this.favorites) {
            const favoritesRaw: string = localStorage.getItem(this.storageName);
            let favorites: string[] = [];

            try {
                favorites = JSON.parse(favoritesRaw);
            } catch (e) {
                favorites = [];
            }

            if (!favorites) {
                favorites = [];
            }

            this.favorites = favorites;
        }

        return this.favorites;
    }
}
