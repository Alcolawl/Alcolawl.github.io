function go(choice) {

    var nextChar = choice;
    nextChar++;

    $.ajax({
        type: "GET",
        url: "../xml/movielist.xml",
        dataType: "xml",
        success: function (xml) {
            var link = '<a href="';
            var linkMid = '">';
            var linkEnd = "</a>";
            var output = "";
            var finalize = '<tr><th class="center" width="25%">Drunk Scale (1-7)</th><th class="center" width="50%">Title</th><th class="center" width="10%">Run Time</th><th class="center">Author</th></tr>';

            $(xml).find('movie').each(function ()                                                 //For each <Movie> tag, retrieve the following:
            {
                var title = $(this).find('title').text()                                          //Retreive Movie's Title

                if ((choice == title.substring(0, 1).charCodeAt()) || (title.substring(0, 3) == "A " + String.fromCharCode(choice)))     //If the first letter of the movie starts with the user's chosen letter OR If the movie starts with A_ and the user's chosen letter
                {
                    var scale = $(this).find('drunkscale').text()                                 //Retreive Movie's Drunk Scale
                    scale = "<td>" + scale + "</td>";                                             //<td>scale</td>
                    var url = $(this).find('link').text()                                         //Retreive Movie's URL
                    title = "<td>" + link + url + linkMid + title + linkEnd + "</td>";            //<td><a href="url">title</a></td>
                    var runtime = $(this).find('runtime').text()                                  //Retrieve Movie's Run Time
                    runtime = "<td>" + runtime + "</td>";                                         //<td>runtime</td>
                    var author = $(this).find('author').text()                                    //Retrieve Movie's Blurb
                    author = "<td>" + author + "</td>";                                           //<td>author</td>
                    var rowOut = scale + title + runtime + author;
                    output = output + "<tr>" + rowOut + "</td>";
                }

                if ((title.substring(0, 5) == "The " + String.fromCharCode(choice)))              //If the movie starts with The_ and the user's chosen letter
                {
                    var scale = $(this).find('drunkscale').text()
                    scale = "<td>" + scale + "</td>";
                    var url = $(this).find('link').text()
                    title = "<td>" + link + url + linkMid + title + linkEnd + "</td>";
                    var runtime = $(this).find('runtime').text()
                    runtime = "<td>" + runtime + "</td>";
                    var author = $(this).find('author').text()
                    author = "<td>" + author + "</td>";
                    var rowOut = scale + title + runtime + author;
                    output = output + "<tr>" + rowOut + "</td>";
                }

                if (choice == 90) { document.getElementById("results").innerHTML = finalize + output; }     //If the user chose the letter "Z", use this condition to break the loop instead. Special Case!
                if (choice == 83)                                                                           //If the user chose the letter "S", use this condition to break the loop instead. Special Case!
                {
                    if ((title.substring(0, 5) == "The T")) {
                        document.getElementById("results").innerHTML = finalize + output;
                        return false;
                    }
                }
                else if ((String.fromCharCode(nextChar) == title.substring(0, 1)) && (title.substring(0, 5) != "The " + String.fromCharCode(choice))) //Otherwise exit normally
                {
                    document.getElementById("results").innerHTML = finalize + output;
                    return false;
                }
            })
        }
    })
};

