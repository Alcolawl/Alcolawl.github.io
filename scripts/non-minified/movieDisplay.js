$.get( "../xml/movielist.csv", function(input){
    var movielist = $.csv.toArrays(input);
    var link = '<a href="';
    var linkMid = '">';
    var linkEnd = "</a>";
    var output = "";

    for (var count = 1; count<movielist.length; count++)                        // Iterate through each movie / line of csv
    {
        var title = (movielist[count][0])                                       // Retreive Movie's Title                
        var scale = (movielist[count][2])                                       // Retreive Movie's Drunk Scale
        var url = (movielist[count][1])                                         // Retreive Movie's URL
        var runtime = (movielist[count][3])                                     // Retrieve Movie's Run Time
        var author = (movielist[count][4])                                      // Retrieve Movie's Blurb
        scale = "<td>" + scale + "</td>";                                       // <td>scale</td>
        title = "<td>" + link + url + linkMid + title + linkEnd + "</td>";      // <td><a href="url">title</a></td>
        runtime = "<td>" + runtime + "</td>";                                   // <td>runtime</td>

        var rowOut = scale + title + runtime;                          // Create and populate new row
        output = output + "<tr>" + rowOut + "</tr>";                            // Add new row to final output

    }
    document.getElementById("fullList").innerHTML = output;                     // Output HTML results to web page
})
