const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is the president of US?',
        a: 'Florin Pop',
        b: 'George Bush',
        c: 'Donald Trum',
        d: 'John Biden',
        correct: 'd'
    }, {
        question: 'How mild is made?',
        a: 'In a factory',
        b: 'God just gives it to us',
        c: 'By cow',
        d: 'By bull',
        correct: 'c'
    }, {
        question: 'What is the best transportation?',
        a: 'Motorcycle',
        b: 'Car',
        c: 'Bus',
        d: 'Bike',
        correct: 'a'
    }
];

const answerEls = document.querySelectorAll(".question-opt");
const quiz_container = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers(); 

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz_container.innerHTML = 
                `<h2> You answered correctly ${score} out of 
                ${quizData.length} questions.</h2>
                
                <button class="quiz-button" onclick="location.reload()
                ">Reload</button>`;
        }
    }   
})