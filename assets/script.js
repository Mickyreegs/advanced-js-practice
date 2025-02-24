/*Vanilla JS Function
function addTwoNumbers(a, b) {
    //Code Block
    return a + b
}
let sum = addTwoNumbers(3, 5);
console.log(sum);
*/

//Usually, ES6 arrow functions are defined as constants. This ensures that they can't be
//overwritten or misused later in the code and also that they must be defined before being called.

const addTwoNumbers = (a, b) => {
    //Code Block
    return a + b
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

//Single Line Arrow Function With Parameters
/*
For simple functions,
you can just put what you want to return right after the "fat arrow" on the same line. But if
your function has more complex logic, you'll need to set open a set of curly braces and then use
the return statement like a normal function.
*/
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(4, 6)
console.log(sum2)

//Implicit Returns
/*
For even simpler functions, such as those that only take a single parameter,
you can leave off the first set of parentheses, too.
Since there’s only one parameter, it doesn’t need the parentheses around it,
but if you have more than one, you just wrap them with parentheses.
*/
const saySomething = message => console.log(message);
saySomething('Hello there!');

/*
If you’ve got
a function that takes no parameters at all, such as this one called sayHello,
you must use an empty set of parentheses to tell JavaScript you’re declaring a function.
*/
const sayHello = () => console.log('Hello');
sayHello();

//Returning Multiple Lines
/*
One final note about arrow functions. Whenever an
arrow function needs to return multiple lines of code, such as this one, which returns a
multi-line string, the parentheses mentioned in the implicit return function above are
required. This goes for using an explicit return statement inside a set of curly braces, too.
If you need to return multiple lines of code, you must wrap whatever comes
after the return keyword in parentheses. 
*/
const returnMultipleLines = () => (
    `<p>
    This is a multiline string
    </p>`
)
console.log(returnMultipleLines());

//-----------Arrow Function Challenge
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths', 'english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
      if(subject in itm.results) {
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);

//-----------The Spread Operator:
/*
The spread operator is used commonly in modern  JavaScript frameworks, libraries and APIs. You
can think of it as a safe, modern way to  duplicate part or all an array or object.
*/
// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log('Second array:', arr2);
console.log('First array:', arr1);
/*
In the above, there is a problem: if you log the first array to the console, you'll see that when we
pushed the fourth element into the 2nd array,  it was also pushed into the first array.
This is because the second array is not actually a copy of the first,
it's a new variable which points to the same object as the other variable. Because of this,
anything we do to the second array will be done to the first and vice versa.
*/

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log('Third array:', arr3);
console.log('Fourth array:', arr4);

/*
In the above, To make a copy of arr3, we create a new variable, array 4,
and then "spread" the first array into it, using this three dots syntax. This operator
“spreads” the values of the third array  into the fourth, giving you a simple way
to create an entirely new object. If you push a new element, like 7, into the fourth array,
you can see by logging both arrays to the console that the third remains untouched.
*/

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5};
console.log('First object:', obj1);
console.log('Second object:', obj2);
console.log('Third object:', obj3);

/*
In the above, To make a copy of the object, we can simply  “spread” object 1 into a new object, called object 2.
We can then add a new property to the  second object, and the first remains untouched.
Additionally, if you want to change one of the  values in the original object, you can do that
by simply overwriting it in the new object. In  this object 3, we're first spreading object 1, and
then overwriting b from 2 to 5. 
*/

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, 'x', 'y', 'z'];
console.log(arr5);


//-----------Spread Operator Challenge
//Uses the students variable above

let subjects = [...students[0].subjects];

const update = (item, val) => [...item, val];

let updatedSubjects = update(subjects, "Electronics");

console.log(updatedSubjects);
console.log(students[0]);



//-----------Rest Parameter Syntax
/*
Where the spread operator can break an array into  its individual elements, the rest parameter syntax
combines individual elements into an array. It can  also be used to represent the “rest” of the values
when destructuring an array or object
*/

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum1 = sumAll(1, 2, 3);
console.log('Sum:', sum1);

// Extra arguments are ignored
let sumNew = sumAll(1, 2, 3, 4, 5, 6);
console.log('Sum2:', sumNew);

/*
In the above, what if you wanted to sum an arbitrary number of parameters?
JavaScript will allow you to pass in as many  arguments as you want regardless of how many
are specified when you define the function, so I can simply pass 1, 2, 3, 4, 5, and 6,
and the last three will just be ignored. If I log  this to the console as sum2, the value is still 6,
which is obviously not what we want. This is  where the rest parameter syntax comes into play.
*/

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for(let i of rest) {
        sum += i
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6); 
console.log('Sum3:', sum3);

