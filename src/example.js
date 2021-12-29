const obj = {
    test: {
        myField: {
            'value string': 'result',
        },
    },
};

console.log(selector(obj, ['test', 'myField', 'value string'])); // => 'result'
console.log(selector(obj, ['test', 'notExistField', 'value string'])); // => ''
