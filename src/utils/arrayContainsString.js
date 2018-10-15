import stringsMatch from "./stringsMatch";

const arrayContainsString = (arr, str) => arr.some(s => stringsMatch(s, str));

export default arrayContainsString;
