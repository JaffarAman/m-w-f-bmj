////get <ul>
var listBox = document.getElementById("listBox")
function addTodo(){
    var input = document.getElementById("input")
    // console.log(input.value)

    if(input.value.length > 2){
          ///create element and li text//
    var li = document.createElement("li")
    var liTxt = document.createTextNode(input.value)
    // li.innerHTML = input.value
    
    
    
    
    
    
    li.appendChild(liTxt)
    // console.log(li)

    ////create edit btn

    var editBtn = document.createElement("button")
    var editBtnTxt = document.createTextNode("EDIT")
    editBtn.setAttribute("onclick" , "editList(this)")
    editBtn.appendChild(editBtnTxt)
    // console.log(editBtn)
    li.appendChild(editBtn)
    ////create del btn 
    var delBtn = document.createElement("button")
    var delBtnTxt = document.createTextNode("DEL")
    delBtn.setAttribute("onclick" , "delList(this)")

    delBtn.appendChild(delBtnTxt)
    // console.log(delBtn)
    li.appendChild(delBtn)

    //li append in ul
    listBox.appendChild(li)

    input.value = ""  

    }else{
        alert("enter correct value")
    }


  

}

function delAll(){
            listBox.innerHTML = ""
    }

function editList(e){
    var litxt = e.parentNode.firstChild.nodeValue
    // console.log(litxt.nodeValue);
    var editLiTxt = prompt("EDIT TODO" , litxt )
    console.log(editLiTxt)
    e.parentNode.firstChild.nodeValue = editLiTxt
}
function delList(e){
    // console.log(e.parentNode)
    e.parentNode.remove()

}