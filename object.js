
const object = {
    name: 'Satyam',
    age: 21,
    address: {
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India'
    },
    function: function(){
        console.log('This is a function inside an object');
    }
}

const deepCopy = JSON.parse(JSON.stringify(object));

console.log(deepCopy)

object.address.city = 'Delhi';

console.log(deepCopy.address.city); // Output: Bangalore


// using shallow copy
const shallowCopy = {...object}

console.log(shallowCopy);



const objectobj1 = {
    name: 'Satyam',
    age: 21,
    address: {
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India'
    },
    hello: function(){
        console.log('This is a function inside an object');
    }
}


const clonedObject = {...objectobj1}
console.log(clonedObject);

delete clonedObject.hello

console.log(clonedObject);

// using structuredclone
const structuredCloneObject = structuredClone(objectobj1);
console.log(structuredCloneObject);
