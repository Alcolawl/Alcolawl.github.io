$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "../xml/movielist.xml",
        dataType: "xml",
        success: function (xml) {
            var x = 1;
            var cell = "<td>";
            var cellEnd = "</td>";
            var link = '<a href="';
            var linkMid = '">';
            var linkEnd = "</a>";

            $(xml).find('movie').each(function () {
                var scale = $(this).find('drunkscale').text()                                 //Retreive Movie's Drunk Scale
                scale = cell + scale + cellEnd;                                               //<td>scale</td>
                var title = $(this).find('title').text()                                      //Retreive Movie's Title
                var url = $(this).find('link').text()                                         //Retreive Movie's URL
                title = cell + link + url + linkMid + title + linkEnd + cellEnd;              //<td><a href="url">title</a></td>
                var runtime = $(this).find('runtime').text()                                  //Retrieve Movie's Run Time
                runtime = cell + runtime + cellEnd;                                           //<td>runtime</td>
                var author = $(this).find('author').text()                                    //Retrieve Movie's Blurb
                author = cell + author + cellEnd;                                             //<td>author</td>
                var output = scale + title + runtime + author;                                //Create Output Block
                $(".movie" + x).html(output);                                                 //Output to Cell
                x++;
            })
        }
    })
});