// byId///
// var para = document.getElementById("para");
// console.log(para)


// byTagName///

// var p = document.getElementsByTagName("p");
// console.log(p)
// // var para3 = p[2].style.color = "red" 

// var div1 = document.getElementById("div1")
// var divPara = div1.getElementsByTagName("p")
// console.log(divPara[0])


///BYClassName///
// var headings = document.getElementsByClassName("headings")

// // console.log(headings[2])
// for (var index = 0; index < headings.length; index++) {

//         if(index == 1 ){
//             continue
//         }else{
//             headings[index].style.color = "red"

//         }

    
// }






// var body = document.childNodes[1].childNodes[2]
// console.log(body)



// var pappa = document.getElementById("pappa")

// console.log(pappa.childNodes.length)

// var firstChild = pappa.firstChild
// console.log(firstChild.nodeType)
// console.log(firstChild.nextSibling.innerHTML)



// var para1 = document.getElementById("para1");

// var checkClass  = para1.hasAttribute("class")
// console.log(checkClass)

// var setClass = para1.setAttribute("class" , "p1")

// var classValue = para1.getAttribute("class")

// console.log(classValue)


// var input1 = document.getElementById("input1")
// input1.set
// console.log(input1.attributes.length)




// var h1 = document.createElement("p")
// // console.log(h1)
// var h1Text = document.createTextNode("H1 Heading")
// console.log(h1Text)

// h1.appendChild(h1Text)
// console.log(h1)





// var root = document.getElementById("root")
// console.log(root    )
// var p = document.createElement("p")
// // var pText = document.createTextNode("PARA 1")
// p.innerHTML = "HELLO WORLD"
// // console.log(pText)

// // p.appendChild(pText)
// console.log(p)

// p.setAttribute("class" , "newPara")

// root.appendChild(p)



// var newDiv = document.getElementById("newDiv")
// // console.log(newDiv)

// var firstChild = newDiv.firstElementChild.nextElementSibling
// console.log(firstChild);

function targetPara(){
    var para = document.getElementById("p10")
    // para.classList.remove("para1")
    para.classList.add("hide")
    console.log(para)
}