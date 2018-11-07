// Variables and data types

// var firstName = 'John';
// console.log(firstName);
// 
// var lastName = 'Smith';
// var age = 28;
// 
// var fullAge = true;
// console.log(fullAge);
// 
// var job;
// console.log(job);
// 
// job = 'Teacher';
// console.log(job);
// 


//  Variable naming rules
// var _3years = 3;
// var johnMark = 'John and Mark';
// var if = 23;
//


// Variable mutation and type coercion

// var firstName = 'John';
// var age = 28;
// 
// console.log(firstName + ' ' + age);
// 
// var job, isMarried;
// job = 'Teacher';
// isMarried = false;
// 
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//


// Variable mutation

// age = 'twenty eight';
// job = 'driver';
// 
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// 
// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' +  lastName);
//


// Basic Operators

// var year, yearJohn, yearMark
// now = 2018;
// ageJohn = now - 28;
// ageMark = now - 33;

// Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// 
// console.log(yearJohn);
// 
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
//


// Logical Operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// type of operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);
//


// Operator precedence
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// Multiple Operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;

// Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x--;
// console.log(x);

//
// If/Else statements
//

// var firstName = 'John';
// var civilStatus = 'single';
// 
// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

//
// The Ternary Operator 
// 

// var firstName = 'John';
// var age = 16;
// 
// age >= 16 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
// 
// var drink = age >= 18 ? 'beer' : 'juice':
// // var drink = question ? true : false
// console.log(drink);

//
// Switch Statement
//

// var firstName = 'John';
// var job = 'driver';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an Uber');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites');
//         break;
//     default: 
//         console.log(firstName + ' does something else');
// }
// 
// var age = 22;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy!');
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man');
//     default:
//         console.log(firstName + ' is a man');
// }

//
// Truthy and Falsy values 
//

// falsy values: undefined, null, 0, '', NaN

var height;
height = '';

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

//
// Equality Operators
//

height = 23;

if (height == 23) {
    console.log('The == operator does type coercion');
}







