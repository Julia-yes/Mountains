document.addEventListener("DOMContentLoaded", function(event) { 
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".h-list");

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("hamburger_close");
    nav.classList.toggle("h-list_phone");
    body.classList.toggle("modal-window");
  });

  let windiwScreen = () => {
    console.log (window.screen.width)
    if (window.screen.width > 768) {var myFullpage = new fullpage('#fullpage', {           
        navigation: true,
        })}
    else {
      fullpage_api.destroy();
    }
  }

  window.addEventListener('resize', () => {windiwScreen()})

});



