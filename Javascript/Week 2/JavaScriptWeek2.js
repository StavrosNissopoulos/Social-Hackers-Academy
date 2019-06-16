console.log("Hello World");
console.log("Γειά σου Κόσμε");
console.log("Hei Verden")
console.log('I\'m awesome');
console.log("<-----3----->");
var x;
console.log("the value of my variable x will be: hours spent on a pc writing code");
console.log(x);
x = 30;
console.log("the value of my variable x will be: hours spent on a pc writing code");
console.log(x);
console.log("<-----4----->");
var y = "What is your name?";
console.log("the value of my variable y will be: the name of the user");
console.log(y);
console.log("the value of my variable y will be: the name of the user");
y= "Stavros";
console.log(y);
console.log("<-----5----->");
var z = 7.25;
console.log(z);
var a = Math.round(z);
console.log(a);
var b;
if(z<a){
    b = a;
}else{
    b=z;
}
if(a==z){
    console.log("Are they really equal?");
}
console.log(b);
console.log("<-----6----->");
let dailyCalories = [];
console.log("the value of my variable dailyCalories will be: the number of calories consumed within a day");
console.log(dailyCalories);
let favoriteAnimals = ["dog","cat","bear","snake","eagle"];
console.log("the value of my variable favoriteAnimals will be: all the animals you like,pets or not");
console.log(favoriteAnimals);
favoriteAnimals.push("baby pig");
console.log(favoriteAnimals);
console.log("<-----7----->");
let myString = "this is a test";
console.log(myString);
console.log(myString.length);
console.log("<-----8----->");
let foo0 = "Random text";
let foo1 = "Another random text";
let foo2 = 5;
let foo3 = 5.5;
let foo4 = true;
let foo5 = ["placeholder0","placeholder1","placeholder2"];
let foo6 = {attribute0:"atr0",attribute1:"atr1",attribute2:"atr2"};
console.log('The value of my variable foo0 is: ' + foo0);
console.log('The value of my variable foo1 is: ' + foo1);
console.log('The value of my variable foo2 is: ' + foo2);
console.log('The value of my variable foo3 is: ' + foo3);
console.log('The value of my variable foo4 is: ' + foo4);
console.log('The value of my variable foo5 is: ');
console.log(foo5);
console.log('The value of my variable foo6 is: ');
console.log(foo6);
console.log("I assume foo0 and foo1 are Strings,foo2 and foo3 are Numbers,foo4 is Boolean,foo5 is Array and foo6 is Object");
console.log('The actual data types of the variables are: ');
for(i=0;i<7;i++){
    console.log('The variable foo' + i + "is a variable of type: " + typeof(eval("foo" + i)) );
}
console.log('So it looks like w3 fooled me and arrays are objects :P');
var helperCounter = 0;
for(i=0;i<7;i++){
    for(j=helperCounter;j<7;j++){
        if(i != j && typeof(eval("foo" + i))==typeof(eval("foo" + j)) ){
            console.log("The variable: foo" + i + " and the variable: foo" + j + " are of the same type." + "The type is: " + 
            typeof(eval("foo" + i)) + ".");
        }else if(i != j && typeof(eval("foo" + i))!=typeof(eval("foo" + j)) ){
            console.log("The variable: foo" + i + " and the variable: foo" + j + " have different data type." + "foo" + i + " is: " + 
            typeof(eval("foo" + i)) + " and foo" + j + " is " + typeof(eval("foo" + j)) + ".");
        }
    }
    helperCounter++;
}
console.log("<-----9----->");
x = 7;
console.log(x);
x = x % 3;
console.log(x);
console.log('The numeric operator % returns the remainder from the division of the first by the second operand');
console.log('Dividing by a bigger number returns the value of the dividend and this is mathematically correct');
z = 10;
a = 5;
console.log("Let's divide 10 by 5. We should get 0 as a result using the remainder(%) and 2 using the division(/)");
console.log("10 % 5 = " + z%a);
console.log("10 / 5 = " + z/a);
console.log("<-----10----->");
console.log("Let's initialize an array containing only string values");
let javaScriptArray = ["first input","second input","another input"];
console.log("The array at the moment contains only strings: ");
console.log(javaScriptArray);
console.log("Next we try to append a number,a boolean and a null value");
javaScriptArray.push(6,true,null);
console.log(javaScriptArray);
console.log("It looks like JavaScript is not using strong data types. We have seen this before in the variables,which can easily change data type by just a new assignment.");
console.log('The value of variable x will be 6/0');
x = 6/0;
console.log('This division returns the value: ' + x);
console.log('And it is of type: ' + typeof(x));
console.log('The value of variable y will be 10/0');
y = 10/0;
console.log('This division returns the value: ' + y);
console.log('And it is of type: ' + typeof(y));
console.log("Now let's compare the two variables' values and also their type");
console.log(x==y);
console.log(x===y);
console.log('Mathematically the result makes sense because infinity is too big anyway');