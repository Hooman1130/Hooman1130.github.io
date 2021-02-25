setInterval(()=>{
    var d = new Date();
    console.log(document.querySelector("p.time#clock").innerText);
    document.querySelector("p#clock.time").innerText = d;
},250);