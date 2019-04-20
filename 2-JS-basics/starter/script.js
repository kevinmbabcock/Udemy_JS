/***************************
  Variables and data types
*/

// var firstName = "John";
// console.log(firstName);
// 
// var lastName = "Smith";
// var age = 28;
// 
// var fullAge = true;
// console.log(fullAge);
// 
// var job;
// console.log(job);
// 
// job = "Teacher";
// console.log(job);
// 
// // Variable naming rules
// var _3years = 3;
// var johnMark = "John and Mark";
// var delete = 23;


/***************************
  Variables mutation and type coercion
*/

// var firstName = 'John';
// var age = 28;
// 
// console.log(firstName + ' ' + age);
// 
// var job, isMarried; 
// 
// job = 'Teacher';
// isMarried = false;
// 
// console.log(firstName + ' ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// 
// // Variable mutation
// age = 'twenty-eight';
// job = 'Driver';
// 
// alert(firstName + ' is a ' + age + ' year-old ' + job +'. Is he married? ' + isMarried);
// 
// var lastName = prompt('What is his last Name');
// console.log(firstName + ' ' + lastName);


/***************************
  Basic operators
*/

// var now, yearJohn, yearMark, ageJohn, ageMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
// 
// // Math operators
// yearJohn = now - 28;
// yearMark = now - 33;
// 
// console.log(yearJohn);
// 
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
// 
// // Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);
// 
// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'John');
// var x;
// console.log(typeof x);


/***************************
  Operator precedence
*/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;
// 
// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);
// 
// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var averageAge = (ageJohn + ageMark) / 2;
// console.log(averageAge);
// 
// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 26
// console.log(x, y);
// 
// // More operators
// x *= 2; // 52
// console.log(x);
// x += 10; // 62
// console.log(x);
// x++; // 63
// console.log(x);


/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// var johnWeight, markWeight, johnHeight, markHeight;
// johnWeight = 160;
// markWeight = 195;
// johnHeight = 70;
// markHeight = 73;
// 
// var johnBmi = johnWeight / (johnHeight ^ 2);
// var markBmi = markWeight / (markHeight ^ 2);
// console.log(johnBmi, markBmi);
// 
// var isMarkBmiHigher = markBmi > johnBmi;
// 
// console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBmiHigher);


/*****************************
  If / else statements
*/

// var firstName = 'John';
// var civilStatus = 'single';
// 
// if (civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon');
// }
// 
// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon');
// }
// 
// var johnWeight, markWeight, johnHeight, markHeight;
// johnWeight = 160;
// markWeight = 195;
// johnHeight = 70;
// markHeight = 73;
// 
// var johnBmi = johnWeight / (johnHeight ^ 2);
// var markBmi = markWeight / (markHeight ^ 2);
// console.log(johnBmi, markBmi);
// 
// if (markBmi > johnBmi) {
//   console.log('Mark\'s BMI is higher than John\'s');
// } else {
//   console.log('John\'s BMI is higher than Mark\'s');
// }

// var isMarkBmiHigher = markBmi > johnBmi;
// console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBmiHigher);


/*****************************
  Boolean logic
*/

// var firstName = 'John';
// var age = 20;
// 
// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) { // Between 13 and 20
//   console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young man');
// } else {
//   console.log(firstName + ' is a man');
// }


/*****************************
  The ternary operator and switch statements
*/

// Ternary operator
// var firstName = 'John';
// var age = 22;
// 
// age >= 18 ? console.log('drinks beer') : console.log('drinks juice');
// 
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);
// 
// // Switch statement
// var job = 'instructor';
// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log(firstName + ' teaches kids how to code');
//     break;
//   case 'driver':
//     console.log(firstName + ' drives an uber is Lisbon');
//     break;
//   case 'designer':
//     console.log(firstName + ' designs beautiful websites');
//     break;
//   default:
//     console.log(firstName + ' does something else');
// }
//
// var firstName = 'John';
// var age = 25;
// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy.');
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenager');
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a young man');
//     break;
//   default: 
//     console.log(firstName + ' is a man');
// }


/*****************************
  Truthy and falsy values and equality operators
*/

// falsy values: undefined, null, 0 '', NaN 
// truthy values: NOT falsy falsy values 

// var height;
// height = 23;
// 
// if (height || height === 0) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has NOT been defined');
// }
// 
// // Equality operators
// if (height = '23') {
//   console.log('The == operator does type coercion!');
// }


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var johnScore, mikeScore
// 
// johnScore = (89 + 120 + 103) / 3;
// mikeScore = (116 + 94 + 123) / 3;
// console.log(johnScore, mikeScore)
// 
// if (johnScore > mikeScore) {
//   console.log('John\s team scored more points than Mike\s team on average, with ' + johnScore + ' points per game vs. ' + mikeScore + '.');
// } else if (mikeScore > johnScore) {
//   console.log('Mike\s team scored more points than John\s team on average, with ' + mikeScore + ' points per game vs. ' + johnScore + '.');
// } else {
//   console.log('There is a draw.');
// }
// 
// var maryScore = (97 + 134 + 105) / 3;
// switch (true) {
//   case johnScore > mikeScore && johnScore > maryScore:
//     console.log('John\s team scored the most points with ' + johnScore + ' points.');
//     break;
//   case mikeScore > johnScore && mikeScore > maryScore:
//     console.log('Mike\s team scored the most points with ' + mikeScore + ' points.');
//     break;
//   case maryScore > johnScore && maryScore > mikeScore:
//     console.log('Mary\s team scored the most points with ' + maryScore + ' points.');
//     break;
//   default: 
//     console.log('There is a draw.');
// }


