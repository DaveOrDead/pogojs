// Vendor
import { expect } from "chai";
// Utilities
import { fetchPogoState, updatePogoState, pogoState } from "./pogoState";

describe("pogoState", () => {
    it("should return an object", () => {
        expect(pogoState).to.be.an("object");
    });

    it("should be able to set and access pogoState", () => {
        updatePogoState({ hawk: "eye" });
        expect(fetchPogoState("hawk")).to.equal("eye");
    });

    it("should be able to update existing keys on pogoState", () => {
        updatePogoState({ hawk: "nose" });
        expect(fetchPogoState("hawk")).to.equal("nose");
    });
});
