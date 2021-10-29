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



function taketoRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function show_name()
{
    var username = localStorage.getItem("username");
    document.getElementById("welcome_head").innerHTML = "Welcome " + username;

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("all_rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log("RoomNames", Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='taketoRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("all_rooms").innerHTML+= row;
       //End code
       });});}
    getData();
}

function logout()
{
    window.location = "index.html";
}

function newRoom()
{
    rname = document.getElementById("new_room").value;
    localStorage.setItem("room_name", rname);

    firebase.database().ref("/").child(rname).update({
        purpose: "adding room name"
    });

    window.location = "chat_page.html";
}