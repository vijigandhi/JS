
var a=document.getElementById("num1").value;
var b=document.getElementById("num2").value;

function  addition(){
    let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
    document.getElementById("add").innerHTML=parseInt(a)+parseInt(b);
}

function subtract(){
    let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
    document.getElementById("sub").innerHTML=parseInt(a)-parseInt(b);
}

function  multiple(){
    let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
    document.getElementById("mul").innerHTML=parseInt(a)*parseInt(b);
}

function  divition(){
    let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
    document.getElementById("div").innerHTML=parseInt(a)/parseInt(b);
}
