// list of objects
var Q1={
    qestion:"The beaver is the national emblem of which country?",
    answer:["Canada", 
            "Alaska", 
            "Germany",
            "Norway"],
    correctAnswer:0,
};

// which is better practice

/*Q1.question= "The beaver is the national emblem of which country?";
Q1.corAns = "Canada";
Q1.wngAns1 = "Alaska";
Q1.wngAns2 = "Germany";
Q1.wngAns3 = "Norway";*/

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
var counter =10;
var interval= setInterval("timer()", 1000);

// countdown display
function timer(){
   counter--;
   $("#timer").text(counter)
   
}


$( document ).ready(function() {
// question 1
    $("#question-1").text(Q1.question);
    $("#answer-1").html(Q1.corAns);
    $("#answer-2").html(Q1.wngAns1);
    $("#answer-3").html(Q1.wngAns2);
    $("#answer-4").html(Q1.wngAns3);
    timer();
});

