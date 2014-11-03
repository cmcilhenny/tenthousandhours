$(document).ready(function() {
  // define timer variable that tracks by seconds
  var timeCount = 33;
  var interval;
  var buttonToggle = false;
  var percentAchieved = 0;
  var goalInHours = 1;
  var goalInSeconds = goalInHours * 3600;

  // make clock tick 
  function timer() {
    // clock tick
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
      // todo: add comma when hours reach four digits
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
    // update progress bar
    trackProgress();
  };

  function trackProgress() {
    // calculate percent of progress
    percentAchieved = Math.floor(timeCount/goalInSeconds * 100);
    // reach into DOM and update progress
    var bar = document.querySelector("#bar-of-progress");
    bar.textContent = percentAchieved.toString() + "%";
    bar.setAttribute("style", "width: " + percentAchieved + "%");
  }
  // initial call on page load for bar progress
  trackProgress();
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

