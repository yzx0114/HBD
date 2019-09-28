(function ($) {
    var newLocation = '';

    $('.intro').click(function(event) {
      event.preventDefault();
      newLocation = './index.html';
      console.log(newLocation);
      $('body').fadeOut(1000, newpage);
    });

    $('.gallery').click(function(event) {
      event.preventDefault();
      newLocation = './gallery.html';
      console.log(newLocation);
      $('body').fadeOut(1000, newpage);
    });
    
    $('.cover').click(function(event) {
      event.preventDefault();
      newLocation = '../index.html';
      console.log(newLocation);
      $('body').fadeOut(1000, newpage);
    });

    $('.submit').click(function(event) {
      alert('哆啦已經收到你的訊息囉！');
    });

    function newpage() {
      window.location = newLocation;
    }
    
  })(jQuery);
  