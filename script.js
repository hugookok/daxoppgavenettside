//for navnliste
var users = JSON.parse(localStorage.getItem('nameslist')) || [];
var valueChanger = 1;
//for random nummer
let d = new Date();
let seconds = d.getSeconds();

document.getElementById("randomnumber").innerHTML = Math.floor(Math.random() * 1000);
document.getElementById("demo").innerHTML = JSON.parse(localStorage.getItem('nameslist'));

function addValue() {
  users.unshift("Takk " + document.getElementById('myText').value + "   ");  
  localStorage.setItem('nameslist', JSON.stringify(users));
  document.getElementById("demo").innerHTML = JSON.parse(localStorage.getItem('nameslist'));
  document.getElementById("welcome").innerHTML = "Velkommen til nettsiden, " + document.getElementById("myText").value;
  document.getElementById("myText").value = "";

}   

function printtime(){
    let d = new Date();
    let seconds = d.getSeconds();
    console.log(seconds);
    if(seconds == 59) {
        document.getElementById("randomnumber").innerHTML = Math.floor(Math.random() * 1000);
    }
    setTimeout(printtime, 1000);
}

printtime();
