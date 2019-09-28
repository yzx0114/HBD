(function ($) {

  "use strict";

  $(document).ready(function() {

      days = $("#days").text();
      hours = $("#hours").text();
      minutes = $("#minutes").text();
      seconds = $("#seconds").text();
  
  });

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
    

    // MENU
    $('.menu-burger').on('click', function() {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    });


    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/home.jpg' },
            // { src: 'images/slide-image02.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

    var newLocation = '', name = '';
    $('.submitButton').click(function(event) {
      name = document.getElementById("name").value;
      if (days != '00' || hours != '00' || minutes != '00' || seconds != '00') {
          event.preventDefault();
          console.log(days + hours + minutes + seconds);
          alert("It's not time yet.");
          return;
      } else if (name != '159.8') {
          event.preventDefault();
          console.log(name);
          alert("The password is wrong. THINK MORE PLEASE!");
          return;
      }
      event.preventDefault();
      newLocation = './main/index.html';
      console.log(newLocation);
      $('body').fadeOut(1000, newpage);
    });

    function newpage() {
      window.location = newLocation;
    }

})(jQuery);
