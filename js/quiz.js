var questionBank= [
    {
        question: 'Color del escudo del capitan America',
        option: ['rojo , celeste y blanco','rosa, verde y gris','azul, rojo y blanco','rojo, azul y blanco'],
        answer: 'rojo, azul y blanco'
    },
    {
        question: 'Mi segundo nombre',
        option: ['Mia','Micaela','Morena','Milagros'],
        answer: 'Milagros'
    }, 
    {
        question: 'colores favoritos',
        option: ['azul y verde','rojo y azul','rojo y violeta','rosa y amarillo'],
        answer: 'azul y verde'
    },
    {
        question: 'animal favorito',
        option: ['serpiente','lobo','zorro','leon'],
        answer: 'zorro'
    },
    {
        question: 'hobbie',
        option: ['leer','dibujar','leer y dibujar','coser'],
        answer: 'leer y dibujar'
    },
    {
        question: 'cosa que odio',
        option: ['verduras','que me toquen el celu','sonidos fuertes','todas las anteriores'],
        answer: 'verduras'
    },
    {
        question: 'cosa que amo',
        option: ['dormir','musica','chocolate','todas las anteriores'],
        answer: 'todas las anteriores'
    },
    {
        question: 'dia de la semana favorito',
        option: ['miercoles','viernes','sabado','domingo'],
        answer: 'viernes'
    },
    {
        question: 'materia que odio',
        option: ['procesos industriales','matematica','gestion y autogestion','ingles'],
        answer: 'procesos industriales'
    },
    {
        question: 'saga de peliculas favoritas',
        option: ['rapidos y furiosos','jurassic park','Avengers','transformers'],
        answer: 'transformers'
    }

]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scoreboard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score=0;

function displayQuestions(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+''+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    statusbar.innerHTML= 'Question'+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background='limegreen';
    }
    else {
        document.getElementById(e.id).style.background='tomate';
    }
    setTimeout(nextQuestion,300);
}
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestions();
    }
    else {
        points.innerHTML=score+ '/'+ questionBank.length;
        quizContainer.style.display='none';
        scoreboard.style.display='block'
    }
}

next.addEventListener ('click', nextQuestion);

function backToQuiz() {
    location.reload();
}

function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display='block';
    scoreboard.style.display='none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestions();