// alert("HELLO WORLD")


// var obj = {
//     name : "Jaffar"
// }


// console.log(obj.name)




var std = {
    stdName : "Talha",
    StdAge : 21,
    stdSection : "Morning",
    StdClass : "Web and Mobile"
}

// console.log(std["StdAge"])

// console.log(std.StdAge)
// console.log(std.stdName)

///for in////

// for(var key in std){

//     console.log(key , std[key])


// }




////METHOD////


// FUNCTION IN OBJECT


// var std1 = {
//     stdName : "Talha",
//     stdId : 102,
//     stdClass : "Web and Mobile",
//     StdMarks : {
//         html : 85,
//         css : 65,
//         bootstrap : 50,
//         js : 30
//     },
//     totalMarks : function(){
//         var marksCalc = this.StdMarks.html + this.StdMarks.css +
//          this.StdMarks.bootstrap + this.StdMarks.js
//         return marksCalc
//     },
//     percentage : function(){
//         var obtMarks =  this.totalMarks()
//         // console.log("total marks" , total)
//         return ((obtMarks / 400 ) * 100).toFixed(2)
//     }
        


// }
 


// var std1 = {
//     stdName : "Talha",
//     stdId : 102,
//     stdClass : "Web and Mobile",
//     StdMarks : {
//         html : 85,
//         css : 65,
//         bootstrap : 50,
//         js : 30
//     },
//     totalMarks : function(){
//             var obtMark = 0
//             for(var key in this.StdMarks ){
//                 // console.log(this.StdMarks[key])
//                 obtMark += this.StdMarks[key]
//             }
//             return obtMark
//     },
//     percentage : function(){
//         var obtMarks =  this.totalMarks()
//         // console.log("total marks" , total)
//         return ((obtMarks / 400 ) * 100).toFixed(2)
//     }
        


// }

// console.log(std1.totalMarks())
 


// Constructors///


// function Std(name , id , className){

//     this.name = "Jaffar"
//     this.id = 200


// }

// var std1 = new Std()
// console.log(std1)



// function Std(name , id , section){

//         this.propName = name
//         this.propId = id
//         this.propSection = section


// }


// var std1 = new Std("umer" , 405 , "web and mobile")
// var std2 = new Std("Talha" , 420 , "web and mobile")

// console.log(std1)
// console.log(std2)




// function Std(name , id , section){

//         this.stdName = name
//         this.stdId = id
//         this.stdSection = section
//         this.addition = function(value1 , value2){
//             return value1 + value2
//         }

// }


// var std1 = new Std("Jaffar" , 20 , "web & mobile")
// var std2 = new Std("Umer" , 20 , "web & mobile")
// console.log(std1.addition(50 , 10))


// hasOwnProperty

// var obj = {
//     lastProp : "yes yes"
// }


// // var check = "lastProp" in obj
// var check = obj.hasOwnProperty("lastProp")
// console.log(check)

