$( document ).ready(function() {
  // define timer variable that tracks by seconds
  var timeCount = 0;
  var interval;
  var buttonToggle = false;

  // make clock tick 
  function timer() {
    timeCount++;
    // convert to time HH-MM-SS
    var hours = Math.floor(timeCount / 3600);
    var minutes = timeCount % 3600;
    minutes = Math.floor(minutes / 60);
    var seconds = timeCount % 60;
    var time = "";
    if (hours === 0) {
      time += "";
    } else if (hours< 10 && hours > 0) {
      time += "0" + hours.toString() + ":";
    } else if (hours >= 1000) {
      hours.toString();
      
    } else {  
      time += hours.toString() + ":";
    };

    if (minutes< 10) {
      time += "0" + minutes.toString() + ":";
    } else {
      time += minutes.toString() + ":";
    };

    if (seconds < 10) {
      time += "0" + seconds.toString();
    } else {
      time += seconds.toString();
    }


   
    // update timer on DOM
    $("#codeClock").html(time);
  };

  // function timerDisplay ()

  //toggle on/off button function 
  $('.btn-toggle').click(function() {
    // toggle on/off 
    $(this).find('.btn').toggleClass('active'); 
    console.log(this);
    if (buttonToggle === false) {
        // start clock
        buttonToggle = true;
        interval = setInterval(timer, 1000);  
        console.log("here");
    } else if (buttonToggle === true) {
      // stop clock
      buttonToggle = false;
      clearInterval(interval);
      console.log("there");
    }
  });

});

