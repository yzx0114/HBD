(function ($) {
    var newLocation = '';

    $('.intro').click(function(event) {
      event.preventDefault();
      newLocation = './index.html';
      console.log(newLocation);
      $('body').fadeOut(1000, newpage);
    });

    $('.contact').click(function(event) {
      event.preventDefault();
      newLocation = './contact.html';
      console.log(newLocation);
      $('body').fadeOut(1000, newpage);
    });
    
    $('.cover').click(function(event) {
      event.preventDefault();
      newLocation = '../index.html';
      console.log(newLocation);
      $('body').fadeOut(1000, newpage);
    });

    function newpage() {
      window.location = newLocation;
    }
    
  })(jQuery);
  