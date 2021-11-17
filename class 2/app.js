
// function greet( userName = "" )
// {
//     //statements////
//     // alert("HELLO" + " " + userName)
//     console.log("Mouse button pr hai")

// }


// function outEvent (){

//     console.log("Mouse button sy bahir agaya hai... ")

// }



// function addition(){

//     var times = +prompt("How many numbers?") 

//     if(times <= 10){
//         var value = 0

//         for(var i = 0 ; i<times ; i++){
//             value  +=  +prompt("ENTER VALUE's: " + (i+1)  )
    
//         }
//         alert("YOUR ANS IS:" + " " + value)
//     }
//     else{
//         alert("TATA Bye bye Khatam")
//     }
   


    // var num1 = prompt("ENTER VALUE 1")
    // var num2 = prompt("ENTER VALUE 2")

    // alert("YOUR ANSWER IS: " + (  +num1   +  +num2 ))

// }



// function sub(){
//     var num1 = prompt("ENTER VALUE 1")
//     var num2 = prompt("ENTER VALUE 2")

//     alert("YOUR ANSWER IS: " + (  num1   -  num2 ))

// }




// function mul(){
//     var num1 = prompt("ENTER VALUE 1")
//     var num2 = prompt("ENTER VALUE 2")

//     alert("YOUR ANSWER IS: " + (  num1   *  num2 ))

// }


// function div(){
//     var num1 = prompt("ENTER VALUE 1")
//     var num2 = prompt("ENTER VALUE 2")

//     alert("YOUR ANSWER IS: " + (  num1   /  num2 ))

// }







function valueChange(){
    console.log("value change horhi hai input ki")
}


// document.write("<select>")

// document.write("<option>" + "iphone 11"  + "</option>")
// document.write("<option>" + "iphone 12"  + "</option>")
// document.write("<option>" + "iphone 13"  + "</option>")

// document.write("</select>")



// ///focus
// function input1 (para){

//     console.log(para)

//     para.style.backgroundColor = "black"
//     para.style.color = "white"
//     // var  inputElement = document. getElementById("myinput");

//     // inputElement.style.backgroundColor = "grey"

//     // console.log(inputElement)



// }


// //blur
// function input2 (para){


//     // para.style.backgroundColor = "green"
    
//     var inputElement = document.getElementById("myinput")

//     inputElement.value = "JAFFAR"

//     // inputElement.style.backgroundColor = "lightgreen"

//     // inputElement.disabled    = true

//     // console.log("BLUR...")
 
    

// }


// function inputValue(){

//     var inputElement = document.getElementById("myinput");

//     console.log(inputElement.value)


// }


/////calc JS////

function getValue(num){

    var input = document.getElementById("input1")
    
    input.value +=   num

    // console.log(input)

}

function results (){

    var input = document.getElementById("input1")
    //get
    var res  = eval(input.value)
    
    ///set
    input.value = res



}


function allClear(){
    var input = document.getElementById("input1")
    input.value = ""   
}

function oneClear(){
    var input = document.getElementById("input1")

    // console.log(input.value.slice(0 , -1))

    input.value = input.value.slice(0 , -1)

}