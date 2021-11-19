// alert("HELLO CLASS..")



// function getValue(){
    
//     var input = document.getElementById("input1")
//     console.log(input) 
     

// }


// function getpara(){
//     var para = document.getElementById("para");
//     // console.log(para.innerHTML)
//     para.innerHTML = "WELCOME"
      
// }



// var paraText = "ipsum dolor sit amet consectetur,adipisicing elit. Aperiam reiciendis excepturi, reprehenderit eligendi iusto aliquid itaque odit ipsum modi unde exercitationem ipsam tempora dignissimos esse quae. Necessitatibus sed quo eius."


          

// function seeMore(){

//     var para = document.getElementById("para1")
//     var showPara = document.getElementById("showPara")
//     para.innerHTML  = showPara.innerHTML


// }

// function colorChange(){

//     var newPara = document.getElementById("newPara")
//     // console.log(newPara ) 
//     // newPara.style.cssFloat = "green"
//     // newPara.style.color = "white"
//     var colorInp = prompt("ENTER PARA Bg color")
//     newPara.style.backgroundColor = colorInp



// }


// function hide(){
        
//         var carImg = document.getElementById("carImg");
//         // console.log(carImg.className)
//         // carImg.className = "hidden"
        



        
// }


// function imgControl (imgClass){

//     var carImg = document.getElementById("carImg");

//         console.log(imgClass);


//     carImg.className += " bigImg"


// }


// function  changeImg(e){
//     var myImg = document.getElementById("myImg")
//     // console.log(myImg.src);

//     if(e.innerHTML === "IMAGE 1"){
//         myImg.src = "./images/car2.jpg"
//         e.innerHTML = "IMAGE 2"
//     }else{
//         myImg.src = "./images/car1.jpg"
//         e.innerHTML = "IMAGE 1"        
//     }


    

// }




// function bulbImg(){

//     var myImg = document.getElementById("myImg")
//     myImg.src = "./images/on.gif"


// }

// function offBulb(){

//     var myImg = document.getElementById("myImg")
//     myImg.src = "./images/off.gif"


// }


// function toggler(e , element){
//     console.log(element);
//     if(e == 0){
//         element.src = "./images/off.gif"
//     }else{
//         element.src = "./images/on.gif"

//     }


// }




    // var paras = document.getElementsByTagName("p");

    // console.log(paras)


// for(var i = 0 ; i < paras.length ; i++){

//     paras[i].style.color = "red"

// }


var myDiv = document.getElementById("myDiv")
console.log(myDiv)
var spParas = myDiv.getElementsByTagName("p")
console.log(spParas)