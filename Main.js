function Add_User(){
    var User_Name=document.getElementById("user_name").Value
    localStorage.setItem("apple", User_Name);
    window.location="kwitter_room.html"
}