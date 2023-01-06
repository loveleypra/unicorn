function myfunction()
{
    var un= document.forms["form"]["uname"].value;
    var pw= document.forms["form"]["psw"].value;
    if (un=="1234" &&  pw=="1234")
    {
        window.location.href="home.html";

    }
    else
    {
        alert("invalid  username and password ");
    }
}