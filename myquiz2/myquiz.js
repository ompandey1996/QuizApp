
let quizdata=[
 {
  question:"what is capital of India",
   options:["delhi","chennai","kolkata"],
   answer:"delhi"
 } ,
 {
    question:"capital of Pakistan",
    options:["Islamabad","china","kurtish"],
    answer:"Islamabad",
 },
 {
  question: 'What is the largest planet in our solar system?',
  options: ['Mars',  'Jupiter', 'Neptune'],
  answer: 'Jupiter',
},
{
  question: 'Which country won the FIFA World Cup in 2018?',
  options: ['Brazil', 'Germany', 'France', ],
  answer: 'France',
},
{
  question: 'What is the tallest mountain in the world?',
  options: ['Mount Everest', 'K2','Makalu'],
  answer: 'Mount Everest',
},
{
  question: 'Which is the largest ocean on Earth?',
  options: [
    'Pacific Ocean',
    'Indian Ocean',
    'Atlantic Ocean',
    
  ],
  answer: 'Pacific Ocean',
}
]
// initailizing   for dtarting quiz 
  let currentQuestion=0;
  let score=0;
  let incorrectAnswers=[];
   
  // now grabbing the html element through js  and setting value through JS//
   let quizContainer=document.getElementById("quiz");
   let resultContainer=document.getElementById("result");
   let submitButton=document.getElementById("submit");
   let retryButton=document.getElementById("retry");
   let showAnswerButton=document.getElementById("showAnswer");
       function displayQuestion(){
 //  now creating html element  AND SETTING INNERhtml through js//  
    let questionElement=document.createElement("div");
     questionElement.className="question";
        //by thi two above lines of code we creating div with classname question//   
      let questionData=quizdata[currentQuestion];
       questionElement.innerHTML=questionData.question;

       // same for options//
    let optionsElement=document.createElement('div');
    optionsElement.className="options";

    let Options=[...questionData.options]
        for(let i=0;i<Options.length;i++){
        let option=document.createElement("label");
     option.className="option";
     let radio=document.createElement("input");
        radio.type="radio";
        radio.name="quiz";
        radio.value=Options[i];
    
        let optionText=document.createTextNode(Options[i]);
        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
        
        } 
        quizContainer.innerHTML="";
      quizContainer.appendChild(questionElement);
      quizContainer.appendChild(optionsElement);
      
      }
       function checkAnswer(){
        const selectedOption=document.querySelector('input[name="quiz"]:checked');  
          console.log(selectedOption);
          if(selectedOption){
            let answer=selectedOption.value;
          if(answer==quizdata[currentQuestion].answer){
            score++ ;
          }
          else{
            incorrectAnswers.push({
            question:quizdata[currentQuestion].question,
             userAnswer:selectedOption.value,
             correctAnswer:quizdata[currentQuestion].answer
              
            }
            )
            console.log(incorrectAnswers);
          }
          currentQuestion++;
          selectedOption.checked=false;
          if(currentQuestion<quizdata.length){
            displayQuestion()
          }
          else{
            displayResult()
          }
           
          }
       }
         function displayResult(){
          quizContainer.style.display="none";
          submitButton.style.display="none";
           retryButton.style.display="inline-block";
       
           resultContainer.innerHTML=` U scored ${score} out of ${quizdata.length}`
         }
         function retry(){
          currentQuestion=0;
           score=0;
           incorrectAnswers=[];
          quizContainer.style.display="block";
          submitButton.style.display="inline-block";
           retryButton.style.display="none";
           
           resultContainer.innerHTML="";
           displayQuestion();

         }
        
      displayQuestion();
     submitButton.addEventListener("click",checkAnswer)
     retryButton.addEventListener("click",retry);
     
     