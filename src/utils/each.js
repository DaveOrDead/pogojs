const each = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        func(array[i], i);
    }
};

export default each;
