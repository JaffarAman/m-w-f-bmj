// const firebaseConfig = {
//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: ""
// };
// const app = firebase.initializeApp(firebaseConfig);

// console.log(app.database);



// function sendData() {
    // app.database().ref("/user").set(  {
    //         name : "jaffar",
    //         age : 20
    // }  )
    // var username = document.getElementById("username")
    // var userObj = {
    //     name : username.value,
    //     age : 20,
    //     gender : "Male",
    //     class : "Web And mobile",
    //     section : "Morning"

    // }
    // app.database().ref("/users").push(userObj)
//     var username = document.getElementById("username")
//     var userAge = document.getElementById("userAge")
//     var userID = document.getElementById("userID")

//     var key = app.database().ref("/").push().key
//     // console.log(key); 
//     var stdObj = {
//         username: username.value,
//         userAge: userAge.value,
//         userID: userID.value,
//         key : key
//     }

//     app.database().ref("stdData").child(key).set(stdObj)



// }


// app.database().ref("stdData").once("child_added" , function(data){

//         console.log("data" , data.val())

// }

// )

// app.database().ref("/stdData").on("value" , function(data){
//         console.log("data" , data.val())
    
// })



// firebase.database().ref("stdData").child("101").remove()

// firebase.database().ref("stdData").child("-MqwisvY69v3WgicJ80h").update({
//     username : "Aman"
// })
