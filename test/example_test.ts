import { module } from "angular";
import { MainComponent } from "../app/components/mainComponent";

describe("example test", () => {

    var mainComponent: MainComponent;

    beforeEach(() => module("appModule"));

    beforeEach(() => {
        mainComponent = new MainComponent();
    });

    it("Should not be undefined", () => {
        expect(mainComponent.controller).toBeDefined();
    })

    it("1 plus 1", () => {
        expect(1 + 1).toBe(2);
    });
});