/*****************************
  Functions
*/

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }
// 
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);
// 
// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(firstName + ' is already retired.');
//   }
// }
// 
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');


/*****************************
  Function statements and expressions
*/

// //Function declaration
// function whatDoYouDo(job, firstName) {
// 
// }
//
// // Function expression
// var whatDoYouDo = function(job, firstName) {
//   switch(job) {
//     case 'teacher':
//       return firstName + ' teaches kids how to code';
//     case 'driver':
//       return firstName + ' drives people around Lisbon';
//     case 'designer':
//       return firstName + ' designs beautiful websites';
//     default:
//       return firstName + ' does something else';
//   }
// }
// 
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));


/*****************************
  Arrays
*/

// // Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
// 
// console.log(names);
// console.log(names.length);
// 
// // Mutated array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);
// 
// // Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];
// 
// john.push('blue');
// john.unshift('Mr.');
// console.log(john);
// 
// john.pop();
// john.pop();
// john.shift();
// console.log(john);
// 
// console.log(john.indexOf(1990));
// 
// var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer.' : 'John IS a designer.';
// console.log(isDesigner);

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// var tipTotal = [];
// var finalTotal = [];
// var dinners = [124, 48, 268];
// var dinner1 = 124;
// var dinner2 = 48;
// var dinner3 = 268;
// var tip;
// 
// var calculateTip = function(price) {
//   if (price < 50) {
//     tip = price * 0.2;
//   } else if (price >= 50 && price < 200) {
//     tip = price * 0.15;
//   } else {
//     tip = price * .1;
//   }
//   tipTotal.push(tip);
//   finalTotal.push(price + tip);
// }
// 
// // dinners.forEach(function(price) {
// //   calculateTip(price);
// // })
// 
// calculateTip(dinner1);
// calculateTip(dinner2);
// calculateTip(dinner3);
// 
// console.log(tipTotal);
// console.log(finalTotal);
// 


/*****************************
* Objects and properties
*/

// object literal
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: '1990',
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// };
// 
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);
// 
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
// 
// // new object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);


/*****************************
* Objects and methods
*/

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: '1990',
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function(birthYear) {
//     this.age = 2018 - this.birthYear;
//   }
// };
// 
// john.calcAge();
// console.log(john)


/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// var john = {
//   fullName: 'John Smith',
//   height: 1.95,
//   weight: 92,
//   calcBMI: function(height, weight) {
//     this.bmi = this.weight / (this.height * this.height);
//   }
// }
// 
// var mark = {
//   fullName: 'Mark Jones',
//   height: 1.69,
//   weight: 78,
//   calcBMI: function() {
//     this.bmi = this.weight / (this.height * this.height);
//   }
// }
// 
// john.calcBMI();
// mark.calcBMI();
// 
// console.log(john);
// console.log(mark);
// 
// if (john.bmi > mark.bmi) {
//   console.log(john.fullName + ' has the highest BMI with ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//   console.log(mark.fullName + ' has the highest BMI with ' + mark.bmi);
// } else {
//   console.log('The two contestants are equal');
// }


/*****************************
* Loops and iteration
*/

// // for loop
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!
// 
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }
// 
// // while loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// // continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// 
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }
// 
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }
// 
// // looping backwards
// for (i = john.length -1; i >= 0; i--) {
//   console.log)john[i]);
// }

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTip: function() {
    var tips = [];
    this.bills.forEach(function(bill) {
      if (bill < 50) {
        tips.push(bill * 0.2);
      } else if (bill >= 50 && bill < 200) {
        tips.push(bill * 0.15);
      } else {
        tips.push(bill * 0.1);
      }
    })
    this.tips = tips;
    // console.log(tips);
    // console.log(this.tips);
  },
  calcFinal: function() {
    this.calcTip();
    var totals = [];
    for (i = 0; i < this.bills.length; i++) {
      totals.push(this.bills[i] + this.tips[i]);
    }
    this.finalBill = totals;
  }
}
john.calcFinal();

var mark = {
  fullName: 'Mark Jones',
  bills: [77, 5, 110, 45],
  calcTip: function() {
    var tips = [];
    this.bills.forEach(function(bill) {
      if (bill < 100) {
        tips.push(bill * 0.2);
      } else if (bill >= 100 && bill < 300) {
        tips.push(bill * 0.1);
      } else {
        tips.push(bill * 0.25);
      }
    })
    this.tips = tips;
  },
  calcFinal: function() {
    this.calcTip();
    var totals = [];
    for (i = 0; i < this.bills.length; i++) {
      totals.push(this.bills[i] + this.tips[i]);
    }
    this.finalBill = totals;
  }
}
mark.calcFinal();

var avgTips = function(tips) {
  var total = 0;
  tips.forEach(function(tip) {
    total += tip;
  })
  return total / tips.length;
}

john.avgTip = avgTips(john.tips);
mark.avgTip = avgTips(mark.tips);
console.log(john, mark);

if (john.avgTip > mark.avgTip) {
  console.log(john.fullName + '\'s tip average is higher than ' + mark.fullName + '\'');
} else if (mark.avgTip > john.avgTip) {
  console.log(mark.fullName + '\'s tip average is higher than ' + john.fullName + '\'s');
} else {
  console.log('We have a tie!');
}
