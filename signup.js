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

function back()
{
    window.location = "login.html";
}

function signup()
{
    username = document.getElementById("user_name").value;
    password = document.getElementById("password").value ;
    if ( username == "" && password == "")
    {
        document.getElementById("required").innerHTML = "*Please enter both a password and username"
    } else 
    {
        localStorage.setItem( username, password);
        localStorage.setItem("username", username);
        window.location = "room.html";
    }
    
}