const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function() {
        console.log('Test');
    },
};
options.makeTest();
console.log(Object.keys(optoins).length);

for (key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key])
            console.log(`key is ${i} and value is ${options[key][i]}`);
    } else { console.log(`key is ${key } and value is ${options[key]}`);

    }
};
console.log()



const str = prompt('','');
const products = str.split(', ');
console.log(products);