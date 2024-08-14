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


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
