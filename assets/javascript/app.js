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
    {
        question: " Which TV character said, 'Live long and prosper'",
        choices: ["Mr. Spock", "Tommy Pickles", "Luke Skywalker", "Captain Kirk"],
        correctAnswer: "Mr. Spck"
    },
    {
        question: "What is the name of Batman's butler?",
        choices: ["Alfred", "Jeeves", "Jeffery", "Chives"],
        correctAnswer: "Alfred"
    },
    {
        question: "What is Chandler’s last name in the sitcom Friends?",
        choices: ["Bing", "Bong", "Ding", "Geller"],
        correctAnswer: "Bing"
    },
    {
        question: "How is the groundnut better known?",
        choices: ["Cashew", "Pecan", "Peanut", "Almond"],
        correctAnswer: "Peanut"
    },
    {
        question: "Who was US president during World War I?",
        choices: ["Bill Clinton", "Woodrow Wilson", "George Washignton", "Abraham Lincoln"],
        correctAnswer: "Woodrow Wilson"
    },
    {
        question: "Little Cuba is the nickname of which US city?",
        choices: ["San Diego", "Havana", "Miami", "San Antonio"],
        correctAnswer: "Miami"
    },
    {
        question: "Little Cuba is the nickname of which US city?",
        choices: ["San Diego", "Havana", "Miami", "San Antonio"],
        correctAnswer: "Miami"
    },
    {
        question: "The Statue of Liberty was given to the US by which country?",
        choices: ["Argentina", "Australia", "Thailand", "France"],
        correctAnswer: "France"
    },
]

var correctResults = 0
var wrongResults = 0

// function to display results page

function finalPage(){
    $('.title').html('Results')
    $('#right-wrong').html(correctResults, wrongResults)
}

// setting up the timer
var counter = 30;
var interval = setInterval(timer, 1000);

// countdown display
function timer() {
    counter--;
    $("#timer").text(counter)
    if (counter === 0) {
        $('.results').html("I am sorry, time has run out. Give the next question another shot")
        clearInterval(interval)
    }

}

// starting index for the for loop
var index = 0

// create a function to display the questions and answers
function displayNextQuestion() {
    // emptied do buttons and questions do not stack up
    $('.question-container').empty()
    counter = 34;
    // put question text in the container
    $(".question").html(questions[index].question);
    // for loop to put each of the possible answers as a button
    for (var i = 0; i < questions[index].choices.length; i++) {
        console.log(questions[index].choices[i])
        // creating new button in HTML
        var newButton = $("<button>")
        console.log(newButton)
        // assigning the text in the button
        newButton.text(questions[index].choices[i]);
        // assigning a class to the button
        newButton.addClass('user-choice');
        // adding new id to button
        $('.question-container').append(newButton);
        timer();
    }
}



// function to get incorrect message
function incorrect(ans) {
    $('.results').empty()
    var wrongMessage = "I'm sorry, we were looking for " + ans;
    counter = 10
    timer()
    var falseText = $("<h2>")
    $('.results').html(wrongMessage)
}


// function to get correct message to pop up
function correctChoice() {
    $('.results').empty()
    rightAnswer = "Correct! keep it up!"
    counter = 10
    timer()
    $('.results').html(rightAnswer)
}

// function to toggle between visible pages
function rotate(){
    $('.game-card').hide();
    $('.start-button').on('click',function(){
        $('.game-card, .start-page').toggle()
    })
}


// actually runnig the game

rotate()

displayNextQuestion();

$(document).on('click', '.user-choice', function () {
    var userChoice = $(this).text()
    if (userChoice === questions[index].correctAnswer) {
        correctChoice()
        correctResults ++
        console.log(correctResults)
    } else {
        incorrect(questions[index].correctAnswer)
        wrongResults ++
        console.log(wrongResults)
    }

    index++
    displayNextQuestion()
})



// create hidden button that is triggered when time runs out
// start and finish view



