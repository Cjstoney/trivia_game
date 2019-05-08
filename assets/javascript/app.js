// list of objects
var Q1=new Object;
Q1.question= "The beaver is the national emblem of which country?";
Q1.corAns = "Canada";
Q1.wngAns1 = "Alaska";
Q1.wngAns2 = "Germany";
Q1.wngAns3 = "Norway";

// place correct answers in an array
// capture click
// compare captured click with array of correct answers
// if clicked answer is found, alert win

var Q2= new Object;
Q2.question = "Which singer’s real name is Stefani Joanne Angelina Germanotta?";
Q2.corAns = "Lady Gaga";
Q2.wngAns1 = "Gwen Stefani";
Q2.wngAns2 = "Beyonce";
Q2.wngAns3 = "Angelina Jolie";

var Q3= new Object;
Q3.question = " Which TV character said, 'Live long and prosper'";
Q3.corAns = "Mr. Spock";
Q3.wngAns1 = "Tommy Pickles";
Q3.wngAns2 = "Luke Skywalker";
Q3.wngAns3 = "Captain Kirk";

var Q4= new Object;
Q4.question = "What is the name of Batman’s butler?";
Q4.corAns = "Alfred";
Q4.wngAns1 = "Jeeves";
Q4.wngAns2 = "Jeffery";
Q4.wngAns3 = "Chives";

var Q5= new Object;
Q5.question = "What is Chandler’s last name in the sitcom Friends?";
Q5.corAns = "Bing";
Q5.wngAns1 = "Bong";
Q5.wngAns2 = "Ding";
Q5.wngAns3 = "Geller";

// array to check correct answer
var arrayOfCorAns = [Q1.corAns, Q2.corAns, Q3.corAns, Q4.corAns, Q5.corAns]
// console.log to test array
console.log(arrayOfCorAns);





// setting up the timer

var number= 30;
var intervalId;

// run function for timer
function run(){
    intervalId = setInterval(decrement, 300);
}

// countdown display
function decrement(){
    number--;
    $("show-number").html("<h2>"+ number + "</h2>");
    if(number === 0){
        stop();
        // full page sorry you have lost. try the next question
    }
}

$( document ).ready(function() {
// question 1
    $("#question-1").html(Q1.question);
    $("#answer-1").html(Q1.corAns);
    $("#answer-2").html(Q1.wngAns1);
    $("#answer-3").html(Q1.wngAns2);
    $("#answer-4").html(Q1.wngAns3);

// question 2

$("#question-2").html(Q2.question);
    $("#answer2-1").html(Q2.corAns);
    $("#answer2-2").html(Q2.wngAns1);
    $("#answer2-3").html(Q2.wngAns2);
    $("#answer2-4").html(Q2.wngAns3);
// question 3
$("#question-3").html(Q3.question);
    $("#answer3-1").html(Q3.corAns);
    $("#answer3-2").html(Q3.wngAns1);
    $("#answer3-3").html(Q3.wngAns2);
    $("#answer3-4").html(Q3.wngAns3);

// question 4
$("#question-4").html(Q4.question);
    $("#answer4-1").html(Q4.corAns);
    $("#answer4-2").html(Q4.wngAns1);
    $("#answer4-3").html(Q4.wngAns2);
    $("#answer4-4").html(Q4.wngAns3);

// question 5
$("#question-5").html(Q5.question);
    $("#answer5-1").html(Q5.corAns);
    $("#answer5-2").html(Q5.wngAns1);
    $("#answer5-3").html(Q5.wngAns2);
    $("#answer5-4").html(Q5.wngAns3);


});




