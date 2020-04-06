//Variable references of the elements from HTML file

var startQuiz = document.querySelector("#start");
var currentQuestion=0;
var timer = 120;
// var liButtons = document.querySelector(".answersLi");
//Question & Answers Array
var quizQuestions = [

    { 
        text:"What animal was Tarzan raise by?",
        answers: ["penguin","elephant","gorillas","lions"],
        correctAnswer: "gorillas",
   },

   { 
        text:"What is the name of Princess Jasmine's pet",
        answers: ["Rashard","Ramir","Rajah","Reyansh"],
        correctAnswer: "Rajah",
   },

   { 
        text:"Who did Pochaontas father want her to marry?",
        answers: ["John","Kocoum","Thomas","Meeko"],
        correctAnswer: "Kocoum",
   },

   { 
        text: "What Disney movie is the character Mushu from?",
        answers: ["Little Mermain","The Jungle Book","Princess & the Frog","Mulan"],
        correctAnswer: "Mulan",
   },

   { 
        text:"Name the tea cup from Beauty & the Beast?",
        answers: ["Chip Adams","Chip Potts","Chip Bently","Chip Clockwork"],
        correctAnswer: "Chip Potts",
   },

   { 
        text:"What is the name of the child who owns Woody from Toy Story?",
        answers: ["David","Rosa","Abbey","Andy"],
        correctAnswer: "Andy",
   },
];
//

//Possible for loop

var quizAnswers = quizQuestions[currentQuestion].answers
var quizQuestionBox = quizQuestions[currentQuestion]
var questionText =  quizQuestionBox.text
var questionanswers= quizQuestionBox.correctAnswer




//Needed Event Listeners

startQuiz.addEventListener("click", function(){
   document.querySelector(".homepage").classList.add("hide");
   document.querySelector("#game-end").classList.add("hide");
   document.querySelector("#display-highscores").classList.add("hide");
   document.querySelector("#questions").innerHTML= questionText;
   document.querySelector("#answersBox").innerHTML="";

      for (i=0; i < quizAnswers.length; i++){
        document.querySelector("#answersBox").innerHTML += ('<li class="answersLi">'+quizAnswers[i]+"</li>" );
   }
     answerbuttons();

}) 

     function answerbuttons() {
          liButtons.addEventListener("click", function() {

               if( this.innerHTML === questionanswers){
               alert("Answer Correct");
               }
               else {
                    alert("Wrong Answers");
     }

     }
)
};


/*
1. make the timer
a.function to track the seconds left
     secondsLeft--
     if answers are wrong subtrack seconds
     if time is up, then redirect user to 'all done' page

2. get the questions to show up
     a. add event listener to start button
     b. function will call on questions, iterate through array to create questions and buttons


3. create an onclick event / event listener that substracts time for wrong answer, and goes to the next one for correct answer. Hint: if else
     a. create a function inside the event listener
     b. querySelector for answersBox hint: you can also querySelect the class for LI's
     c. check if innerHTML of the thing you just clicked is equal to the correct Answer
     d. if not, subtract 10 seconds. if yes, move onto the next question

4. when timer is 0, or last question, end game. 
     if timer == 0, then querySelect gameEnd and 
    LOOK THIS UP element.classList.remove(class i want to remove)

5. high scores
     a. appendChild the results from html line 63 
     b. clear high score buttons will clear the results
     hint: clearing HTML requires this
     element.innerHTML = ""
     c. eventListener for clearHighscores button with a functoin iside it
     d. localsStorage from line 63. 
     hint:
     setStorage("label","value")
     getStorage("label")

6. add function to hide and show divs when you click go back button

*/