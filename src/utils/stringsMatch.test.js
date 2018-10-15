// Vendor
import { expect } from "chai";
// Utilities
import stringsMatch from "./stringsMatch";

describe("Strings match utility", () => {
    it("should return true when strings are identical", () => {
        expect(stringsMatch("mate", "mate")).to.equal(true);
    });

    it("should return false when strings are not identical", () => {
        expect(stringsMatch("mate", "enemy")).to.equal(false);
    });

    it("should ignore casing", () => {
        expect(stringsMatch("mAtE", "MaTe")).to.equal(true);
    });

    it("should fail if there is whitespace", () => {
        expect(stringsMatch(" mate", "mate")).to.equal(false);
    });
});
