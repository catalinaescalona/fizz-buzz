// FizzBuzz Project
// Created by Catalina Escalona, Winter Semester 2023-24
// Course: "Web Coding: Intro to Web Development and Game Prototyping"
// University of Applied Arts Vienna 

$(document).ready(function() {
    // initialize variables
    let counter = 0;
    let counterInterval;

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
        // console.log(fizzbuzz_result);
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
        let number = $("#number");

        // calculate center position for image
        let centerX = number.offset().left + number.width() / 2 - image.width() / 2;
        let centerY = number.offset().top + number.height() / 2 - image.height() / 2;

        // set image position at center of number
        image.css({
            position: "absolute",
            top: centerY,
            left: centerX,
            display: "none"
        });

        // show image with fade-in and fade-out effect
        image.fadeIn(1000, function() {
            $(this).fadeOut(1000, function() {
                $(this).css("display", "none");
            });
        });
    }

    // clicking reset button resets display number to 0
    $("#reset").on("click", function() {
        $("#number").text((counter=0).toString());
    });

    // clicking start button automatically increases display number by 1 every 1 second
    $("#start").on("click", function() {
        counterInterval = setInterval(function() {
            counter += 1;
            $("#number").text(counter.toString());
            let fizzbuzz_result = fizzbuzz(counter);
            // console.log(fizzbuzz_result);
            fizzbuzz_img(fizzbuzz_result);
        }, 1000);
    });

    // clicking stop button stops the counter that was initiated by start button
    $("#stop").on("click", function() {
        clearInterval(counterInterval);
    });

    // added click effect so user gets visual feedback when they click button
    $("button").on({
        mousedown: function() {
            $(this).css({
                color: "white",
                backgroundColor: "plum"
            });
        },
        mouseup: function() {
            $(this).css({
                color: "",
                backgroundColor: ""
            });
        }
    });
});