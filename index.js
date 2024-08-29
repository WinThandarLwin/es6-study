// Map Function Sample
let arr1 = [1, 2, 3, 4];
let result1 = arr1.map(function (n) {
  return n+1;
});

console.log(result1); // [ 2, 3, 4, 5 ]


// Filter Function Sample
let result2 = arr1.filter(function (n) {
  return n % 2;
});

console.log(result2); // [ 1, 3 ]

let users = [
  { name: 'Bob', gender: 'male' },
  { name: 'Alice', gender: 'female' },
  { name: 'Tom', gender: 'male' }
];

let result3 = users.filter(function(user) {
  return user.gender == 'male';
});

console.log(result3); // [ { name: 'Bob', gender: 'male' }, { name: 'Tom', gender: 'male' } ]


// reduce Function Sample
let result4 = arr1.reduce(function(a, b) {
  return a + b;
});

console.log(result4); // 10


// Nameless(Anonymous)Function → Arrow Function
let add = function(a, b) {
 return a + b;
};

// Arrow Function Sample 1
let add1 = (a, b) => {
  return a + b;
};

// Arrow Function Sample 2
let add2 = (a, b) => a + b;

console.log(add2(7, 2)); // 9


// Arrow Function Sample 3
let result11 = arr1.map(n => n + 2);
console.log(result11); // [ 3, 4, 5, 6 ]

console.log([1, 2, 3, 4].map(n => n + 10)); // [ 11, 12, 13, 14 ]
console.log([1, 2, 3, 4].filter(n => n % 2 == 0)); // [ 2, 4 ]
console.log([1, 2, 3, 4].reduce((a,b) => a + b)); // 10


// Rest Paramter Sample
function restTest(a, b, ...c) {
  return c;
}

console.log(restTest(1, 2, 3, 4, 5)); // [ 3, 4, 5 ]


// Spread Operator Sample
let alphas = ['a', 'b', 'c'];
let nums = [1, 2, 3];
console.log([alphas, nums]); // [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
console.log([...alphas, ...nums]); // [ 'a', 'b', 'c', 1, 2, 3 ]

// Destructure Sample 1
function showValueNormal(user) {
  return user.name + ' is ' + user.age + ' years old.';
}
// ↓↓↓↓↓　Destructure
function showValue({name, age}) {
  return name + ' is ' + age + ' year old.';
}

let user = { name: 'Ma Ma', age : 11};
console.log(showValue(user)); // Ma Ma is 11 year old.

// Destructure Sample 2
let fruits = [ 'Apple', 'Orange' ];
let [ a, o ] = fruits;
console.log(a); // Apple


// String Interpolation Sample 
// Notice: user Backtick, not Single/Double Quote
function showValue1({name, age}) {
  return `${name} is ${age} year old.`;// Ma Ma is 11 year old.
}

let user1 = { name: 'Ma Ma', age : 11};
console.log(showValue1(user1)); // Ma Ma is 11 year old.


