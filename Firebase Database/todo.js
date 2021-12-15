const firebaseConfig = {
    apiKey: "AIzaSyCx3RlgP1v7ZpSHh9Y9w1gJXxUVxCKTR_0",
    authDomain: "mwfdatabase.firebaseapp.com",
    databaseURL: "https://mwfdatabase-default-rtdb.firebaseio.com",
    projectId: "mwfdatabase",
    storageBucket: "mwfdatabase.appspot.com",
    messagingSenderId: "528131022246",
    appId: "1:528131022246:web:e0cad20ad7eea3a38f0367"
};
const app = firebase.initializeApp(firebaseConfig);

// console.log(app.database);

var database = app.database()

var listBox = document.getElementById("listBox")
function addTodo() {
    var input = document.getElementById("input")
    // console.log(input.value)


    if (input.value.length > 2) {

        var key = database.ref("/").push().key

        var todoObj = {
            key : key,
            todo : input.value
        }

        database.ref("todos").child(key).set(todoObj)



        

        input.value = ""

    } else {
        alert("enter correct value")
    }




}


database.ref("todos").on("child_added" , function(data){
            console.log(data.val().key)
            ///create element and li text//
        var li = document.createElement("li")
        var liTxt = document.createTextNode(data.val().todo)
        // li.innerHTML = input.value






        li.appendChild(liTxt)
        // console.log(li)

        ////create edit btn

        var editBtn = document.createElement("button")
        var editBtnTxt = document.createTextNode("EDIT")
        editBtn.setAttribute("onclick", "editList(this)")
        editBtn.setAttribute("id" , data.val().key)
        editBtn.appendChild(editBtnTxt)
        // console.log(editBtn)
        li.appendChild(editBtn)
        ////create del btn 
        var delBtn = document.createElement("button")
        var delBtnTxt = document.createTextNode("DEL")
        delBtn.setAttribute("onclick", "delList(this)")
        delBtn.setAttribute("id" , data.val().key)

        delBtn.appendChild(delBtnTxt)
        // console.log(delBtn)
        li.appendChild(delBtn)

        //li append in ul
        listBox.appendChild(li)
})


function delAll(){
            listBox.innerHTML = ""
            database.ref("/todos").remove()

        }

function editList(e){
    var litxt = e.parentNode.firstChild.nodeValue
    // console.log(litxt.nodeValue);
    var editLiTxt = prompt("EDIT TODO" , litxt )
    console.log(editLiTxt)
    e.parentNode.firstChild.nodeValue = editLiTxt

    console.log(e.id)
    database.ref("todos").child(e.id).update({
        todo : editLiTxt
    })
}


function delList(e){
    console.log(e.parentNode)
    e.parentNode.remove()
    console.log(e.id)
    database.ref("todos").child(e.id).remove()

}