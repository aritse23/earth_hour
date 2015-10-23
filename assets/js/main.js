$(document ).ready(function() {

    // set the date we're counting down to
    var target_date = new Date('Mar, 19, 2016,20:30:00').getTime();

    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown = document.getElementById('countdown');
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
     
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         
        // format countdown string + set tag value
        countdown.innerHTML = '<span class="days">' + days +  '</span>:<span class="hours">' + hours + '</span>:<span class="minutes">'
        + minutes + '</span>:<span class="seconds">' + seconds + '</span>';  
     
    }, 1000);
// ==========Set grayscale when clicking OFF=========
    $(".switch_off").click(function(){
        //adjusts grayscale value via css filter to show a "turn off" effect
        $(".grayscale").css({
            "-webkit-filter":"grayscale(100%)",
            "filter":"grayscale(0%)",
            "filter":"gray",
            "transition":"all 1s ease-in-out"
        });
        //after delay, slides the modal background down slowly
        $(".nav_modal").delay(1000).animate({
            opacity:1,
            top:0         
        },"slow");
        //after delay, slides nav buttons down slowly
        $(".nav_bar").delay(1500).animate({
            opacity:1,
            top:0
        },"slow");
    });
    // ===========Click Nav Button==========
    $(".nav_bar a").click(function(){
        //after clicking on a nav, modal slides upwards and not visible
        $(".nav_modal").delay(800).animate({
            opacity:0,
            top:-1000
        },"slow");
        //after clicking on a nav, nav buttons slides upwards and not visible
        $(".nav_bar").delay(400).animate({
            opacity:0,
            top:-1000
        },"slow");
    });
// ================Click Home button=====================
    $(".home_butt").click(function(event){
        //clicking home button changes the grayscale value back to 0 so color will be visible again
        event.preventDefault();
        $(".grayscale").css({
            "-webkit-filter":"grayscale(0%)",
            "filter":"grayscale(0%)",
            "filter":"gray",
            "transition":"all 5s ease-in-out"
        });
    });
// ================Click Who button=====================
    
    
    $(".about_butt").click(function(event){        
        event.preventDefault();
        //slides Who section from the left of screen
        $(".about").delay(800).animate({
            opacity:1,
            left:0
        },"slow");
    });

    // ===============Click Exit Button in Who=================
    $(".exit_about").click(function(){
        //clicking exit slides the Who section back to the left and invisible
        $(".about").delay(400).animate({
            opacity:0,
            left:-2000
        },"slow");
        //then delays and slides down modal
        $(".nav_modal").delay(800).animate({
            opacity:1,
            top:0         
        },"slow");
        //then slides down nav buttons
        $(".nav_bar").delay(1200).animate({
            opacity:1,
            top:0
        },"slow");
    });

// ================Click How button=====================
    
    
    $(".how_butt").click(function(event){
        event.preventDefault();
        //slides How section from the left of screen
        $(".how").delay(800).animate({
            opacity:1,
            left:0
        },"slow");
    });

// ===============Click Exit Button in How=================
    $(".exit_how").click(function(){
        //clicking exit slides the How section back to the left and invisible
        $(".how").delay(400).animate({
            opacity:0,
            left:-2000
        },"slow");
        //then delays and slides down modal
        $(".nav_modal").delay(800).animate({
            opacity:1,
            top:0         
        },"slow");
        //then slides down nav buttons
        $(".nav_bar").delay(1200).animate({
            opacity:1,
            top:0
        },"slow");
    });

});