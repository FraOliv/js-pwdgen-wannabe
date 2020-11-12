var PlayerName = prompt("What's your name?");
var PlayerSurname = prompt("What's your Surname?");
var Age = prompt("How old are you?")
var FavColour = prompt("What's your favorite colour?");
var Sex = prompt("Are you a Boy or a Girl?");
var Password = PlayerName + PlayerSurname + Age + FavColour + Sex + "20";
var CurrentYear = 2020;
var YoB = CurrentYear - Age;


document.getElementById ("Greetings").innerHTML = "Ciao " + PlayerName + " " +  PlayerSurname + " Se i dati che  ci hai fornito sono veritieri sei nato nel " + YoB;

document.getElementById("random_password").innerHTML =  Password;