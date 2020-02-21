## Immutability is the practice of setting values once, at the moment of their creation, and never changing them. How can immutability help write safer code?

According to wiktionary, mutability means "the quality or state of being mutable(inclined to change)".
In programming, mutability has related meaning which mean that some value that can be changed. And immutability means that once value is stored, it can't be changed.

Suppose, I have a program that takes a name. Then it print the full name. Now it changes the existing name value to only show first name. Then I want to print the full name again.

```js
let fullName = "Prateek Arora";
let firstName = fullName.split(" ")[0];
```

What if second line of code changes the existing value stored in fullName variable. Next time we try to access the fullName it would give us the mutated value and we will only get the first name. Thankfully, strings and it's methods are immutable in JavaScript.

In JavaScript, suppose we create a function which takes an array as a parameter and push one value in it and return it back.

```js
function mutateArray(array) {
  array.push("value");
  return arr;
}
const arr = [1, 2, 3, 4];
let returnedArr = mutateArray(arr);
console.log(arr === returnedArr);
```

In above code it would print out true since array are mutables in JavaScript. When we mutates an existing array or object instead of making changes in new copy of existing array or object. We can detect whether changes were made in previous value. Just as in above case arr===returnedArr would give us true even some changes were made. It becomes hard or impossible to detect any changes done in that object or array. In React, our view depends on state. If React can't detect changes in state due to mutating an exisiting state instead of creating a new copy and saving it in state.

Immutability helps us write predictable code. One line of code can only affect next line of code. So it help us to write safer code.
