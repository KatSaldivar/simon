$(document).ready(function(){
  var random = [];//holds the 20 randomly generated numbers when game is turned on
  var litID = [];//holds the randomly generated button order for comparison
  //var lit;//adds the light when the button is pressed
  var clicked = [];//records the butons the user has clicked
  var i;
  var j = 0;
  var count =1;
  var on;//the length of time the button is pressed
  var off;//the empty space between buttons playing
  var strict;//stores strict value when strict button is pressed to check if its turned on
  var x;

$("#start").hide();//hides start button so it isn't pressed 1st by accident

  function change1 (){//DISPLAYS COMPUTER OUTPUT
   off = 300;//sets the ammount of space between buttons
   on = 500;//sets the ammount of time the button is pressed
   x = setInterval(function(){//https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    if (random[j] == 1) {
      $('#greenOne').removeClass('dark');
      $('#audio1')[0].play();
      litID.push(1);//pushes button value to litID arr
      setTimeout(function () {//https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
        $('#greenOne').addClass('dark');
      }, off);
    }
    else if (random[j] == 2) {
      $('#redTwo').removeClass('dark');
      $('#audio2')[0].play();
      litID.push(2);
      setTimeout(function () {
        $('#redTwo').addClass('dark');
      }, off);
    }
    else if (random[j] == 3) {
      $('#yellowThree').removeClass('dark');
      $('#audio3')[0].play();
      litID.push(3);
      setTimeout(function () {
        $('#yellowThree').addClass('dark');
      }, off);
    }
    else {
      $('#blueFour').removeClass('dark');
      $('#audio4')[0].play();
      litID.push(4);
      setTimeout(function () {
        $('#blueFour').addClass('dark');
      }, off);
    }
    j++;
    if (j>=count) {
      clearInterval(x);
    }
  }, on);
 }

 function checking() {//COMPARES CLICKED ARR WITH COMPUTER'S ARR
   if (litID.length == clicked.length) {//checks if computer and user pressed the same ammount of buttons
     if (litID.join() == clicked.join()) {//checks if the user input matches what the computer had
      if (count == 20) {//if you get 20 correct, it ends the game
       setTimeout(function () {
         alert("You win!");//congrats user on winning
         location.reload(true);//refreshes the page
       }, 1000);
      }else{//updates the info   //checks if input is correct if the game is still going
       setTimeout(function () {
         $('#count').text(count + 1);
         count++;
         litID = [];
         clicked = [];
         j = 0;
         change1();
       }, 1000);
      }
   }else{//checks if the user input doesn't match the computers
     if (strict==1){//if strict is on and you got it wrong
       location.reload(true);//refreshes the page
     }else{//if you're playing easy mode
       setTimeout(function () {
         $('#count').text("!!");//alerts user it was wrong
         litID = [];
         clicked = [];
         j = 0;
         change1();
       }, 1000);
     }
   }
  }
 }

 //BEGIN BUTTON FUNCTIONS:

 $("#on").on("click", function(){//TURNS THE GAME ON
   $("#start").show();//shows start button
   $("#count").text("--")//count shows dashes
   for (var i=0;i<20; i++){//generates a random sequence of 20 numbers 1-4 and pushes to random arr
     random[i] = Math.ceil(Math.random()*4);
   }
   $("#on").hide();//hides on button
 });

  $("#strict").on("click", function(){//TURNS STRICT MODE ON
    strict=1;
    $("#strict").addClass("neon");//changes text color to let user know its on
  });

  $("#start").on("click", function(){//BEGINS GAME
    $("#count").text(count);//shows the count
    $("#start").hide();//hides start button
    change1(); //runts the change function
  });

  $("#off").on("click", function(){//TURNS GAME OFF
    location.reload(true);//refreshes the page
  });

  //LETS THE USER PLAY
  $("#greenOne").on("click", function(){//GREEN BUTTON
    $("#greenOne").removeClass("dark");//removes css opacity setting
    $("#audio1")[0].play();
    clicked.push(1);//pushes button value to the arr that stores user input
    setTimeout(function(){//changes the color back after 1sec after button is pressed
      $("#greenOne").addClass("dark");
    }, 250);
    checking();//runs function to check user input with computer input.
  });

   $("#redTwo").on("click", function(){//RED BUTTON
    $("#redTwo").removeClass("dark");//removes css opacity setting
    $("#audio2")[0].play();
    clicked.push(2);//pushes button value to the arr that stores user input
    setTimeout(function(){//restores css opacity setting after 1sec after button is pressed
      $("#redTwo").addClass("dark");
    }, 250);
    checking();//runs function to check user input with computer input.
  });

  $("#yellowThree").on("click", function(){//YELLOW BUTTON
    $("#yellowThree").removeClass("dark");//removes css opacity setting
    $("#audio3")[0].play();
    clicked.push(3);//pushes button value to the arr that stores user input
    setTimeout(function(){//restores css opacity setting after 1sec after button is pressed
      $("#yellowThree").addClass("dark");
    }, 250);
    checking();//runs function to check user input with computer input.
  });

  $("#blueFour").on("click", function(){//BLUE BUTTON
    $("#blueFour").removeClass("dark");//removes css opacity setting
    $("#audio4")[0].play();
    clicked.push(4);//pushes button value to the arr that stores user input
    setTimeout(function(){//restores css opacity setting after 1sec after button is pressed
      $("#blueFour").addClass("dark");
    }, 250);
    checking();//runs function to check user input with computer input.
  });
});
