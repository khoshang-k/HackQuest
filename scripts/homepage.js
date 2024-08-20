var countDownDate = new Date("Aug 24, 2024 10:00:00").getTime();
var d = setInterval(function () {
    var now = new Date().getTime();
    var dif = countDownDate - now;
    if (dif < 0) {
        document.getElementById("day").innerHTML = 0;
        document.getElementById("hour").innerHTML = 0;
        document.getElementById("min").innerHTML = 0;
        document.getElementById("sec").innerHTML = 0;
    }
    else {
        var days = Math.floor(dif / (1000 * 60 * 60 * 24));
        var hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((dif % (1000 * 60)) / 1000);
        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("min").innerHTML = minutes;
        document.getElementById("sec").innerHTML = seconds;
    }
}, 1000);

const blob = document.querySelector("[data-blob]");

window.addEventListener("mousemove", function(e){
  const posX = e.clientX;
  const posY = e.clientY;

  blob.style.left = `${posX}px`;
  blob.style.top = `${posY}px`;

  blob.animate({
    left: `${posX}px`,
    top: `${posY}px`  
  }, {duration:500, fill: "forward"})
})

