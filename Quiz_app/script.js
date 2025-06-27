const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Earth", correct: "false" },
            { text: "Mars", correct: "true" },
            { text: "Jupiter", correct: "false" },
            { text: "Venus", correct: "false" }

        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answer: [
            { text: "O2", correct: "false" },
            { text: "H2O", correct: "true" },
            { text: "CO2", correct: "false" },
            { text: "HO", correct: "false" }
        ]

    },
    {
        question: "Which continent is the Sahara Desert located in?",
        answer: [
            { text: "Asia", correct: "false" },
            { text: "Africa", correct: "true" },
            { text: "Australia", correct: "false" },
            { text: "South America", correct: "false" }
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answer: [
            { text: "Lion", correct: "false" },
            { text: "Cheetah", correct: "true" },
            { text: "Horse", correct: "false" },
            { text: "Tiger", correct: "false" }
        ]
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        answer: [
            { text: "Oxygen", correct: "false" },
            { text: "Nitrogen", correct: "false" },
            { text: "Carbon Dioxide", correct: "true" },
            { text: "Hydrogen", correct: "false" }
        ]
    }
]


const questionid = document.getElementById("questions")
const ansbtn = document.getElementById("answer-buttons")
const nextbtn = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextbtn.innerHTML = "Next"
    showQuestion()
    
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionid.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("option-btn")
        ansbtn.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
            
        }
        button.addEventListener("click", selectAnswer);
    })

    
}
function resetState(){
    nextbtn.style.display = "none"
    while (ansbtn.firstChild) {
        ansbtn.removeChild(ansbtn.firstChild)
        
    }
}
function selectAnswer(e)  {
    const selectbtn = e.target
    const isCorrect = selectbtn.dataset.correct === "true"
    if (isCorrect) {
        selectbtn.classList.add("correct") 
        score++   
    }else{
        selectbtn.classList.add("incorrect")
    }
    Array.from(ansbtn.children).forEach(button =>{
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
            
        }
        button.disabled = true 
    })
    nextbtn.style.display = "block"
     
    
}
function showScore() {
    resetState()
    questionid.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextbtn.innerHTML = "Play Again"
    nextbtn.style.display = "block"
    
}
function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion()
        
    }else{
        showScore()
    }
    
}
nextbtn.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
        
    }else{

        startQuiz()
    }
})
startQuiz()
 

