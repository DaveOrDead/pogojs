// Vendor
import { expect } from "chai";
// Utilities
import arrayContainsFunction from "./arrayContainsFunction";

describe("Array contains function utility", () => {
    it("should return true when array contains a provided function", () => {
        expect(
            arrayContainsFunction(
                [(a, b) => a + b, (c, d) => c + d],
                (a, b) => a + b
            )
        ).to.equal(true);
    });

    it("should return false when array does not contain a provided function", () => {
        expect(
            arrayContainsFunction(
                [(a, b) => a + b, (c, d) => c + d],
                (f, g) => f + g
            )
        ).to.equal(false);
    });
});
