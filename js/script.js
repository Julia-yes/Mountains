document.addEventListener("DOMContentLoaded", function(event) { 
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".h-list");

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("hamburger_close");
    nav.classList.toggle("h-list_phone");
    body.classList.toggle("modal-window");
  });

  

  // let windiwScreen = () => {
  //   if (window.screen.width < 768) {$.scrollify.disable()}
  // };

  // window.addEventListener('resize', () => {windiwScreen()})

});



