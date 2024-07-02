var links = document.getElementsByTagName;
for(i=0;i<links.length;i++){
    console.log(i);
    if(i===3){
        break
    }
} 
console.log("looping done");
// functions
function getAverage(a,b){
    var average= (a+b)/2; //local variable
    console.log(average);
    return average
}
myResult = getAverage(7,10); //global variable

//numbers
var a =11.5; 
var b = 14;
var c ="12.5";

console.log (Math.min(a,b));
console.log (Math.max(a,b));
console.log (Math.round(a));
console.log(Math.ceil(a));
console.log(Math.floor(a));

//isNaN function 
if(isNaN(c)){
    console.log("that isnt a number");
}
else{
    console.log(a+c);
}

//strings
var myString =" I am a string";
console.log(myString.length);
console.log(myString.indexOf("string"));
console.log(myString.indexOf("am"));

if (myString.indexOf("ninja")===-1){
    console.log("the word ninja is not in the string");
}

var string1 = "abc";
var string2 = "def";
console.log(string1===string2);
console.log(string1>string2);
console.log(string1+string2);

//arrays
var myArray = [];
myArray[0]=25;
myArray[1]="hello";
myArray[2]=true;
myArray[3]= {name:"John"};
console.log(myArray);
console.log(myArray.length);
myArray[2]=false;

var myArray2 = [10,20,"hi",false];
console.log(myArray2);
myArray2.push(5); //adds an element to the end of the array
console.log(myArray2);
myArray2.sort();
console.log(myArray2);

myArray2.pop();  //removes the last element of the array
myArray2.reverse();
myArray2.length; // gives size of the array
var myArray4 = myArray2.concat (myArray); //creates a new array by joining existing arrays 
myArray2.at(1); // gives the array element a position 1
myArray2.unshift; //adds a new element to an array (at the beginning), and "unshifts" older elements
myArray2.shift;  //removes the first array element and "shifts" all other elements to a lower index.
myArray2.splice;  //add new items to an array
myArray2.slice;  //extracts a part of an array and returns a new array
myArray2.join; //converts the array to a string with a specific separator
myArray2.indexOf;  //
myArray2,toString; //converts the array to a string


//objects
var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "John";
myCar.drive = function(){
    console.log("now driving");
};
myCar.drive();

var myCar2 = {
    maxSpeed: 70,
    driver: "John",
    drive: function(){
        console.log("now driving again");
    }
};
console.log(myCar2.maxSpeed);
myCar2.drive();

var mycar3 = {
    maxSpeed: 70,
    driver: "Shaun",
    logDriver: function(){
        console.log ("the driver's name is " + this.driver);
    }
};
mycar3.logDriver();

//constructor functions
// Constructor Function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  
  // Display age
  console.log("My father is " + myFather.age + ".");





//date objects
var myDate = new Date();
console.log(myDate);

var pastdate = new Date(1545, 11, 2, 10, 30, 15);
var futuredate = new Date (1623, 3,12, 10, 30, 15);
console.log(pastdate);
console.log(futuredate);

var birthday = new Date(1985, 0, 15, 11, 15, 25);

console.log(birthday);

//get month of the date (0-11)
console.log(birthday.getMonth());

//get full year (YYYY)
console.log(birthday.getFullYear());

//get date of the month (1-31)
console.log (birthday.getDate());

//get day of the week (0-6)
console.log(birthday.getDay());

//get hour of the date (0-23)
console.log(birthday.getHours());   

//get minute of the date (0-59)
console.log(birthday.getMinutes()); 