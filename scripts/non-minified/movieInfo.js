$(window).on('load', function() {
    $.get( "../../xml/movielist.csv", function(input){
        var movielist = $.csv.toArrays(input);
        var img = '<img src="';
        var imgEnd = '"/>';

        for (var count = 1; count<movielist.length; count++)                                // Iterate through each movie / line of csv
        {
            var title = (movielist[count][0])                                               // Retreive Movie's Title

            if (title == document.title) {                                                  // If title = the page's Title
                var scale = (movielist[count][2])                                           // Retreive Movie's Drunk Scale
                var runtime = (movielist[count][3])                                         // Retrieve Movie's Run Time

                switch(scale){
                    case '3':
                        scale = "../../images/drunkscale/three.png";
                        break;
                    case '3.5':
                        scale = "../../images/drunkscale/threehalf.png";
                        break;
                    case '4':
                        scale = "../../images/drunkscale/four.png";
                        break;
                    case '4.5':
                        scale = "../../images/drunkscale/fourhalf.png";
                        break;
                    case '5':
                        scale = "../../images/drunkscale/five.png";
                        break;
                    case '5.5':
                        scale = "../../images/drunkscale/fivehalf.png";
                        break;
                    case '6':
                        scale = "../../images/drunkscale/six.png";
                        break;
                    case '6.5':
                        scale = "../../images/drunkscale/sixhalf.png";
                        break;
                    case '7':
                        scale = "../../images/drunkscale/seven.png";
                        break;
                    case '8':
                        scale = "../../images/drunkscale/eight.png";
                        break;
                    default:
                        break;
                }

                scale = img + scale + imgEnd;                                                // Set HTML for DrunkScale image
                $("#drunkscale").html(scale);                                                // Output Drunk Scale to Page
                runtime = "Run Time: " + runtime;
                $("#runtime").html(runtime);                                                 // Output Runtime to Page
            }
        }
    })
})