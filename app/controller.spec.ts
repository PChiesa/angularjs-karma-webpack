import * as angular from "angular";
import "angular-mocks";
import { Controller } from "./controller";

describe("Controller", () => {

    let controller: Controller;
    // let mockService: any = {
    //     getMessage: jasmine.createSpy("getMessage")
    // };

    beforeEach(angular.mock.module("app"));

    beforeEach(inject(($controller, $q) => {
        controller = $controller("controller");
    }));

    it("should get name from controller", () => {

        expect(controller.name).toBe("Controller");
    });
});
