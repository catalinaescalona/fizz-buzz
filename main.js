// FizzBuzz Project
// Created by Catalina Escalona, Winter Semester 2023-24
// Course: "Web Coding: Intro to Web Development and Game Prototyping"
// University of Applied Arts Vienna 

// initialize counter variable
let counter = 0;

// a function to determine if a number is divisible by 3, 5, or 3 and 5
function fizzbuzz(num) {
    let message;
    if ( ((num % 3) === 0) && ((num % 5) === 0)) {
        message = "fizzbuzz!";
    } else if ((num % 3) === 0) {
        message = "fizz";
    } else if ((num % 5) === 0) {
        message = "buzz";
    } else {
        message = num.toString();
    }
    console.log(message);
}
    
// a function that counts from 1-100 and prints results of fizzbuzz function
function test_fizzbuzz() {
    for (i=1; i<=100; i++) {
        fizzbuzz(i);
    }
}

$(document).ready(function() {
    // clicking debug button calls test_fizzbuzz function
    $("#debug").on("click", function() {
        alert("to debug: inspect html, then check console log to see fizzbuzz numbers from 1-100")
        test_fizzbuzz();
    });

    // clicking count button manually increases display number by 1
    $("#count").on("click", function() {
        $("#number").text((counter+=1).toString());
    });

    // clicking reset button resets display number to 0
    $("#reset").on("click", function() {
        $("#number").text((counter=0).toString());
    });
});