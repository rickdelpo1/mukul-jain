---
slug: "/blog/Javascript-under-the-hood"
date: "2017-05-23"
title: "Javascript under the hood"
preview: "Learn how Javascript engine works with visualization."
---

## What is JavaScript

Let's talk about one of the most famous languages today, JavaScript, one of three basic component (HTML, CSS & JS) of the web. Wikipedia says ( For understanding purpose I will breakdown definition in few parts)

> JavaScript is prototype-based with first-class functions

To understand this, first understand what is Prototypal inheritance, In the prototypal inheritance form, objects inherit directly from other objects. In JS every object has a secret link to its parent object, thus whenever an object is asked for any property, it looks for it, if it does not have its parent will be asked then its parent, process will be continued till property is find or it will give an error.

For example

```js
function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.area = function () {
  var radius = this.radius;
  return Math.PI * radius * radius;
};
Circle.prototype.circumference = function () {
  return 2 * Math.PI * this.radius;
};
var circle = new Circle(5);
var circle2 = new Circle(10);
circle.area(); // 78.53981633974483
circle.circumference(); //
```

Here radius is a Number which also inherits properties from `Number` thats why it outputs 5 on circle.radius.toString()

By first-class functions, it meant that function can be stored in variables and then can be passed around.

It also supports High Order Functions, it means function can take other function as input and return a function as output.

> Making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.

Multi-paradigm means, you can program in with various coding styles like OOP or Functional or mix of both.

> It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.

JS have API for text, arrays etc, this mean JS can count elements in an array or can pop something out from it but it can't perform an API call itself, yes you read it right JS Engine doesn't do it, browser does.

## How JavaScript Works

Let's see how things work under the hood.

Javascript is single threaded, it means it can execute one thing at a time, check the figure given below, whenever there some operation like console.log or a + b it pushes it into the stack operates it and pop it out.

![JS Engine top view](./engine-view.png)

If it is function call then it puts the function in the stack operates it, pops everything out, like shown below

```js
// taking this code as example
var add = function (a, b) {
  return a + b;
};
var x = 2;
var y = 7;
var z = sum(x, y);
console.log(z);
```

![JS engine code processing](./steps.png)

Then how it is non-blocking? why not things like setTimeout or asynchronous call complete first blocking other code?

Whenever there is something like asynchronous call or timeout function, it comes stack then it passes to the browser which can do it multiple things together, after finishing the tasks browser puts callback queue, event loop keep looking at the stack and callback queue, when it finds the stack empty it puts first from queue to stack.

Let's see a working example, for simplicity we use will `console.log` and time setTimeout only.

```js
setTimeout(function () {
  console.log("a");
}, 1500);
console.log("d");
setTimeout(function () {
  console.log("b");
}, 500);
setTimeout(function () {
  console.log("c");
}, 1000);
```

![JS Engine working](./demo.gif)

Thanks to Philip Roberts for wonderful explanation on working of JS.
