// Dennis Magnusson 2018 (c)

$(document).ready(function(){

  var wrapperMenu = $('.wrapper-menu');
  var navMenu = $('.navMenu');

  var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        navMenu.hide()
        is_mobile = true;

    } else {
      // Jumping Arrow
      setInterval(function(){
        animateArrow();
      }, 3000);

      // Scroll Animations
      $('#arrowDown').on('click', scrollToPortfolio)
      $('#toPortfolio').on('click', scrollToPortfolio)
      $('#toAbout').on('click', scrollToAbout)
      $('#toContact').on('click', scrollToContact)
    }


  wrapperMenu.click(function(){
    wrapperMenu.toggleClass('open');
    // navMenu.toggleClass('showing');
    if ( navMenu.is( ":hidden" ) ) {
    navMenu.slideDown("fast")
  } else {
    navMenu.slideUp("fast");
  }

  });
  $('#submit-form').on('click', function(){
    var nameField = $('#name-input');
    var emailField = $('#email-input');
    var messageField = $('#message-field');
    var warning = $('#warning')
    if(nameField.val || emailField.val() || messageField.val()){

      if (emailField.val().indexOf('@') > -1 || emailField.val().indexOf('.') > -1) {

        // Go through

      }
      else {
        emailField.css('border-color', 'red')
        warning.html('Fill in valid email')
      }

    } else {
      $('footer').css('background-color', 'red')
    }
  });


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
