var firebaseConfig = {
    apiKey: "AIzaSyBFLAAaTwSemKgknFOZEJioiJhvIxwA7ek",
    authDomain: "lets-chat-web-app-399c3.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-399c3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-399c3",
    storageBucket: "lets-chat-web-app-399c3.appspot.com",
    messagingSenderId: "505530155394",
    appId: "1:505530155394:web:f258339a5bdd87745d4f9b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("username");
var roomname = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

pname = message_data['name'];
likes = message_data['likes'];
umessage = message_data['message'];

nametag = "<h3>"+pname+"</h3>";
messagetag = "<h4 class='message_h4'>"+umessage+"</h4>";
buttontag = "<button id="+firebase_message_id+" onclick='liking(this.id)' class='btn btn-warning'>";
spantag = "<span class='glyphicon glyphicon-thumbs-up'></span>&nbsp;Like: "+likes+"</button><hr>";
row = nametag + messagetag + buttontag + spantag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();


function show_name()
{
    roomname = localStorage.getItem("room_name");
    document.getElementById("welcome_head").innerHTML = "Welcome to Room " + roomname;
}

function send()
{
    msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name: user_name,
            message: msg,
            likes: 0
      });

      document.getElementById("msg").value = " ";
}

function logout()
{
    window.location = "index.html";
}

function liking(message_id)
{
      console.log("message id is- "+ message_id)
      button_id = message_id;
      numoflikes = document.getElementById(button_id).value;
      updatedlikes = Number(numoflikes) + 1;
      console.log(updatedlikes);

      firebase.database().ref(roomname).child(message_id).update({
            likes: updatedlikes
      });
}
