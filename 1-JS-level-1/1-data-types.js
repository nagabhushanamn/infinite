

/**
 * 
 * data types
 * -------------
 * 
 * 1. simple / primitives  ==> values
 * 
 *      a. undefined
 *      b. string
 *      c. number
 *      d. boolean
 * 
 * 2. complex / reference  ==> objects
 * 
 */
//-----------------------------------------------------
// 1. simple / primitives  ==> values
//-----------------------------------------------------

//-----------------------------------------------------
// a. undefined
//-----------------------------------------------------

var v;

//-----------------------------------------------------
// b. string
//-----------------------------------------------------

var myName = "Nag"
var myCompanay = 'ThinkWright a.k.a Proximo'
var trainer = "Nag";
var dynamicString = "The trainer is " + trainer
// or
// - string interpolation -  ( ES6 )
var dynamicStringNew = `The trainer is ${trainer}`
var arithString = `the sum of 1 & 2 is ${1 + 2}`
var multiLineString = `

    <div>
        <ul>
            <li>biryani</li>
        </ul>
    </div>


`

//-----------------------------------------------------
// c. number
//-----------------------------------------------------

var count = 12;
var cost = 12.12


//-----------------------------------------------------
// c. boolean
//-----------------------------------------------------


var isFound = true;

/**
 *  imp note:
 *
 *  falsy values
 *
 *  => false,0,"",undefined,null,NAN
 *
 * Ref : https://dorey.github.io/JavaScript-Equality-Table/
 *
 */


/**
 * 
 *  javascript Naming conventions
 *  ------------------------------
 *  keyword                     ==> lower-case   
 *  variables / function/method ==> camel-case  i.e _____A_____B______
 *  constant variables          ==> upper-case
 *  Type ( class )              ==> pascal-case i.e A____B_____
 *     
 * 
 */


//-----------------------------------------------------
// 1. complex / reference  ==> object
//-----------------------------------------------------

// class / constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.sayName = function () {
    //     console.log("im " + this.name);
    // }
    // this.sayAge = function () {
    //     console.log("im " + this.age + " old")
    // }
}
Person.prototype.sayName = function () {
    console.log("im " + this.name);
}
Person.prototype.sayAge = function () {
    console.log("im " + this.age + " old")
}

var p1 = new Person("Nag", 36)
var p2 = new Person("Ria", 4)