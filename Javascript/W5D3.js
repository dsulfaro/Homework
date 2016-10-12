"use strict"

// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }
function madLibs(noun, adj, verb){
  console.log(`We shall ${verb} the ${adj} ${noun}`)
}

function isSubstring(search, sub){

  for (let i = 0; i < search.length; ++i){
    for (let j = i + 1; j < search.length; ++j){
      if (search.substring(i, j) === sub) {
        return true
      }
    }
  }
  return false
}

function fizzBuzz(array){
  let res = [];
  for (let i = 0; i < array.length; ++i){
    if ((array[i] % 3 === 0 || array[i] % 5 === 0) && array[i] % 15 != 0){
         res.push(array[i]);
    }
  }
  return res;
}

function isPrime(number){
  for (let i = 2; i < number; ++i){
    if (number % i === 0){
      return false
    }
  }
  return true
}

function firstNPrimes(n){
  let result = [];
  let i = 2;
  while (result.length != n){
    if (isPrime(i)){
      result.push(i)
    }
    i++;
  }
  return result;
}

function sumOfPrimes(n){
  let primes = firstNPrimes(n);
  let sum = 0;
  for (let i = 0; i < primes.length; i++){
    sum += primes[i];
  }
  return sum;
}

function allOrNothing(){
  let mod = arguments[0];
  for (let i = 1; i < arguments.length; i++){
    if (arguments[i] % mod != 0){
      return false;
    }
  }
  return true;
}

function printCallback(arr){
  let result = "";
  for(let i = 0; i < arr.length; ++i){
    result += arr[i] + " ";
  }
  return result;
}

function titleize(arr, callback){
  return callback(arr);
}

function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function(){
  console.log(`${this.name} the elephant goes "phrRRRRRRRRRRR"`);
}

Elephant.prototype.grow = function(){
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick){
  this.tricks.push(trick);
}

Elephant.prototype.play = function(){
  console.log(`${this.name} is ${this.tricks[Math.floor(Math.random() * this.tricks.length)]}`);
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

function paradeHelper(elephant){
  console.log(`${elephant.name} is trotting by`);
}

function forEach(arr, callback){
  for (let i = 0; i < arr.length; ++i){
    callback(arr[i]);
  }
}

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  }
}

let b = dinerBreakfast();
b("poop");
b("the end of all suffering")
