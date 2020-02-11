var adult = true;

if (adult) {
    var name = 'Kyle';
    let age = 22;
    console.log('Shhhh, this is a secret!');
}

console.log(name);

//console.log(age); //Error!

const myBirthday = true;
let age = 22;

if (myBirthday) {
    age = age + 1;
    //myBirthday = false; //Error!
}

const actors = [
    'Morgan Freeman', 'Jennifer Aniston'
];

actors[2] = 'Tom Cruise'; //Mutation
//actors = []; //Error! - Re-assignment

function hello(name) {
    console.log(`Hello, ${ name }.`);
}

hello('Kyle');