/*
In the above, I'll create a new arrow function called sumRest,  and this time it will take four parameters,
a, b, and c, and a new parameter called rest.  You'll see I'm using the three dots syntax here again,
but this time it's going to squash  any extra parameters passed into the function
into a new parameter called rest, which will be  an array within the function.
This parameter can technically be called  anything you want, but I'm calling it rest here
to demonstrate that it signifies the rest of  the parameters. Let's finish the new function now.
We can sum the first three  variables easily enough.
Just let sum = a + b + c. Now I'll use a  for...of loop to iterate through the rest array
and add each additional number to the  existing sum. At the end I'll just return sum.
Now if I create a new variable called sum3, set  it equal to sum rest of the numbers 1 through 6,
and log it to the console, I get the expected output of 21.
*/

//-----------Rest Parameter Challenge:
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];

console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse();

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);

console.log(mixedLetters);

//-----------Destructuring:
/*
Destructuring gives us a faster way to take an array of items and turn those items into distinct, individual variables.
Instead of referencing each element of the  array by its index and declaring each variable individually,
we can use destructuring  to do it all on a single line of code.
*/

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

/*
In the above, we defined an array of variable
names, john, mary and joe. I'll set it equal to  ages, and through destructuring assignment,
ES6 automatically assigns the first value in the  array to the variable john, the second to the
variable mary, and the third to the variable  joe. Using ES6 destructuring assignment,
we were able to reduce the three variable  assignments above to just a single line of code.
*/

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese',
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);


// Using rest parameter syntax
let fruits = ['apple',  'orange', 'banana', 'peach', 'cherry'];
let[favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak',
};
let{brian, anna, ...rest} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);


//-----------Destructuring Challenge:
let studenti = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {
    for(let itm of arr) {
        if(itm.name == student) {
          return itm.subjects;
        }
    }
};

let [first, second, ...remainder] = makeList(studenti, 'John');
console.log(first, second, remainder);


//-----------map() filter() reduce():
/*//All three of these methods are array methods,  which means they operate on an array of elements.
The array can be an array of anything: strings,  numbers, objects containing properties and values,
or even other arrays, but it must be an array in  order for map, filter or reduce to work on it.
Map, filter and reduce are all designed to be  able to accomplish the same things that can be
accomplished with a for loop or a while loop,  using less code. They are iterator methods,
which basically means that they provide a nice,  elegant way to iterate through an array of items
and perform some action on each item.
*/

/*In the context of these three methods,
a callback function is simply a function  that we pass as a parameter to the method,
which will be called on every element  of the array the method is operating on.
e.g. map(num => num * 2)
*/

/*
The map() method is called  on an array, and takes a single parameter,
a callback function, which is a function you  want to execute on every element in the array.
The map() method then iterates over the array,  calls this callback function on every element,
and returns a new array containing  all the results of that process.
*/ 

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2)
}
console.log(results);

// Using map()
const multByTwo = function (num) {
    return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()
const simplified = nums.map(function (num) {return num * 2});
console.log(simplified);


// Simplfied w/ map() + arrow function.  This is the typical way to use the map method.
const arrow = nums.map(num => num * 2)
console.log(arrow);


// With objects:
const studentis = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

  const studentsWithIds = studentis.map(student => [student.name, student.id]);
  console.log(studentsWithIds);

  const studentsWithAges = studentis.map(student => ({ ...student, age: student.id === 1 ? 25 : student.id === 2 ? 22 : student.id === 3 ? 27 : null }));
  console.log(studentsWithAges);


//map challenge
let students1 = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// single line, used different variable names so as not to clash with those below.
let [John, ...Rest] = students1.map(itm => [itm.name, itm.results]);
console.log(John);
console.log(Rest);


/*
filter() iterates over an array of items, and filters the  array to only a specified set of results.
If you had an array of numbers, you could use filter()  to filter the array down to only the even numbers.
If you had an array of names, you could filter  it to only those names that begin with a certain letter.
Basically, the filter method is for  filtering an array. Like the map method,
it does this by taking a callback function as a  parameter. Each item in the array will be passed
into the callback function, and if the callback  function returns true when given that element,
that element will be included in the results.  Otherwise, the element will be filtered out.
When the filter method is complete, the result  is a new array containing the filtered results.
*/

/*
Like the map method, the filter method uses a  callback function which we pass to the method,
and which will be executed on every element of  the array. The callback function must return a
test that will evaluate to either true or false.  If the array item being tested passes the test
in the callback function, it will be included  in the results returned by the filter method.
Otherwise, it'll be filtered out.
*/

// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

  const oldEnough = people.filter(person => person.age >= 21);
  console.log(oldEnough);

  const paul = people.filter(p => p.name === 'Paul');
  console.log(paul);
  
  
  // Complex Filtering
  const students2 = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];



/*
reduce() reduces all the elements of an array
into a single output value, according to a  callback function you provide. The simplest usage
of this method might be if you wanted to reduce an  array of numbers to their total sum. In this case,
you would call the reduce() method on the array  of numbers, and the callback function you pass
as its parameter would serve the purpose of adding  each number to the last and keeping track of the total.
*/


