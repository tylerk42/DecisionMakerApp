var outputString = "OMG soooo cute!";
//this will set the content of the html element with the id output equal to the value of my variable called output string//
document.getElementById("output").innerHTML = outputString;
//add code here to create a new variable that will store the number of likes
var numlikes=0;
//display the value of numlikes on screen//
document.getElementById("likes").innerHTML= numlikes;

function getText() {
  //saves what the user types into the text box to the variable comment
  var comment = document.getElementById("log").value;
  //add code here to display the new comment on the screen

// prints the value of comment to console
console.log(comment)
// updates the value of outputString to include the new comment and a line break
outputString= outputString + "<br>"+comment;
//show the new value of output string on the screen
document.getElementById("output").innerHTML=outputString;
}


function increaseLikes(){
  //add code here to increase the number of likes and show the updated value on the screen
numlikes=numlikes+1;
console.log(numlikes);
//show the updated value on the screen
document.getElementById("likes").innerHTML= numlikes;
  
}

function decreaseLikes(){
  //add code here to decrease the number of likes and show the updated value on the screen
numlikes=numlikes-1;
console.log(numlikes);
document.getElementById("likes").innerHTML= numlikes;
  
}