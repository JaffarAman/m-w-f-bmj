var quesArr = [
  {
    num: 1,
    question: "HTML stand for",
    options: {
      a: "Hyper text markup Language",
      b: "Hyper text programming Language",
      c: "Hyper text styling Language",
      d: "Hyper text scripting Language",
    },
    correctAns: "Hyper text markup Language",
  },
  {
    num: 2,
    question: "Which type of JavaScript Languages is",
    options: {
      a: "Object-Oriented ",
      b: "Object-Base",
      c: "Assembly Languages",
      d: "high Level",
    },
    correctAns: "Object-Base",
  },
  {
    num: 3,
    question: "The 'function' and  'var' are known as:",
    options: {
      a: "Keywords",
      b: "Data types",
      c: "Declaration statements",
      d: "Prototypes",
    },
    correctAns: "Declaration statements",
  },
  {
    num: 4,
    question: "who is the present president of pakistan",
    options: {
      a: "Arif Alvi",
      b: "Imran Khan",
      c: "Nawaz Sharif",
      d: "Zardari",
    },
    correctAns: "Arif Alvi",
  },
  {
    num: 5,
    question: "How many prayers in a day:",
    options: {
      a: "6",
      b: "5",
      c: "3",
      d: "none",
    },
    correctAns: "5",
  },
];

var quizQues = document.getElementById("quizQues");
var quizOptionLi = document.getElementsByClassName("quizOptionLi");
var nextBtn = document.getElementById("nextBtn");
var quesCounter = 0;
var scoreCounter = 0;
var wrongAnsCounter = 0;
var resultBox = document.getElementById("resultBox");
var mainBox = document.getElementsByClassName("mainBox")[0];
var totalCOrrectAns = document.getElementById("totalCOrrectAns");
var totalWrongAns = document.getElementById("totalWrongAns");
var userName = document.getElementById("userName")
var totalQues = document.getElementById("totalQues")
var footerCOunter = document.getElementById("footerCOunter")
totalQues.innerHTML = quesArr.length


////for loop set function in li///
for (var i = 0; i < quizOptionLi.length; i++) {
  quizOptionLi[i].setAttribute("onclick", "optionFun(this)");
}

console.log("scoreCounter", scoreCounter);

function setQues() {
  quizQues.innerHTML = quesArr[quesCounter].question;
  // console.log(quizOptionLi)
  quizOptionLi[0].innerHTML = quesArr[quesCounter].options.a;
  quizOptionLi[1].innerHTML = quesArr[quesCounter].options.b;
  quizOptionLi[2].innerHTML = quesArr[quesCounter].options.c;
  quizOptionLi[3].innerHTML = quesArr[quesCounter].options.d;


  footerCOunter.innerHTML = (quesCounter + 1) + "/" + quesArr.length


}

// console.log(quesArr.length)

function nextQues() {
  // console.log("NEXT BTN" , quesCounter)
  quesCounter++;
  if (quesCounter < quesArr.length) {
    setQues();
  } else {
    // alert("sawal khatam")
    // alert("Your score is:" + scoreCounter)
    mainBox.style.display = "none";
    resultBox.style.display = "block";

    totalCOrrectAns.innerHTML = scoreCounter;
    totalWrongAns.innerHTML = wrongAnsCounter;
  }

  // console.log(quesCounter)

  //visible All li options///
  for (var i = 0; i < quizOptionLi.length; i++) {
    quizOptionLi[i].style.pointerEvents = "visible";
    quizOptionLi[i].style.background = "transparent"

  }

  ////disable next btn///
  nextBtn.style.display = "none";



}

function optionFun(li) {
  // console.log(li.innerHTML)
  var currentAns = quesArr[quesCounter].correctAns;
  // console.log(currentAns)
  if (currentAns === li.innerHTML) {
    console.log("CORRECT ANS");
    scoreCounter++;
    li.style.background = "green"


  } else {
    console.log("Wrong ANS");
    wrongAnsCounter++;
    li.style.background = "red"

  }

  //disable All li options///
  for (var i = 0; i < quizOptionLi.length; i++) {
    quizOptionLi[i].style.pointerEvents = "none";
  }

  ////visible next btn///
  nextBtn.style.display = "block";
}


var min = document.getElementById("min")
console.log(min)
var sec = document.getElementById("sec")


var sec1 = 0
var min2 = 1

var interval = setInterval(function(){

    sec1++
    sec.innerHTML = sec1
    console.log(sec)
    if(sec1 === 60){
        min2--
        min.innerHTML = min2
    }
    if(min2 <= 0){
        clearInterval(interval)
        mainBox.style.display = "none";
        resultBox.style.display = "block";
    }


} , 1000);