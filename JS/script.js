let questions = [
    {
        "question": " 1. Which branch of AI enables computers to understand, interpret, and generate human language?",
         "a": "Robotics",
        "b": "Natural Language Processing (NLP)",
        "c": "Computer Vision",
        "d": "Autonomous Systems",
        "correct_answer": "b"
    },
    {
        "question": " 2. What does computer vision involve teaching computers to interpret and understand?",
        "a": "Audio information",
        "b": "Text information",
        "c": "Visual information from images or videos",
        "d": "Online information",
        "correct_answer": "c"
    },
    {
        "question": " 3. Which field combines AI with mechanical engineering to design intelligent robots?",
        "a": "Natural Language Processing (NLP)",
        "b": "Computer Vision",
        "c": "Robotics",
        "d": "Autonomous Systems",
        "correct_answer": "c"
    },
    {
        "question": " 4. What type of systems use AI algorithms to perceive their environment and make decisions without human intervention?",
        "a": "Natural Language Processing (NLP)",
        "b": "Computer Vision",
        "c": "Robotics",
        "d": "Autonomous Systems",
        "correct_answer": "d"
    },
    {
        "question": " 5. Which AI branch involves tasks like language translation and chatbots?",
        "a": "Computer Vision",
        "b": "Robotics",
        "c": "Natural Language Processing (NLP)",
        "d": "Autonomous Systems",
        "correct_answer": "c"
    },
    {
        "question": " 6. What do autonomous vehicles and drones use AI algorithms for?",
        "a": "Object detection",
        "b": "Facial recognition",
        "c": "Image classification",
        "d": "All of the above",
        "correct_answer": "d"
    },
    {
        "question": " 7. What field enables computers to interpret visual information from images or videos?",
        "a": "Computer Vision",
        "b": "Natural Language Processing (NLP)",
        "c": "Robotics",
        "d": "Autonomous Systems",
        "correct_answer": "a"
    },
    {
        "question": " 8. Which AI branch involves designing and building intelligent robots?",
        "a": "Natural Language Processing (NLP)",
        "b": "Autonomous Systems",
        "c": "Robotics",
        "d": "Computer Vision",
        "correct_answer": "c"
    },
    {
        "question": " 9. What task involves giving computers the ability to perceive their environment and make decisions independently?",
        "a": "Object detection",
        "b": "Facial recognition",
        "c": "Autonomous Systems",
        "d": "Language translation",
        "correct_answer": "c"
    },
    {
        "question": " 10. Which AI branch enables computers to generate human language?",
        "a": "Robotics",
        "b": "Natural Language Processing (NLP)",
        "c": "Computer Vision",
        "d": "Autonomous Systems",
        "correct_answer": "b"
    },
    {
        "question": " 11. Which AI branch enables computers to generate human language?",
        "a": "Robotics",
        "b": "Natural Language Processing (NLP)",
        "c": "Computer Vision",
        "d": "Autonomous Systems",
        "correct_answer": "b"
    }
]


function clearCheckboxesAndRadios() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let radios = document.querySelectorAll('input[type="radio"]');
  
  checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
  });
  
  radios.forEach(function(radio) {
      radio.checked = false;
  });
 }


function setQuestion(question){
document.getElementById("question").innerHTML = question['question']
document.getElementById("q1Option1").value = question['a']
document.getElementById("q1").innerHTML = question['a']
document.getElementById("q1Option2").value = question['b']
document.getElementById("q2").innerHTML = question['b']
document.getElementById("q1Option3").value = question['c']
document.getElementById("q3").innerHTML = question['c']
document.getElementById("q1Option4").value = question['d']
document.getElementById("q4").innerHTML = question['d']
clearCheckboxesAndRadios()

}

let questionNo = 0;
let correct = 0;
let incorrect = 0;
setQuestion(questions[0])
let correctAnswer = questions[0][questions[0]['correct_answer']]
let selectedOptions = []
let seconds = 30

setInterval(function(){
  document.getElementById("timer").innerHTML = seconds
  seconds = seconds-1
  if (seconds<=0) {
    checkAnswer('question1')
    seconds = 30
  }
},1000)

function checkAnswer(questionName) {
  
  seconds = 30
 let selectedOption;
 if(questionNo<questions.length-1){
 let options = document.getElementsByName(questionName);
 for (var i = 0; i < options.length; i++) {
   if (options[i].checked) {
     selectedOption = options[i].value;
   }
 }

 if (selectedOption === correctAnswer) {
   // document.getElementById('answer1').innerHTML = "Correct!";
   questionNo+=1
   setQuestion(questions[questionNo])
   correctAnswer = questions[questionNo][questions[questionNo]['correct_answer']]
   correct+=1
   selectedOptions.push(selectedOption)
   

 } 
 
 else {
   questionNo+=1
   setQuestion(questions[questionNo])
   correctAnswer = questions[questionNo][questions[questionNo]['correct_answer']]
   incorrect+=1
   selectedOptions.push(selectedOption)
         
   

  
 }
}
else{
 let options = document.getElementsByName(questionName);
 for (var i = 0; i < options.length; i++) {
   if (options[i].checked) {
     selectedOption = options[i].value;
   }
 }
 if (selectedOption === correctAnswer) {
   correct+=1
   selectedOptions.push(selectedOption)
 }
 else{
   incorrect+=1
   selectedOptions.push(selectedOption)
 }

 document.getElementById('questions').innerHTML = `
         <div class="alert alert-success align-center" role="alert">
           No of correct answers  ${correct}
         </div>
         <div class="alert alert-danger align-center" role="alert">
           No of Incorrect answers ${incorrect}
         </div>`
 
 "Correct "+correct+" Incorrect "+incorrect
 console.log(selectedOptions)
 for (let i = 0;i<questions.length;i++){
   if (selectedOptions[i] === questions[i][questions[i]['correct_answer']]){
     document.getElementById('questions').innerHTML+=`<div class="container">
     <h2 class="mt-4 mb-4">${questions[i]['question']}</h2>
     <form>
         <div class="form-group">
             <div>
              <label for="paris">${questions[i]['a']} </label> 
             </div>
             <div>
                 <label for="london">${questions[i]['b']}</label>
             </div>
             <div>
                 <label for="berlin">${questions[i]['c']}</label>
             </div>
             <div>
                 <label for="rome">${questions[i]['d']}</label>
             </div>
         </div>
     </form>
       <div class="alert alert-success" role="alert">
         Correct ${questions[i][questions[i]['correct_answer']]}
       </div>
 </div>
` 
   }
   else{
     document.getElementById('questions').innerHTML+=`<div class="container">
     <h2 class="mt-4 mb-4">${questions[i]['question']}</h2>
     <form>
         <div class="form-group">
             <div>
                 <label for="paris">${questions[i]['a']}</label>
             </div>
             <div>
                 <label for="london">${questions[i]['b']}</label>
             </div>
             <div>
                 <label for="berlin">${questions[i]['c']}</label>
             </div>
             <div>
                 <label for="rome">${questions[i]['d']}</label>
             </div>
         </div>
     </form>
     <div class="alert alert-danger" role="alert">
         Correct ${selectedOptions[i]}
       </div>
       <div class="alert alert-success" role="alert">
         Correct ${questions[i][questions[i]['correct_answer']]}
       </div>
 </div>
`
   }
 }
}
}