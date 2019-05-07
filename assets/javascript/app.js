// list of objects
var Q1=new Object;
question= "The beaver is the national emblem of which country?";
corAns = "Canada";
wngAns1 = "Alaska";
wngAns2 = "Germany";
wngAns3 = "Norway";

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