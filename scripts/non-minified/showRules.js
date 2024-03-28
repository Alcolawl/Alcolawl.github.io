/*"Here, take a cookie. I promise by the time you walk out that door, you'll feel right as rain."*/
var filename = document.cookie;                                                                 //Store cookie contents as string
$(document).ready(function () {
                                                                 
    filename = filename.replace('; popup=1', '');                                               //Remove other stuff from string
    filename = filename.replace('filename=', '');                                               //Remove other stuff from string
    document.cookie = "filename=; expires=Thu, 01 Jan 1970 00:00:00 UTC";                       //Delete Cookie

    choiceLauncher();                                                                           //Check for table, kickstart function.
})

/*Global Variables*/

//Function: Creates table based on user's choice. use AJAX

var iteration = 0;                                                                              //Keeps track of how many times the program has iterated through the choiceDelegation function.
//1 = Drink, 2 = Gulp, 3 = Chug, 4 = Finish
var x = 1;                                                                                      //Keeps track of the rows in the table
var letter = 64;                                                                                //ASCII value of letters for each rule
var output = "";                                                                                //Prepares Output Buffer
var finalize = "<tr><th width=\"5%\"></th><th>Take a Drink when:</th></tr>";                    //Setup first row
var myTable = document.getElementById('rulesTable');                                            //myTable = the table on the page
var showTitle = document.getElementById('showTitle');                                           //showTitle = the title of the show on the page
var tableExists = false;                                                                        //Stores whether a table has been created yet
var globalXml;                                                                                  //Stores the XML document loaded in the createTable function

function choiceLauncher()                                                                       //Stores user's choice as a number
{
    //Remove existing table
    if (tableExists == true) {                                                                  //If a table already exists, clear it.
        $(myTable).children().remove();
        output = "";                                                                            //Clear Output Buffer
    }

    createTable();                                                                              //Get the ball rolling!
}

function createTable() {

    var xmlurl = "../../xml/shows/" + filename + ".xml"

    $.ajax({
        type: "GET",
        url: xmlurl,
        dataType: "xml",
        success: function (xml) {
            globalXml = xml;
            iteration = 0;
            x = 1;                                                                              //Reset X to 1 when the script runs -- may not be needed.
            tableExists = true;                                                                 //From this point on, it's assumed a table has been created.

            $(xml).find('show').each(function () {
                document.title = $(this).find('title').text();
                showTitle.innerHTML = document.title + ".";
            })

            //DRINK SECTION            
            for (var i = 1; i < 7; i++) {
                $(xml).find('drink').each(function () {                                         //Gather DRINK rules
                    var rule = "";                                                              //Make Rule blank
                    var rule = $(this).find('rule' + String.fromCharCode(letter + i)).text();   //Find next Rule (RuleA,RuleB,etc.)
                    if (rule == "")                                                             //If there is no rule or it's blank, break the loop
                    { return false; }
                    output = output + "<tr><td>" + x + ".</td><td class=\"rule\">" + rule + "</td></tr>";       //Stores all Rules for this section
                    x++;
                });
            }

            //GULP SECTION  
            for (var i = 1; i < 7; i++) {
                $(xml).find('gulp').each(function () {                                          //Gather GULP rules
                    var rule = "";                                                              //Make Rule blank
                    var rule = $(this).find('rule' + String.fromCharCode(letter + i)).text();   //Find next Rule (RuleA,RuleB,etc.)
                    if (rule != "" && i == 1)                                                   //If the first rule in this section isn't blank, create the section.
                    { output = output + "<tr><th width=\"5%\"></th><th>Take a Gulp When:</th></tr>"; }
                    if (rule == "")                                                             //If there is no rule or it's blank, break the loop
                    { return false;}
                    output = output + "<tr><td>" + x + ".</td><td class=\"rule\">" + rule + "</td></tr>";       //Stores all Rules for this section
                    x++;
                });
            }

            //CHUG SECTION  
            for (var i = 1; i < 7; i++) {
                $(xml).find('chug').each(function () {                                          //Gather CHUG rules
                    var rule = "";                                                              //Make Rule blank
                    var rule = $(this).find('rule' + String.fromCharCode(letter + i)).text();   //Find next Rule (RuleA,RuleB,etc.)
                    if (rule != "" && i == 1)                                                   //If the first rule in this section isn't blank, create the section.
                    { output = output + "<tr><th width=\"5%\"></th><th>Chug For 5 Seconds When:</th></tr>"; }
                    if (rule == "")                                                             //If there is no rule or it's blank, break the loop
                    { return false; }
                    output = output + "<tr><td>" + x + ".</td><td class=\"rule\">" + rule + "</td></tr>";       //Stores all Rules for this section
                    x++;
                });
            }

            //FINISH SECTION  
            for (var i = 1; i < 7; i++) {
                $(xml).find('finish').each(function () {                                        //Gather FINISH rules
                    var rule = "";                                                              //Make Rule blank
                    var rule = $(this).find('rule' + String.fromCharCode(letter + i)).text();   //Find next Rule (RuleA,RuleB,etc.)
                    if (rule != "" && i == 1)                                                   //If the first rule in this section isn't blank, create the section.
                    { output = output + "<tr><th width=\"5%\"></th><th>Finish Your Drink When:</th></tr>"; }
                    if (rule == "")                                                             //If there is no rule or it's blank, break the loop
                    { return false; }
                    output = output + "<tr><td>" + x + ".</td><td class=\"rule\">" + rule + "</td></tr>";       //Stores all Rules for this section
                    x++;
                });
            }

            myTable.innerHTML = finalize + output;                                                  //Output ENTIRE TABLE  
        }
    });
}