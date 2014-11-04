$(document).ready(function() {
  // define timer variable that tracks by seconds
  var timeCount = 3600000; //user.timeCount;
  var interval; //move into onClick function?
  var buttonToggle = false;
  var percentAchieved = 0;
  var goalInHours = 10000;
  var goalInSeconds = goalInHours * 3600;
  var session = 0;


// seed data
  var user = {
  id: 3,
  timeCount: 3600,
  sessions: [
    {
      timeStart: Date.now() - 1000000,
      sessionLength: 360
    },
    {
      timeStart: Date.now() - 200000000,
      sessionLength: 3600
    },
    {
      timeStart: Date.now() - 1200000,
      sessionLength: 4800
    }
  ],
  name: "Joe"
  }

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
    // } else if (hours >= 1000) {
    //   hours.toString();
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
    $("#totalTime").html(time);
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

  function totalTimeToday() {
    var today = new Date().setHours(0,0,0,0);
    var sessionsToday = [];

    // pull out the session objects from today from user object
    for (var i=0; i<user.sessions.length; i++) {
      var checkDate = new Date(user.sessions[i].timeStart).setHours(0,0,0,0);
      if (today === checkDate) {
        sessionsToday.push(user.sessions[i]);
      }
    }
    // add up all seconds from today
    var secondsToday = 0;
    for (var i=0; i<sessionsToday.length; i++) {
      secondsToday += sessionsToday[i].sessionLength;
    }
    // convert seconds into hours, mins, sec
    var hours = Math.floor(secondsToday / 3600);
    var minutes = secondsToday % 3600;
    minutes = Math.floor(minutes / 60);
    var seconds = secondsToday % 60;
    var timeToday = hours + ":" + minutes + ":" + seconds;
    $("#timeToday").html(timeToday);
  }
 
  function sessionTime() {

  }

  //toggle on/off button function 
  $('.btn-toggle').click(function() {
    // toggle on/off 
    $(this).find('.btn').toggleClass('active'); 
    console.log(this);
    if (buttonToggle === false) {
        // start clock
        buttonToggle = true;
        interval = setInterval(timer, 1000);  
        totalTimeToday();
        console.log("here");
    } else if (buttonToggle === true) {
      // stop clock
      buttonToggle = false;
      clearInterval(interval);
      console.log("there");
    }
  });

});

