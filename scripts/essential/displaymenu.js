$(document).ready(function () {
    var click = 0;
    var div = document.getElementById('hamburger');
    var menu = document.getElementById('navMenu');

    $("#hamburger").click(function () {
        if (click == 1)                         //display menu on first click
        {
            div.style.backgroundColor = '#222222';
            menu.style.visibility = 'hidden';
            click = 0;
        }
        else                                    //hide menu on second click
        {
            div.style.backgroundColor = '#00C9FF';
            menu.style.visibility = 'visible';
            click = 1;
        }     
    });
});


