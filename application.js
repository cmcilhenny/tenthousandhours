$( document ).ready(function() {
  console.log( "ready!" );
  $('.btn-toggle').click(function() {
    // toggle on/off 
    $(this).find('.btn').toggleClass('active'); 
    if ($(this).find('.btn-primary').length>0) {
        $(this).find('.btn').toggleClass('btn-primary');
    }
    $(this).find('.btn').toggleClass('btn-default');

  });
  // grab time text
  var codeSeconds = $("#codeClock").text();
  //set time to zero
  //TODO:  
  codeSeconds = 0;
  // make clock tick 
  function timer() {

    codeSeconds++;
    // convert to time HH-MM-SS
    var hours = Math.floor(codeSeconds / 3600);
    codeSeconds %= 3600;
    var minutes = Math.floor(codeSeconds / 60);
    var seconds = codeSeconds % 60;
    var time = "0" + hours + ":" + minutes + ":" + seconds;

    // update timer to new time
    $("#codeClock").html(time);
    
  };
  // make clock tick every second
  window.setInterval(timer, 1000);

});

