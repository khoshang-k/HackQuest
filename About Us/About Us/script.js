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

