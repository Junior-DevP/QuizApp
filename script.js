const quizDate = [{
    question: 'How old is Florin',
    a: ' 10',
    b: '17',
    c: '26',
    d: '100',
    correct: 'c'
}, {
    question: 'What is the most used programming language in 2019 ?',
    a: 'Java',
    b: 'Python',
    c: 'JavaScript',
    d: 'C',
    correct: 'c'
},
{
    question: 'Who is the president of US',
    a: 'Florin Pop',
    b: 'Trammp',
    c: 'Ivan Saldano',
    d: 'Mikhail Andrei',
    correct: 'a',
}, {
    question: 'What does Html stand for?',
    a: 'Hyper Text Markup',
    b: 'Cascading style sheet',
    c: 'Jason object Notation',
    d: 'Application programming Interface',
    correct: 'a'
}, {
    question: 'What year was Javascript Launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'None of the above',
    correct: 'b'
}
]

let currentQuestion = 0
loadQuiz()

function loadQuiz(){



    
    currentQuestion++
}