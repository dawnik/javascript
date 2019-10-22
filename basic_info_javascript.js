// data types and variables
//undefined, null, boolean, string, symbol, number, object
var myName = "Don"
myName = 9 //change no problem, for all in the problem

let ourName = "freeCode" // only scope

const notChange = 3.14 // dont never change because error


//Storing Values with Assignment Operator
var a;
var b = 2;
console.log(a)
a = 7;

b = a;

console.log(a)

//Initializing Variables / Assignment Operator
var a = 9;

//Unitialized variables
var a = 5;
var c = "I am a";

a = a + 1
c = c + " Don!";
console.log(a)
console.log(c)

//Case sensitivity in variables
//aaa != aAa

//Incrementing numbers
var myVarIncrementig = 10;
myVarIncrementig++;
console.log(myVarIncrementig)

//Decrementing numbers
var myVarDecrementig = 10;
myVarDecrementig--;
console.log(myVarDecrementig)

//Decimanl number
var myDecimal = 5.7;
var productDecimal = 3.5 * 2.0
console.log(productDecimal)

//remainder
var myRemaider = 11 % 3;
console.log(myRemaider)

//Compound assignment with augmented addition, subtraction, multiplication, division
a = 3;
b = a + 20;
console.log(b)

//Escaping literal quotes in string
var myStr = "I am a\"double quoted\"String inside\"double quotes\""
console.log(myStr)

//Escape Sequences in string
/**
code output
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
**/
myStr = "czesc\felo"
console.log(myStr)

//Concatenating String with Plus operator
myStr = "first ";
myStr += "second ";
myStr += "This is start. " + "This is the end."
var secondMyString = myStr + " Finish."
console.log(myStr)
console.log(secondMyString)

//Find length string
var nameLenght = 0;
var name = "Kowalski";

nameLenght = name.length;
console.log(nameLenght)

//bracket notation to find first character in string
var firstLetter = name[0];
console.log(firstLetter)

//String Immutability
name[0] = "Y" //not work
name = "Yowalski"
console.log(name);

//bracket notation to find last character in string
var lastLetter = name[name.length - 1];
console.log(lastLetter)

//word blanks
function worldBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    return result;
}
console.log(worldBlanks("dog", "big", "ran", "quickly"));

//Strore Multiple values with arrays
var ourArray = ["John", 23];
myArray = ["Quincy", 34];

//Nested arrays]
var ourArray = [["Bull", 54], ["Johns", 100]];

//Access Array data with index
var ourArray = [50,60,70];
console.log(ourArray[1]);

//Modify array data with index
ourArray[1] = 22;
console.log(ourArray)

//access multi-dimensional arrays with indexs
myArray = [[1,2,3], [4,5,6], [7,8,99999]];
console.log(myArray[2][2]) //get 99999

//Manipulate Arrays with push()
ourArray = ["Saimon", "Zeska", "90"];
ourArray.push(["happy", "joy"]);
console.log(ourArray)

//Manilate arrays with pop()
myArray = [1,2,3];
myArrayRemove = myArray.pop()
console.log(myArrayRemove)
console.log(myArray)

//Manipulate Arrays with Shift()
myArrayShift = myArray.shift()
console.log(myArrayShift)
console.log(myArray)

//manipulate arrays with unshift()
myArrayUnShift = myArray.unshift(["paul",50])
console.log(myArrayUnShift)
console.log(myArray)

//Shopping list
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 2]]
