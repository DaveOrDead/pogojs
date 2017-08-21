const hyphenToCamelCase = str => str.replace(/\b-([a-z])/g, (all, char) => char.toUpperCase());


export default hyphenToCamelCase;
