// Dennis Magnusson 2018 (c)

$(document).ready(function(){

  var wrapperMenu = $('.wrapper-menu');
  var navMenu = $('.navMenu');
  $('#warning').hide();

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

  $('#submit-form').click(function(){
    var nameField = $('#name-input');
    var emailField = $('#email-input');
    var messageField = $('#message-field');
    var warning = $('#warning')
    if(nameField.val().length > 3 && messageField.val().length > 3){

      if (validateEmail(emailField.val())) {

        $('form').submit();
        nameField.val('');
        emailField.val('');
        messageField.val('');
        warning.slideDown()
        warning.html('Email sent!');
        warning.css('background', '#63d488')

        setTimeout(function(){
          warning.slideUp()
        }, 5000)}

      else {
        warning.html('Double Check your email');
        warning.slideDown();


      }

    }
    else {
      warning.html('Fill In all the fields');
      warning.slideDown();
    }
  });


});

// add header shadow when scrolling past top text
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 180) {
    $("#topHeader").css("box-shadow" , "0px 4px 51px #ccc");
  }

  else{
    $("#topHeader").css("box-shadow" , "none");
  }
})

function liveCheckEmail(){
  $('#email-input').css('border-color', '#EA2027');
  if (validateEmail($('#email-input').val())) {
    $('#email-input').css('border-color', '#63d488');
  }
}

function liveCheckName(){
  $('#name-input').css('border-color', '#EA2027');
  var val = $('#name-input').val()
  if (val.length > 1) {
    $('#name-input').css('border-color', '#63d488');
  }
}
function liveCheckMessage(){
  $('#message-field').css('border-color', '#EA2027');
  var val = $('#message-field').val()
  if (val.length > 10) {
    $('#message-field').css('border-color', '#63d488');
  }
}

function validateEmail(email){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function scrollToPortfolio(){
  $('html, body').animate({
  scrollTop: $("section#portfolio").offset().top -100
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
  scrollTop: $("section#contact").offset().top -100
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
