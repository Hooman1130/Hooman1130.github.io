var tries = 0;
function quiz(qas) {
var score = 0;
var qs = 0;
var correct = "";
function question(q, a) {
    if (prompt(q).toLowerCase() == a.toLowerCase()) {
        alert("Correct!");
        score++;
    } else {
        alert("Incorrect.");
    }
    qs++;
    alert("So far, you've gotten "+score+" out of "+qs+" correct!")
    total = score / qs * 100;
    correct = correct + a + ", ";
}
for (i = 0; i<qas.length; i=i+2) {
    question(qas[i],qas[i+1]);
}
alert("Your overall score is "+total+"%!");
tries++;
alert("You have made " + tries + " attempts so far.");
if (confirm ("Try again?")) {
    quiz(qas);
}
if (confirm("Would you like to view the correct answers?")) {
    alert("The correct answers were "+correct);
}
alert("Thank you for taking the quiz!");
}
quiz(["27+27=12, true or false", "False","What is the square root of 289?", "17","What is the best anime (use the english acronym)", "AOT","You are alive, true or false", "True","I am more big brain than you. True or False.", "True","You are dead, true or false", "False","This website is really good, especially for someone who's almost a beginner at html and wrote all the code for the website, true or false.", "true","True or False, I am very experienced with JavaScript", "false","Omae wa mou shindeiru", "nani","You are already dead, true or false", "true"]);
