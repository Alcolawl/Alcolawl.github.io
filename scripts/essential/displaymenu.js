$(document).ready(function () {
    var click = 0;
    var menu = document.getElementById('navMenu');

    $("#hamburger").click(function () {
        if (click == 1)                         //display menu on first click
        {
            /*document.getElementById('hamburger').src="/images/hamburger.gif";*/
            menu.style.visibility = 'hidden';
            click = 0;
        }
        else                                    //hide menu on second click
        {
            /*document.getElementById('hamburger').src="/images/hamburger_active.gif";*/
            menu.style.visibility = 'visible';
            click = 1;
        }     
    });
});


