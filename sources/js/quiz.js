var tries = 0;
function quiz() {
var score = 0;
var questions = 0;
var correct = "";
function question(q, a) {
    if (prompt(q).toLowerCase() == a.toLowerCase()) {
        alert("Correct!");
        score++;
    } else {
        alert("Incorrect.");
    }
    questions++;
    alert("So far, you've gotten "+score+" out of "+questions+" correct!")
    total = score / questions * 100;
    correct = correct + a + ", ";
}
question("27+27=12, true or false", "False");
question("What is the square root of 289?", "17");
question("What is the best anime (use the english acronym)", "AOT");
question("You are alive, true or false", "True");
question("I am more big brain than you. True or False.", "True")
question("You are dead, true or false", "False");
question("This website is really good, especially for someone who's almost a beginner at html and wrote all the code for the website, true or false.", "true");
question("True or False, I am very experienced with JavaScript", "false");
question("Omae wa mou shindeiru", "nani");
question("You are already dead, true or false", "true");
alert("Your overall score is "+total+"%!");
tries++;
alert("You have made " + tries + " attempts so far.");
if (confirm ("Try again?")) {
    quiz();
}
if (confirm("Would you like to view the correct answers?")) {
    alert("The correct answers were "+correct);
}
alert("Thank you for taking the quiz!");
}
quiz();
