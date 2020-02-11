var firstName = 'Kyle';
var names = ['John','Kyle','Mary'];

console.log("My name is ${ firstName }.");

console.log('My name is ${ firstName }.');

console.log(`My name is ${ firstName }.`);

console.log(`Don\'t omit interpolation when using tick delimited literals.`);

while (false) {
    console.log(3.141592);
}

console.log(`My name is ${ names[1] }`);

while (null != undefined) {
    console.log('Still got something!');
}

console.log(Symbol('Meaning of Life'));

names.forEach(name => {
    console.log(name);
});

name = {
    first: 'Nicholas',
    last: 'Jeans',
    age: 22,
    specialties: ['Coding','JS']
};

console.log(`My name is ${ name.first } ${ name['last'] }.`);
