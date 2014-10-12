$( document ).ready(function() {
  // define timer variable that tracks by seconds
  var seconds = 0;
  var interval;

  // make clock tick 
  function timer() {
    seconds++;
    // convert to time HH-MM-SS
    var hours = Math.floor(seconds / 3600);
    var minutes = seconds % 3600;
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    var time = hours + ":" + minutes + ":" + seconds;

    // update timer on DOM
    $("#codeClock").html(time);
  };

  //toggle on/off button function 
  $('.btn-toggle').click(function() {
    // toggle on/off 
    $(this).find('.btn').toggleClass('active'); 

    if ($(this).find('.btn-primary').length>0) {
        $(this).find('.btn').toggleClass('btn-primary');
        // start clock
        interval = setInterval(timer, 1000);
     
    }
    $(this).find('.btn').toggleClass('btn-default');

  });

});