function tCase(choice) {

    var nextChar = choice;
    nextChar++;

    $.ajax({
        type: "GET",
        url: "../xml/movielist.xml",
        dataType: "xml",
        success: function (xml) {
            var link = '<a href="';
            var linkMid = '">';
            var linkEnd = "</a>";
            var output = "";
            var finalize = '<tr><th class="center" width="25%">Drunk Scale (1-7)</th><th class="center" width="50%">Title</th><th class="center" width="10%">Run Time</th><th class="center">Author</th></tr>';

            $(xml).find('movie').each(function ()                                                 //For each <Movie> tag, retrieve the following:
            {
                var title = $(this).find('title').text()                                          //Retreive Movie's Title

                if ((title.substring(0, 3) == "A " + String.fromCharCode(choice)) || (title.substring(0, 5) == "The " + String.fromCharCode(choice)))          //If the movie starts with A_ OR The_ and the user's chosen letter 
                {
                    var scale = $(this).find('drunkscale').text()                                 //Retreive Movie's Drunk Scale
                    scale = "<td>" + scale + "</td>";                                             //<td>scale</td>
                    var url = $(this).find('link').text()                                         //Retreive Movie's URL
                    title = "<td>" + link + url + linkMid + title + linkEnd + "</td>";            //<td><a href="url">title</a></td>
                    var runtime = $(this).find('runtime').text()                                  //Retrieve Movie's Run Time
                    runtime = "<td>" + runtime + "</td>";                                         //<td>runtime</td>
                    var author = $(this).find('author').text()                                    //Retrieve Movie's Blurb
                    author = "<td>" + author + "</td>";                                           //<td>author</td>
                    var rowOut = scale + title + runtime + author;
                    output = output + "<tr>" + rowOut + "</td>";
                }

                if ((choice == title.substring(0, 1).charCodeAt()) && (title.substring(0, 4) != "The "))          //If the movie starts with A_ OR The_ and the user's chosen letter 
                {
                    var scale = $(this).find('drunkscale').text()                                 //Retreive Movie's Drunk Scale
                    scale = "<td>" + scale + "</td>";                                             //<td>scale</td>
                    var url = $(this).find('link').text()                                         //Retreive Movie's URL
                    title = "<td>" + link + url + linkMid + title + linkEnd + "</td>";            //<td><a href="url">title</a></td>
                    var runtime = $(this).find('runtime').text()                                  //Retrieve Movie's Run Time
                    runtime = "<td>" + runtime + "</td>";                                         //<td>runtime</td>
                    var author = $(this).find('author').text()                                    //Retrieve Movie's Blurb
                    author = "<td>" + author + "</td>";                                           //<td>author</td>
                    var rowOut = scale + title + runtime + author;
                    output = output + "<tr>" + rowOut + "</td>";
                }


                if ((String.fromCharCode(nextChar) == title.substring(0, 1)) && (title.substring(0, 5) != "The " + String.fromCharCode(choice))) {
                    document.getElementById("results").innerHTML = finalize + output;
                    return false;
                }
            })
        }
    })
};

function numCase() {

    var nextChar = "A";

    $.ajax({
        type: "GET",
        url: "../xml/movielist.xml",
        dataType: "xml",
        success: function (xml) {
            var link = '<a href="';
            var linkMid = '">';
            var linkEnd = "</a>";
            var output = "";
            var finalize = '<tr><th class="center" width="25%">Drunk Scale (1-7)</th><th class="center" width="50%">Title</th><th class="center" width="10%">Run Time</th><th class="center">Author</th></tr>';

            $(xml).find('movie').each(function ()                                                 //For each <Movie> tag, retrieve the following:
            {
                var title = $(this).find('title').text()                                          //Retreive Movie's Title

                if (title.substring(0, 1).charCodeAt() >= 48 && title.substring(0, 1).charCodeAt() <= 57)     //If the movie starts with a number
                {
                    var scale = $(this).find('drunkscale').text()                                 //Retreive Movie's Drunk Scale
                    scale = "<td>" + scale + "</td>";                                             //<td>scale</td>
                    var url = $(this).find('link').text()                                         //Retreive Movie's URL
                    title = "<td>" + link + url + linkMid + title + linkEnd + "</td>";            //<td><a href="url">title</a></td>
                    var runtime = $(this).find('runtime').text()                                  //Retrieve Movie's Run Time
                    runtime = "<td>" + runtime + "</td>";                                         //<td>runtime</td>
                    var author = $(this).find('author').text()                                    //Retrieve Movie's Blurb
                    author = "<td>" + author + "</td>";                                           //<td>author</td>
                    var rowOut = scale + title + runtime + author;
                    output = output + "<tr>" + rowOut + "</td>";
                }

                if (nextChar == title.substring(0, 1)) {                                          //Exit when the next movie begins with the letter A
                    document.getElementById("results").innerHTML = finalize + output;
                    return false;
                }
            })
        }
    })
};