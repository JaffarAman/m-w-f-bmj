// alert("HELLO CLASS....")


// function getInput(){
//     var input = document.getElementById("input1")
//     // console.log(input.value);

//     input.value = "Jaffar"


// }


// function getPara (){

//     var para = document.getElementById("para")
//     // para.style.color = "red"
//     // para.style.backgroundColor = "black"

//     para.className += " p1"



// }




// var p = document.getElementsByTagName("p")

// console.log(p)


// p[1].style.color = "red"


// for(var i = 0 ; i < p.length ; i++){
//     p[i].style.backgroundColor = "red"
// }



// var p = document.getElementsByTagName("p")


// var div1 = document.getElementById("div1")
// console.log(div1)

// var p = div1.getElementsByTagName("p")
// console.log(p)
// for(var i = 0 ; i<p.length ; i++){
//     console.log(p[i].innerHTML)

// }


    /////////setInterval() OR setTimeOut()///////

// console.log(1)    




// console.log(3)    


// setTimeout(function(){

//     console.log(2)    


// }, 5000);





// function  timer(){

//     console.log(22)


// }


// setInterval( timer  ,  500   );



// var counter = 0

// var interval =  setInterval(function(){
    
//     console.log(counter++)


// } , 1000)




// setTimeout(function(){

//     clearInterval(interval)


// } , 10000)



var minPara = document.getElementById("min")
var secPara = document.getElementById("sec")
var msecPara = document.getElementById("msec")




var  min = 0
var  sec = 0
var  msec = 0

var interval ;



function timer(){
    msec++
    msecPara.innerHTML = msec
    if(msec == 100){
        sec++
        secPara.innerHTML = sec
        msec = 0
    }else if(sec == 60){
        min++
        minPara.innerHTML = min
        sec = 0
    }

}



function start(){
    var startBtn = document.getElementById("startBtn")
    interval = setInterval(  timer , 10);
    startBtn.disabled = true

}


function stop(){
    clearInterval(interval)
}


function reset(){
    clearInterval(interval)

minPara.innerHTML = "00"
secPara.innerHTML = "00"
msecPara.innerHTML = "00"
min = 0
sec = 0
msec = 0
}