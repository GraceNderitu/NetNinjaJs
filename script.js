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