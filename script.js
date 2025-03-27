const questions = [
    {
        question:"What was the first AI program ever created?",
        answers: [
            {text: "ELIZA", correct:false},
            {text: "Deep Blue",correct: false},
            {text: "Logic Theorist",correct: true},
            {text: "AlphaGo", correct:false},
        ]

    },
    {
        question:"AI once created its own secret language. Which AI system did this?",
        answers: [
            {text: " GPT-3", correct:false},
            {text: "Facebook’s AI Chatbots",correct: true},
            {text: "IBM Watson",correct: false},
            {text: "Google Assistant", correct:false},
        ]
    },
    {
        question:"What was the first-ever song composed entirely by AI?",
        answers: [
        {text: "Daddy’s Car", correct:true},
            {text: "Blue Monday",correct:false },
            {text: "Symphony No.9 AI Remix",correct:false},
            {text: "Cyber Groove", correct:false},
        ]
    },
    {
        question:"AI can dream! What is the name of Google’s AI that generates hallucinatory images?",
        answers: [
            {text: "DreamScope", correct:false},
            {text: "DeepDream",correct:true },
            {text: " AI Vision",correct:false},
            {text: "Neural Painter", correct:false},
        ]
    },
    {
        question:"What was the first AI-generated artwork sold at an auction for $432,500?",
        answers: [
            {text: "Portrait of Edmond de Belamy", correct:true},
            {text: "AI Mona Lisa",correct:false},
            {text: "The Next Rembrandt",correct:false},
            {text: "Neural Canvas", correct:false},
        ]
    },

    {
        question:"What unexpected skill has AI developed without being explicitly programmed?",
        answers: [
            {text: "Cooking", correct:false},
            {text: " Playing Poker Bluffing Strategies",correct:true},
            {text: "Writing Novels",correct:false},
            {text: "Doing Stand-up Comedy", correct:false},
        ]
    },

    {
        question:"AI has helped solve a 50-year-old scientific mystery in which field?",
        answers: [
            {text: "Space Exploration", correct:false},
            {text: "Medicine",correct:false},
            {text: "Protein Folding",correct:true},
            {text: "Quantum Computing", correct:false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0; 
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct ==="true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else
{
    selectedBtn.classList.add("incorrect");
}

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length)
        {
        handleNextButton();
    }else
    {
        startQuiz();
    }
});

startQuiz();