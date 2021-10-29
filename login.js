function help()
{
    window.location = "signup.html";
}

function signin()
{
    username = document.getElementById("user_name").value;
    password = document.getElementById("password").value ;
    if ( username == "" && password == "")
    {
        document.getElementById("required").innerHTML = "*Please enter both a password and username"
    } else 
    {
        get_username = localStorage.getItem("username");
        store_username = localStorage.getItem(get_username);
        
        if (store_username == password)
        {
            window.location = "room.html";
        } else 
        {
            document.getElementById("required").innerHTML = "*Incorrect username or password"
        }
    }
    
}