import { NgModule } from "angular-ts-decorators";
import { routes } from "./app.routes";
import { AppComponent } from "./components/app/app.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

import { ExploreFactory } from "./explore/explore.factory";

import "angular-animate";
import "angular-aria";
import "angular-material";
import "angular-messages";
import "angular-moment";
import "angular-translate";

import "angular-material/angular-material.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/styles/style.less";

import translations from "./assets/translates/en.js";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        GalleryComponent,
    ],
    id: "app",
    imports: ["ngAnimate", "ngAria", "ngMaterial", "pascalprecht.translate", "angularMoment"],
    providers: [ExploreFactory],
})
export class AppModule {
    /*@ngInject*/
    public static config($translateProvider) {
        $translateProvider.translations("en", translations).preferredLanguage("en");
    }
}
