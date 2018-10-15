import functionsMatch from "./functionsMatch";

const arrayContainsFunction = (arr, func) =>
    arr.some(f => functionsMatch(f, func));

export default arrayContainsFunction;
