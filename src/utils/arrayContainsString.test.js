// Vendor
import { expect } from "chai";
// Utilities
import arrayContainsString from "./arrayContainsString";

describe("Array contains string utility", () => {
    it("should return true when array contains a provided string", () => {
        expect(arrayContainsString(["mate", "ping"], "mate")).to.equal(true);
    });

    it("should return false when array does not contain a provided string", () => {
        expect(arrayContainsString(["pong", "ping"], "mate")).to.equal(false);
    });
});
