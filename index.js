// x=10;
// console.log(x);
// {
//     x=20;
//     console.log(x);
// }
// x="hello";
// console.log(x);

// var x=10;
// console.log(x);
// {
//     let x=20;
//     console.log(x);
// }
// x="hello";
// console.log(x);
// {
//     var x=500;
//     console.log(x);
// }
// console.log(x);
// console.log(x);

// let add;
// add=addNumbers();
// console.log("After add:"+add);
// add=subNumbers();
// console.log("After sub:"+add);

// function addNumbers()
// {
//     console.log("add function");
//     let a=10;
//     let b=20;
//     return a+b;
// }

// function subNumbers()
// {
//     console.log("sub function");
//     let a=10;
//     let b=20;
//     return a-b;
// }
// --------------------------------------
// let add;
// add = addNumber(3,2);
// console.log("1st addition:"+add);
// add = addNumber(-3,-6);
// console.log("2nd addition:"+add);
// add = addNumber(7,3);
// console.log("3rd addition:"+add);

// function addNumber(a,b)
// {
//     console.log("function");
//     return a+b;
// }
// --------------------------------------
// let sec= convert(2);
// console.log("minute:"+sec);

// function convert(x)
// {
//     return x*60;
// }
// --------------------------------------

// let area= triArea(3,2);
// console.log("area of triangle:"+area);

// function triArea(b,h)
// {
//     return 1/2*b*h;
// }
// --------------------------------------
// let add=addition(0);
// console.log("addition:"+add);

// function addition(a)
// {
//     a++;
//     return a;
// }

// --------------------------------------

// let sum=remainder(3,4);
// console.log("remiander:"+sum);

// function remainder(x,y)
// {
//     return x%y;
// }
// --------------------------------------


//  problem-2
const prompt = require("prompt-sync")({signint : true})

let input = prompt("Enter a number : ")
let num=lessThanorEqualtoZero(input);
console.log("less than or Equal to Zero:"+num);
function lessThanorEqualtoZero(a)
{
 
    return a<=0?"true":"false";
}
// --------------------------------------
// let add=and(false,false);
// console.log("Return value:"+add);
// function and(a,b)
// {
//     return a && b;
// }
// --------------------------------------
// let add=animals(2,3,5);
// console.log("Total number of legs:"+add);
// function animals(a,b,c)
// {
//     return (a*2)+(b*4)+(c*4);
// }
// --------------------------------------
// let add=something("is better than nothing");
// console.log("Return:"+add);
// function something(x)
// {
//     return "Something"+" "+x;
// }
// --------------------------------------
// let add=checkEquality(1,"0");
// console.log("Return:"+add);
// function checkEquality(a,b)
// {
//     return a===b? "true":"false";
// }
// --------------------------------------
// let add=isSeven(4);
// console.log("Return:"+add);
// function isSeven(x)
// {
//     return x==7? "true":"false";
// }