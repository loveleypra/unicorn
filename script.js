function myfunction()
{
    var un= document.forms["form"]["uname"].value;
    var pw= document.forms["form"]["psw"].value;
    if (pw=="1234")
    {
        window.location.href="home.html";

    }
    else
    {
        alert("incorrect username and password ");
    }
}
