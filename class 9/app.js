// function callModal(name , price , img){
//     var prodName = document.getElementById("prodName")
//     var prodPrice = document.getElementById("prodPrice")
//     var prodImg = document.getElementById("prodImg")

//     prodName.innerHTML = name
//     prodPrice.innerHTML = price
//     prodImg.src = img

// }

// var arr = [1,2,3]
// console.log(arr[1])

// var std1 = {
//     stdName : "Talha" ,
//     stdAge : 21 ,
//     isOnline : true,
//     result : undefined
// }
// console.log(obj.name)

// console.log(stdObj.stdName)
// console.log(std1.stdName)
// console.log(std1.stdAge)
// console.log(std1.isOnline)
// console.log(std1.result)

////empty object////

// var std = {
//   StdName: "Talha",
//   stdAge: 20,
//   class: "Web & Mobile devp",
//   section: "All Section",
//   progress: 0,
// };

///delete prop in obj using delete keyword///

// delete  std.progress
// console.log(std)

////nested obj/////

// var stdObj = {
//     stdName : "Umer",
//     stdAge : 17,
//     stdClass : "Web & Mobile",
//     section : "Morning section",
//     marks : {
//         html : 60,
//         css : 65,
//         js : 50
//     }
// }

// // var check = "stdName" in stdObj

// // console.log(check)

// var stdName = document.getElementById("stdName")
// var stdAge = document.getElementById("stdAge")
// var stdClass = document.getElementById("stdClass")
// var stdHtml = document.getElementById("stdHtml")
// var stdCss = document.getElementById("stdCss")
// var stdJs = document.getElementById("stdJs")

// stdName.innerHTML = stdObj.stdName
// stdAge.innerHTML = stdObj.stdAge
// stdClass.innerHTML = stdObj.stdClass
// stdHtml.innerHTML = stdObj.marks.html
// stdCss.innerHTML = stdObj.marks.css
// stdJs.innerHTML = stdObj.marks.js

////check prop in obj///

// var obj = {
//     firstName : "Ali"
// }

// var check = "lastName" in obj
// console.log(check)

////Array in obj ??///

// var std1 = {
//   stdName: "Umer",
//   stdAge: 17,
//   stdClass: "Web & Mobile",
//   section: "Morning section",
//   subjects : [ , "css" , "js"],
//   marksArr : [50 , 60 , 70]

// };

// std1.result = "true"

// console.log(std1)
// console.log(std1.subjects[0] , std1.marksArr[0])



// var stdResult = {
//     stdName : "Umer",
//     stdClass : "Web& mobile",
//     htmlMarks : 80,
//     cssMarks : 85,
//     jsMarks : 60,
//     addition : function(){
//          return this.htmlMarks + this.cssMarks + this.jsMarks
//     },
//     percentage : function(){
//         var  totalMarks = this.htmlMarks + this.cssMarks + this.jsMarks
//         return (totalMarks / 300) * 100

//     } 
    
// }



// console.log(stdResult.addition())
// console.log(stdResult.percentage())

