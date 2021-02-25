var errorSound = new Audio('https://www.myinstants.com/media/sounds/erro.mp3');
document.querySelector("h1.head").onclick = function() {
    errorSound.play();
    alert('40w04! Oh noes! It seems this page is invalid! Press "ok" to continue. Louis is waiting for you.');
}