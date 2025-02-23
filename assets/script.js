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
