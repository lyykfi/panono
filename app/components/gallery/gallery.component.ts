import { Component, Input } from "angular-ts-decorators";
import * as templateUrl from "./gallery.template.html";

@Component({
    selector: "gallery",
    templateUrl: String(templateUrl),
})
export class GalleryComponent {
    @Input() private data = [];

    private ngOnChanges(changes) {
        console.log(changes);
    }

    constructor(ExploreFactory) {
        ExploreFactory.getData().then((data) => {
            console.log(data);
            this.data = data.data.items;
        });
    }
}
