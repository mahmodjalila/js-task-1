// document.write("mhmoud jalila")
// document.getElementById("div1").innerHTML="mahmoud "
// document.getElementById("div1").style.background ="red"
// document.getElementById("btn1").onclick = function (){
//     document.getElementById("div1").innerHTML="mahmoud"
// }
// console.log("mahmoud jaila")
// alert("welcome to hell ")
// prompt("killing yourself")
// confirm("would you like yourself")
// var x="10"
// var y=5
// console.log(typeof x)

// var x=["ali", "rana", 10,true ,1332, false]
// console.log(typeof x[1])

// var x ={
//     name:"ali",
//     age:12,
//     city: "cairo",
//     gender:"male"
// }
// console.log(x)
// console.log (x .age)
// console.log (x .gender)
// console.log (x .city)

// var x=null
// console.log (x)

// var x 
// console.log(typeof x)
// var x= 5
// var y=2
// var z=x%y
// console.log(z)
// var x = 10
// x++;
// x++
// ++x
// ++x
// x++
// console.log(x)


// var x =10
// // x+=5
// // x-=2
// // x*=2
// // x/=2
// x%=2
// console.log(x)
// var x = prompt("enter your degree")
// if ( x>=85 ){
//     alert ("excellent")
// }else if (x>=75){
//     alert("V good")
// }else if (x>=65){
//     alert("good")
// }else if (x>=50){
//     alert("accepted")
// }else{
//     alert("loser")
// }

// var x = 10
// var y = 14
// var z = 12
// if (!(x == 10 && y == 1)){
//     alert("true")
// }else{
//     alert("fales")
// }

// var x = prompt("enter your degree")
// switch(x){
//     case "a":
//     console.log("car") 
//     break;
//     case "b":
//     console.log("mobile")  
//     break;
//     case "c":
//     console.log("5000LE") 
//     break;   
//     case "d":
//     console.log("loser") 
//     break;
//     default:
//     console.log("big loser")    
// }

// function calcw (x,y){
//     console.log(x * y)
// }
// calcw(1,2)
// calcw(4,2)
// calcw(12,7)
// calcw(12,32)

// function code1 (){
//     console.log("mahmoudjailia")
// }
// code1()

// IIFE
// (function code2(){
//     console.log("mahmoud jalila")
// }) ()

// events 
// var x = 0
// document.getElementById("btn1").onclick = function (){
//     document.getElementById("div1").innerHTML = x++;
// }

// var x = 0 
// var btn = document.getElementById("btn1")
// var div = document.getElementById("div1")

// btn.style.background= "red"
// btn.style.padding = "100px"
// function code(){
//     div.innerHTML = --x;

// }
// btn.onkeydown  = code;

var allProducts = document.querySelectorAll(".list li")
var content = document.querySelector("#div1")
var btn = document.querySelector("#btn1")
var totalPrice = 0
var main = document.querySelector("#main")
allProducts.forEach(function(item){
    item.onclick = function(){
        totalPrice += + (item.getAttribute("price"))
        content.innerHTML += item.textContent + "////"
        if (content.innerHTML!=""){
            btn.style.display = "block"
            content.style.display = "block"
        }
    }
})
btn.onclick = function(){
    main.innerHTML = totalPrice
    main.style.display = "block"
}