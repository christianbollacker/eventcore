$(function() {
  $('#resume').hide();
  $('#sample-projects').hide();

  $('#tab-one').on('click', function() {
    $('#tab-one').addClass('active');
    $('#tab-two').removeClass('active');
    $('#tab-three').removeClass('active');
    $('#resume').hide();
    $('#sample-projects').hide();
    $('#cover-letter').fadeIn('fast');
  });

  $('#tab-two').on('click', function() {
    $('#tab-two').addClass('active');
    $('#tab-one').removeClass('active');
    $('#tab-three').removeClass('active');
    $('#cover-letter').hide();
    $('#sample-projects').hide();
    $('#resume').fadeIn('fast');
  });

  $('#tab-three').on('click', function() {
    $('#tab-three').addClass('active');
    $('#tab-one').removeClass('active');
    $('#tab-two').removeClass('active');
    $('#cover-letter').hide();
    $('#resume').hide();
    $('#sample-projects').fadeIn('fast');
  });

})