$(function () {
    $.ajax({
        type: "GET",
        url: "../xml/movielist.xml",
        dataType: "xml",
        success: function (xml) {
            var img = '<img src="';
            var imgEnd = '"/>';

            $(xml).find('movie').each(function () {
                var title = $(this).find('title').text()                                      //Retreive Movie's Title
                if (title == document.title) {                                                //If title = the page's Title
                    var scale = $(this).find('drunkscale').text()                             //Retreive Movie's Drunk Scale
                    var runtime = $(this).find('runtime').text()                              //Retrieve Movie's Run Time


                    if (scale == "3")                                                            //If statements to create img for drunkscale
                        scale = img + "../../images/drunkscale/three.png" + imgEnd;
                    if (scale == "3.5")
                        scale = img + "../../images/drunkscale/threehalf.png" + imgEnd;
                    if (scale == "4")
                        scale = img + "../../images/drunkscale/four.png" + imgEnd;
                    if (scale == "4.5")
                        scale = img + "../../images/drunkscale/fourhalf.png" + imgEnd;
                    if (scale == "5")
                        scale = img + "../../images/drunkscale/five.png" + imgEnd;
                    if (scale == "5.5")
                        scale = img + "../../images/drunkscale/fivehalf.png" + imgEnd;
                    if (scale == "6")
                        scale = img + "../../images/drunkscale/six.png" + imgEnd;
                    if (scale == "6.5")
                        scale = img + "../../images/drunkscale/sixhalf.png" + imgEnd;
                    if (scale == "7")
                        scale = img + "../../images/drunkscale/seven.png" + imgEnd;
                    if (scale == "8")
                        scale = img + "../../images/drunkscale/eight.png" + imgEnd;


                    $("#drunkscale").html(scale);                                                 //Output Drunk Scale to Page
                    runtime = "Run Time: " + runtime;
                    $("#runtime").html(runtime);                                                  //Output Runtime to Page
                }
            })
        }
    })
});

