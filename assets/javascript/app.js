console.log("works")

// list of objects
var questions = [
    {

        question: "The beaver is the national emblem of which country?",
        choices: ["Canada", "Alaska", "Germany", "Norway"],
        correctAnswer: "Canada",
    },
    {
        question: "Which singer’s real name is Stefani Joanne Angelina Germanotta?",
        choices: ["Gwen Stefani", "Lady Gaga", "Beyonce", "Angelina Jolie"],
        correctAnswer: "Lady Gaga"
    },
]
var index=0

$(".question-container").text(questions[index].question);

for (let i = 0; i < question[index].choices.length; i++) {
    // creating new button in HTML
    var newButton = $('<button>')
    // assigning the text in the button
    newButton.text(questions[index].choices[i])
    // assigning a class to the button
    newButton.addClass('user-choice')
    // adding new id to button
    $('#cointainer').append(newButton)
}




















/*var Q3= new Object;
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
Q5.wngAns3 = "Geller";*/

// array to check correct answer

// console.log to test array
console.log(arrayOfCorAns);

// setting up the timer
var counter = 10;
var interval = setInterval("timer()", 1000);

// countdown display
function timer() {
    counter--;
    $("#timer").text(counter)

}



    // question 1
   /* $("#question-1").text(Q1.question);
    $("#answer-1").text(Q1.answer[0]);
    $("#answer-2").text(Q1.answer[1]);
    $("#answer-3").text(Q1.answer[2]);
    $("#answer-4").text(Q1.answer[3]);
    timer();
    $("document").on("click")*/




