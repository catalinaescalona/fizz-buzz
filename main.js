// FizzBuzz Project
// Created by Catalina Escalona, Winter Semester 2023-24
// Course: "Web Coding: Intro to Web Development and Game Prototyping"
// University of Applied Arts Vienna 

$(document).ready(function() {
    // initialize counter variable
    let counter = 0;

    // a function to determine if a number is divisible by 3, 5, or 3 and 5
    function fizzbuzz(num) {
        let message;
        if ( ((num % 3) === 0) && ((num % 5) === 0)) {
            message = "fizzbuzz";
        } else if ((num % 3) === 0) {
            message = "fizz";
        } else if ((num % 5) === 0) {
            message = "buzz";
        } else {
            message = num.toString();
        }
        return message;
    }

    // a function that counts from 1-100 and prints results of fizzbuzz function
    function test_fizzbuzz() {
        for (i=1; i<=100; i++) {
            console.log(fizzbuzz(i));
        }
    }
    
    // clicking debug button calls test_fizzbuzz function
    $("#debug").on("click", function() {
        alert("to debug: inspect html, then check console log to see fizzbuzz numbers printed out from 1-100")
        test_fizzbuzz();
    });

    // clicking count button manually increases display number by 1
    $("#count").on("click", function() {
        counter += 1;
        $("#number").text((counter).toString());

        let fizzbuzz_result = fizzbuzz(counter);
        console.log(fizzbuzz_result);
        fizzbuzz_img(fizzbuzz_result);
    });

    // a function to display corrresponding fizzbuzz image
    function fizzbuzz_img(result) {
        let image_id;
        if (result === "fizz") {
            image_id = result + "-img";
        } else if (result === "buzz") {
            image_id = result + '-img';
        } else if (result === "fizzbuzz") {
            image_id = result + '-img';
        }
        let image = $("#" + image_id);
        image.fadeIn(1000, function() {
            $(this).fadeOut(1000);
        });
    }

    // clicking reset button resets display number to 0
    $("#reset").on("click", function() {
        $("#number").text((counter=0).toString());
    });
});