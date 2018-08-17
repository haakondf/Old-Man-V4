var position;
var positionKamfer; 
var speed = 30;
var checkForcandy = null;
var player;





$(document).ready(function(){
    player = $("#player").position();
    positionKamfer = $('.kamfer').position();

    $('.background2').hide();
    $('#player').hide();
    $('#hospital').hide();
    $('.kamfer').hide();


    // start game, welcome screen
    $('#playbutton').click(function(){
        $('.background1').hide();
        $('.background2').show();
        
        displayStuff();
        //setInterval(cKamfer, 15000); //  a candy arrives every in intervals
        cKamfer();
        

    })

    function displayStuff (){
        $('#player').show();
        $('#hospital').show();
    }


    // random generator
    function getRandNumber(number) {
        return Math.floor(Math.random() * number );
    }

    // random  kamfer
    function cKamfer () {
        $('.kamfer').show();
        var left = getRandNumber(1200);
        var top = getRandNumber(800);
        $('.kamfer').css('left', left + 'px')
        $('.kamfer').css('top', top + 'px')
    }
    // cKamfer()
    // setInterval(cKamfer, 5000);
    


        // moving the player
    $(document).keydown(function(e){

        function isCandyGrabbed() {
    // set interval for scouting the area
    if 
    
    (
        (
            ( ( position.left + 45 >= $('.kamfer').position().left )  && ( position.left + 45 <= $('.kamfer').position().left + 50) )
            ||
            ( ( position.left >= $('.kamfer').position().left )  && ( position.left <= $('.kamfer').position().left + 50) ) 
        )
        &&
        (
            ( ( position.top + 125 >= $('.kamfer').position().top )  && ( position.left + 125 <= $('.kamfer').position().top + 100) )
            ||
            ( ( position.top >= $('.kamfer').position().top + 100 )  && ( position.top <= $('.kamfer').position().top) )
        )
    )
    
    {
        console.log( "========I grabbed the candy!!!==========" )
        speed + 15;
        //clearInterval( checkForcandy )
    }
}

        var position = $("#player").position();
        // console.log("position -->", position);

        switch (e.keyCode) {
        
        case 65: // a // left
        $("#player").css('left', position.left - speed + 'px'); // add transition, but how
        // if (topPos > 800) topPos = 800;
        break;
        
        case 87: // w // up
        $("#player").css('top', position.top - speed + 'px');
        break;
            
        case 68: // d // right
        $('#player').css('left', position.left + speed + 'px');
        break;
        
        case 83: // s // down
        $('#player').css('top', position.top + speed + 'px');
        break;  
        
    }

    isCandyGrabbed()

    // border for the map
        if (position.left < 0) {
            $('#player').css('left', 0);
        }
        if (position.left > 1165) { 
            $('#player').css('left', 1165);
        }
        if (position.top < 0) {
            $('#player').css('top', 0);
        }
        if (position.top > 680) {
            $('#player').css('top', 680);
        }

        // if (
        //     (
        //         ( ( position.left + 45 >= $('.kamfer').position().left )  && ( position.left + 45 <= $('.kamfer').position().left + 50) )
        //         ||
        //         ( ( position.left >= $('.kamfer').position().left )  && ( position.left <= $('.kamfer').position().left + 50) ) 
        //     )
        //     &&
        //     (
        //         ( ( position.top + 125 >= $('.kamfer').position().top )  && ( position.left + 125 <= $('.kamfer').position().top + 100) )
        //         ||
        //         ( ( position.top >= $('.kamfer').position().top + 100 )  && ( position.top <= $('.kamfer').position().top) )
        //     )
        // ) 
        
        
        // && position.left <= 680 && position.top >= 600)  {
            // console.log("===========================================================================================box?")
            //console.log("left", position.left)
            //console.log("top",position.top)
            // if ( $('.kamfer') ) {
            //     console.log( "$('.kamfer').position() -->", $('.kamfer').position() )
            // }

    })
})


