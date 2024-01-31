var time = 60 
 var finshScreen = document.querySelector(".finish-screen") 


var question = document.querySelector(".question")
var choice1 = document.querySelector(".choice-1")
var choice2 = document.querySelector(".choice-2")
var choice3 = document.querySelector(".choice-3")
var choice4 = document.querySelector(".choice-4")

var startButton = document.querySelector(".start-button")
var quizIntro = document.querySelector(".quiz-intro")
var questionScreen = document.querySelector(".question-screen")
var submitButton = document.querySelector(".submit-button")
var initialsInput = document.querySelector("initial")
var scoreDisplay = document.querySelector("scoreDispaly")
var index = 0 
var quizData = [
    {
        question:"what is 2+2",
        answer:4,
        choices:[3,2,5,4]

    },
    {
        question:"what is 2+3",
        answer:5,
        choices:[3,2,5,4]
    },
    {
        question:"what is 5+7",
        answer:12,
        choices:[12,10,8,5]
    },
    {
        question:"what is 5+5",
        answer:10,
        choices:[5,10,20,7]
    },
    
];

   var score = 0;

function display (){
    var currentQuestion = quizData[index]
    question.textContent = currentQuestion.question
    choice1.textContent = currentQuestion.choices[0]
    choice2.textContent = currentQuestion.choices[1]
    choice3.textContent = currentQuestion.choices[2]
    choice4.textContent = currentQuestion.choices[3]
    
}
function checkQuestion(event){ 
    var chosenanswer = event.target.textContent
    var quizanswer = quizData[index].answer
    console.log(quizanswer) 
    if (chosenanswer == quizanswer){
        console.log ( "corret")
    }
    else { console.log ("wrong") }
    //use event traget and quiz data answer to check if you are right or wrong//
    index++ 
    if (index>= quizData.length){
console.log("gameover")
finshScreen.classList.remove ("hidden") 
questionScreen.classList.add ("hidden")
document.addEventListener("DOMContentLoaded", function () {
});


    }
    else {
        display () ;
    } 
    
    
  
 //check if quiz is over// 
}
startButton.addEventListener("click",function(){
    quizIntro.classList.add ("hidden")
    questionScreen.classList.remove ("hidden")
   // start timer//
    display()
    setInterval(function(){
    var timer = document.querySelector("#timer") 
    time--;
    timer.textContent = time;
    if (time <= 0){
        // stop timer when time is up //
        console.log("time is up!")
    }
    },1000)
})
function endQuiz() {
    clearInterval(timerInterval); // Stop the timer
    questionScreen.classList.add("hidden");
    finishScreen.classList.remove("hidden");
    scoreDisplay.textContent = "Your score: " + score;
}
submitButton.addEventListener("click", function () {
    var enteredInitials = initialsInput
    console.log("Enter Initials:", enteredInitials);
    console.log("Final score", score)
    
});

choice1.addEventListener("click",checkQuestion)    
choice2.addEventListener("click",checkQuestion)
choice3.addEventListener("click",checkQuestion)
choice4.addEventListener("click",checkQuestion)


