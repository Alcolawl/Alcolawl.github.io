function go(choice){

    $("#results").css("display", "table");  //Reveals table with results, was previously hidden via CSS

    $.get( "../xml/movielist.csv", function(input){
        var movielist = $.csv.toArrays(input);
        var link = '<a href="';
        var linkMid = '">';
        var linkEnd = "</a>";
        var output = "";
        var header = '<tr><th class="nopad" width="15%">Drunk Scale</th><th class="nopad" width="70%">Title</th><th class="nopad" width="15%">Run Time</th></tr>';

        for (var count = 1; count<movielist.length; count++)                            // Iterate through each movie / line of csv
        {
            var title = (movielist[count][0])                                           // Retreive Movie's Title

            // If the chosen letter (choice) is a T, we must do some extra checking
            if (choice == 84)
            {
                // If the movie title begins with a "T", proceed
                if (choice == title.substring(0, 1).charCodeAt()){
                    // Does the movie begin with the word "The"?
                    if (title.substring(0, 3) == "The"){
                        // If the movie starts with "The" but the second word does not start with a "T", iterate the loop
                        if (title.substring(0, 5) != "The " + String.fromCharCode(choice)){continue;}
                    }
                }
            }

            // If the chosen letter (choice) is a A, we also must do some extra checking
            if (choice == 65)
            {
                // If the movie title begins with a "A", proceed
                if (choice == title.substring(0, 1).charCodeAt()){
                    // If the movie title begins with "A ", proceed
                    if (title.substring(0, 2) == "A "){
                        // If the movie starts with "A" but the second word does not start with a "A", iterate the loop
                        if (title.substring(0, 3) != "A " + String.fromCharCode(choice)){continue;}
                    }
                }
            }

            // If the chosen letter (choice) matches the title (movielist[count][0]) or begins with an A or THE + the chosen letter
            if ((choice == title.substring(0, 1).charCodeAt()) || (title.substring(0, 3) == "A " + String.fromCharCode(choice)) || (title.substring(0, 5) == "The " + String.fromCharCode(choice)))
            {
                
                var scale = (movielist[count][2])                                       // Retreive Movie's Drunk Scale
                var url = (movielist[count][1])                                         // Retreive Movie's URL
                var runtime = (movielist[count][3])                                     // Retrieve Movie's Run Time
                var author = (movielist[count][4])                                      // Retrieve Movie's Blurb
                scale = "<td>" + scale + "</td>";                                       // <td>scale</td>
                title = "<td>" + link + url + linkMid + title + linkEnd + "</td>";      // <td><a href="url">title</a></td>
                runtime = "<td class=\"runtime\">" + runtime + "</td>";                 // <td>runtime</td>

                var rowOut = scale + title + runtime;                                   // Create and populate new row
                output = output + "<tr>" + rowOut + "</tr>";                            // Add new row to final output
            }

            if (choice == 35 && (title.substring(0, 1).charCodeAt()) >= 48 && (title.substring(0, 1).charCodeAt()) <= 57)     //If the movie starts with a number
            {
                
                var scale = (movielist[count][2])                                       // Retreive Movie's Drunk Scale
                var url = (movielist[count][1])                                         // Retreive Movie's URL
                var runtime = (movielist[count][3])                                     // Retrieve Movie's Run Time
                var author = (movielist[count][4])                                      // Retrieve Movie's Blurb
                scale = "<td>" + scale + "</td>";                                       // <td>scale</td>
                title = "<td>" + link + url + linkMid + title + linkEnd + "</td>";      // <td><a href="url">title</a></td>
                runtime = "<td class=\"runtime\">" + runtime + "</td>";                 // <td>runtime</td>

                var rowOut = scale + title + runtime;                                   // Create and populate new row
                output = output + "<tr>" + rowOut + "</tr>";                            // Add new row to final output
            }
        }
        document.getElementById("results").innerHTML = header + output;                 // Output HTML results to web page
    })
}