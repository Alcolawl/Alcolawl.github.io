// Dynamically displays all movies that start with the selected letter

function go(choice){

    $("#results").css("display", "table");  //Reveals table with results, was previously hidden via CSS

    $.get( "../xml/movielist.csv", function(input){
        var movielist = $.csv.toArrays(input);
        var output = "";
        var header = '<tr><th class="nopad" width="15%">Drunk Scale</th><th class="nopad" width="70%">Title</th><th class="nopad" width="15%">Run Time</th></tr>';

        for (var count = 1; count<movielist.length; count++)                            // Iterate through each movie / line of csv
        {
            var title = (movielist[count][0])                                           // Retreive Movie's Title

            // If the movie title begins with "A " or "The "
            if ((title.substring(0, 2) == "A ") || (title.substring(0, 4) == "The ")){
                if (title.substring(0, 2) == "A "){
                    var fullTitle = title;
                    title = title.replace("A ","")                                      // Trim "A " from the title
                }
                else{
                    var fullTitle = title;
                    title = title.replace("The ","")                                    // Trim "The " from the title
                }
            }else{var fullTitle = title}                                                // Otherwise continue on with the full title

            if ((title.substring(0, 1).charCodeAt()) > choice.charCodeAt()){break;}     // Stop looping if passed the letter

            // If the chosen letter (choice) matches the (potentially trimmed) title
            if (choice == title.substring(0, 1))
            {
                output += buildTable(movielist, fullTitle, count);
            }
            // If the movie starts with a number
            else if (choice == "Num" && (title.substring(0, 1).charCodeAt()) >= 48 && (title.substring(0, 1).charCodeAt()) <= 57)
            {
                output +=buildTable(movielist, fullTitle, count);
            }
        }
        document.getElementById("results").innerHTML = header + output;                 // Output HTML results to web page
    })
}

function buildTable(movielist, title, count){

    var scale = (movielist[count][2])                                       // Retreive Movie's Drunk Scale
    var url = (movielist[count][1])                                         // Retreive Movie's URL
    var runtime = (movielist[count][3])                                     // Retrieve Movie's Run Time
    var author = (movielist[count][4])                                      // Retrieve Movie's Blurb
    scale = "<td>" + scale + "</td>";                                       // <td>scale</td>
    title = '<td><a href="' + url + '">' + title + "</a></td>";             // <td><a href="URL">title</a></td>
    runtime = "<td class=\"runtime\">" + runtime + "</td>";                 // <td>runtime</td>

    var rowOut = scale + title + runtime;                                   // Create and populate new row
    var output = "<tr>" + rowOut + "</tr>";                                 // Add new row to final output

    return output
}