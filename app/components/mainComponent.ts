import { appModule } from "../index";
import MainController from "./mainController";

export class MainComponent implements ng.IComponentOptions{

    constructor() {        
    }

    public controller = MainController
    public template = require("./mainTemplate.html");
}


appModule.component("mainComponent", new MainComponent());