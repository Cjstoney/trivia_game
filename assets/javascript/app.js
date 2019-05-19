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
        correctAnswer: "Mr. Spock"
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
        question: "In which sport would you perform the Fosbury Flop?",
        choices: ["Soccer", "The High Jump", "Polo", "Hockey"],
        correctAnswer: "The High Jump"
    },
    {
        question: "The Statue of Liberty was given to the US by which country?",
        choices: ["Argentina", "Australia", "Thailand", "France"],
        correctAnswer: "France"
    },
]

var correctResults = 0
var wrongResults = 0
var unanswered = 0
// function to display results page

function finalPage() {
    $('.title').html('Results')
    $('#right-wrong').html(correctResults, wrongResults)
}

// setting up the timer
var counter = 9;
$("#timer").text(counter)
var interval = setInterval(timer, 1000);

// starting index for the for loop
var index = 0
// countdown display
function timer() {
    counter--;
    $("#timer").text(counter)
    if (counter === 0) {
        $('.results').html("I am sorry, time has run out. Give the next question another shot")
        unanswered++
        clearInterval(interval)

        setTimeout(function () {
            incorrect(questions[index].correctAnswer)
            index++
            displayNextQuestion()
            $('.results').empty()

        }, 3000)
    }
}


// create a function to display the questions and answers
function displayNextQuestion() {
    if(index > 8){
        clearInterval(interval)
        $(".game-card").empty()
        $("#final-page").show()
        totalResults()
        
    }else{

        // emptied do buttons and questions do not stack up
        $('.question-container').empty()
        counter = 9;
        console.log(counter)
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
            
        }
        clearInterval(interval)
        interval = setInterval(timer, 1000);
        
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
    wrongResults++
}


// function to get correct message to pop up
function correctChoice() {
    $('.results').empty()
    rightAnswer = "Correct! keep it up!"
    counter = 10
    timer()
    $('.results').html(rightAnswer)
    correctResults++
}

// function to toggle between visible pages
function rotate() {
    $('.game-card').hide();
    $('.start-button').on('click', function () {
        $('.game-card, .start-page').toggle()
        displayNextQuestion();
    })
}

// function to create the final results page
function totalResults(){
    $('.game-card').hide()
    $('#answered-right').html("You answered "+ correctResults + " right")
    $('#answered-wrong').html("You answered "+ wrongResults + " wrong")
    $('#unanswered').html("You ran out of time on "+ unanswered + " questions")

    var newButton = $("<button>")
    newButton.text('Restart');
    newButton.addClass('restart');
    $('#final-page').append(newButton);
    // $('.retstart').on('click',function(){
    //     console.log("i've been clicked")
    //     correctResults = 0;
    //     wrongResults = 0;
    //     unanswered = 0 ;
    //     displayNextQuestion()
    // })
}


// actually runnig the game
$('#final-page').hide()
rotate()
$(document).on('click', '.user-choice', function () {
    var userChoice = $(this).text()
    if (userChoice === questions[index].correctAnswer) {
        correctChoice()
        console.log(correctResults)
    } else {
        incorrect(questions[index].correctAnswer)
        console.log(wrongResults)
    }
    index++
    displayNextQuestion()
})