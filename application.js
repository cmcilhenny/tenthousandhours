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
  // var codeSeconds = $("#codeClock").text();
  var codeSeconds = 0;
  
  // convert text into seconds 
  function timeToSeconds(timeAsText) {
    // split time string into hours, minutes and seconds
    var timeArray = codeSeconds.split(":", 3);
    // convert hours/mins/secs into ints
    var   hours = parseInt(timeArray[0], 10);
        minutes = parseInt(timeArray[1], 10);
        seconds = parseInt(timeArray[2], 10);
    // convert hours into seconds
    hours = hours * 3600;
    console.log(hours);
    // convert mins into seconds
    minutes = minutes * 60;
    console.log(minutes);
    // add everything for total seconds
    codeSeconds = hours + minutes + seconds;
    console.log(codeSeconds);
    return codeSeconds;
  };

  // timeToSeconds(codeSeconds);

  // make clock tick 
  function timer() {
    codeSeconds++;
    // convert to time HH-MM-SS
    var hours = Math.floor(codeSeconds / 3600);
    var minutes = codeSeconds % 3600;
    minutes = Math.floor(codeSeconds / 60);
    var seconds = codeSeconds % 60;
    var time = hours + ":" + minutes + ":" + seconds;

    // update timer to new time
    $("#codeClock").html(time);
    
    
  };
  // make clock tick every second
  window.setInterval(timer, 1000);

});

