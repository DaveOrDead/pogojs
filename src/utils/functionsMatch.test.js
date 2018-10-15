// Vendor
import { expect } from "chai";
// Utilities
import functionsMatch from "./functionsMatch";

describe("Functions match utility", () => {
    it("should return true when function bodies are identical", () => {
        expect(functionsMatch(() => "mate", () => "mate")).to.equal(true);
    });

    it("should return false when function bodies are not identical", () => {
        expect(functionsMatch(() => "mate", () => "enemy")).to.equal(false);
    });

    it("should return true when function arguments are identical", () => {
        expect(functionsMatch((a, b) => "mate", (a, b) => "mate")).to.equal(
            true
        );
    });

    it("should return false when function arguments are not identical", () => {
        expect(functionsMatch((a, b) => "mate", a => "mate")).to.equal(false);
    });
});
