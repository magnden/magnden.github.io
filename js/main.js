// Dennis Magnusson 2018 (c)

$(document).ready(function(){

  var wrapperMenu = $('.wrapper-menu');
  var navMenu = $('.navMenu');
  navMenu.hide();

  wrapperMenu.click(function(){
    wrapperMenu.toggleClass('open');
    // navMenu.toggleClass('showing');
    if ( navMenu.is( ":hidden" ) ) {
    navMenu.slideDown("fast")
  } else {
    navMenu.slideUp("fast");
  }

  });

  var is_mobile = false;


});

$( window ).resize(function() {
  // Check if client is mobile
  if( $('.navMenu').css('display')=='flex') {
      is_mobile = true;
  }

  if (is_mobile == true) {



    // Jumping Arrow
    setInterval(function(){
      animateArrow();
    }, 3000);

    // Scroll Animations
    $('#arrowDown').on('click', scrollToPortfolio)
    $('#toPortfolio').on('click', scrollToPortfolio)
    $('#toAbout').on('click', scrollToAbout)
    $('#toContact').on('click', scrollToContact)

    $('#submit-form').on('click', function(){
      var nameField = $('#name-input');
      var emailField = $('#email-input');
      var messageField = $('#message-field');
      if(nameField.val || emailField.val() || messageField.val()){

        if (emailField.val().indexOf('@') > -1 || emailFieldval().indexOf('.') > -1) {
          $('footer').css('background-color', 'green')
        }
        else {
          $('footer').css('background-color', 'red')
        }

      } else {
        $('footer').css('background-color', 'red')
      }
    });


  };
});

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 180) {
    $("#topHeader").css("box-shadow" , "0px 4px 51px #ccc");
  }

  else{
    $("#topHeader").css("box-shadow" , "none");
  }
})

function scrollToPortfolio(){
  $('html, body').animate({
  scrollTop: $("section#portfolio").offset().top -130
  }, 500);
  $('#toPortfolio').addClass('current');
  $('#toAbout').removeClass('current');
  $('#toContact').removeClass('current');

}
function scrollToAbout(){
  $('html, body').animate({
  scrollTop: $("section#main-section").offset().top
  }, 500);
  $('#toPortfolio').removeClass('current');
  $('#toAbout').addClass('current');
  $('#toContact').removeClass('current');
}
function scrollToContact(){
  $('html, body').animate({
  scrollTop: $("section#skills").offset().top + 200
  }, 500);
  $('#toPortfolio').removeClass('current');
  $('#toAbout').removeClass('current');
  $('#toContact').addClass('current');
}

function animateArrow(){
  $('#arrowDown').addClass('bounce animated');
  setTimeout(function(){
    $('#arrowDown').removeClass('bounce animated')
  }, 1000)
}
