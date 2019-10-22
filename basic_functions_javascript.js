//Write reusable code with functions
function myReusableFunction(){
    console.log("Hello, World");
}
myReusableFunction();
myReusableFunction();
myReusableFunction();

//passing values to functions with arguments
function myFunctionWithArgs(a,b){
    console.log(a - b);
}
myFunctionWithArgs(10,5);

//Global Scope and functions
var myGlobalVar = 10
function fu1(){
    oopsGlobal = 5; //without var then scope but not exactly because fu2 see it
}
function fu2(){
    var outPutFu2 = "";
    if (typeof myGlobalVar != "undefined"){
        outPutFu2 += "myGlobalVar: " + myGlobalVar;
    }
    if (typeof oopsGlobal != "undefined"){
        outPutFu2 += " oopsGlobal: " + oopsGlobal;
    }
    console.log(outPutFu2)
}
fu1();
fu2();

//local Scope and functions
function myLocalScope(){
    var myVarLocal = 3; //var is scope
    console.log(myVarLocal);
}
myLocalScope();
// console.log(myVarLocal) myVarLocal is not defined

//Global vs. Local Scope in functions
var wardobe = "T-Shiert";
function fu3(){
    var wardobe = "Sweater"
    return wardobe;
}
console.log(fu3())
console.log(wardobe)

//return a value from a function with return
function minusSeven(number){
    return number -7;
}
console.log(minusSeven(10));

//Understanding Undefined value returned from function
var sum = 0;
function addThree(){
    sum +=3; //nothing return
}
console.log(addThree) // [Function: addThree]

//Assigment with a returned Value
var changed = 0;
function fuChange(number){
    return (number + 5) / 3;
}
changed = fuChange(10);
console.log(changed)

//Stand in Line
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 7))
console.log("Finish: " + JSON.stringify(testArr));

//other example
let obj = {name: "Don",
           last: "Domingo",
           age: 50,
           hungry: true,
           bestscore: 200};
let log = console.log;
let str;

str = JSON.stringify(obj);
log('1', str);
str = JSON.stringify(obj, ['age', 'angry', 'last']);
log("2", str);

function replace(key, value){
    if(typeof value === 'string'){
//        return 'STRING';
        return undefined;
    }else{
        return value;
    }
}
str = JSON.stringify(obj, replace);
log("3", str)
str = JSON.stringify(obj, null, '\tspace\t');
log("4", str)

//use conditional logic with if statement
function myTrueOrFalse(isItTrue){
    if (isItTrue){
        return "Yes, it's true";
    }
    return "No, it's false";
}
log(myTrueOrFalse(true));
var isItTrue = 1 // when 0 > False, when 1 > True
log(myTrueOrFalse(isItTrue));

//Comparison with the strict equality operator
function fu4(value){
    if(value === 3){    // === not equal, == equal
        return "Equal";
    }
    return "Not Equal";
}
log(fu4('3'))

/**
    &&   and
    ||   or
**/
//Switch statements
function caseInSwitch(value){
    var answer = "";
    switch(value){
        case 1:
            answer = "alpha";
            break
        case 2:
            answer = "beta";
            break
        default:
            answer = "default";
            break
    }
    return answer
}
log(caseInSwitch(3)) // 1 = alpha, 2 beta, 3 = " " or default if tern ON

//Multi in=dentical option in Switch statements
function multicaseInSwitch(value){
    var answer = "";
    switch(value){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break
        case 4:
        case 5:
        case 6:
            answer = "High";
            break
        default:
            answer = "default";
            break
    }
    return answer
}
log(multicaseInSwitch(3)) // 1 = alpha, 2 beta, 3 = " " or default if tern ON

//Replacing If Else chains witch Switc
function chainToSwitch(value){
    var answer = "";

    switch (value){
        case "bob":
            answer = "Marley";
            break
        case 2:
            answer = "This is two"
            break
    }//itd
    return answer
}
log(chainToSwitch("bob"))
log(chainToSwitch(2))

//Accessing object properties with dot notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    "hot dog": "food",
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
var hotDogValue = testObj['hot dog'];
log(hatValue)
log(shirtValue)
log(hotDogValue)

//Add new properties to an object
var myDog ={
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friend": ["Buks", "Rex"],
}
myDog['bark'] = "woof";
log(myDog);

//Delete properties from an Object
var secondDog ={
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friend": ["Buks", "Rex"],
}
delete secondDog.legs;
log(secondDog);

//Using objects for lookups
function phoneticLookup(value){
    var result = "";
    var lookup = {
    "alpha": "Adamas",
    "delta": "Don"
    };
    result = lookup[value];
    return result;
}
log(phoneticLookup("delta"))

//Testing Objects for Properties
var threeObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProperties){
    if (threeObj.hasOwnProperty(checkProperties)){
        return threeObj[checkProperties];
    } else {
        return "Not Found"
    }
}
log(checkObj("gift"))
log(checkObj("hello"))

//Manipulating complex objects
