//Function: Creates table based on user's choice. use AJAX

var iteration = 0;                                                                              //Keeps track of how many times the program has iterated through the choiceDelegation function.
                                                                                                //1 = Drink, 2 = Gulp, 3 = Chug, 4 = Finish
var choice = 1;                                                                                 //Passed a value from a dropdown menu
var x = 1;                                                                                      //Keeps track of the rows in the table
var letter = 64;                                                                                //ASCII value of letters for each rule
var output = "";                                                                                //Prepares Output Buffer
var finalize = "<tr><th width=\"5%\"></th><th>Take a Drink when:</th></tr>";                    //Setup first row
var myTable = document.getElementById('rulesTable');                                            //myTable = the table on the page
var tableExists = false;                                                                        //Stores whether a table has been created yet
var globalXml;                                                                                  //Stores the XML document loaded in the createTable function

function choiceLauncher()                                                                       //Stores user's choice as a number
{
    choice = document.getElementById("movieSelect").value                                       //User's choice is passed as num, stored in Choice.

    //Remove existing table
    if (tableExists == true) {                                                                  //If a table already exists, clear it.
        $(myTable).children().remove();
        output = "";                                                                            //Clear Output Buffer
    }

    createTable();                                                                              //Get the ball rolling!
}

function createTable() {
    $.ajax({
        type: "GET",
        url: "../../xml/series/batman.xml",
        dataType: "xml",
        success: function (xml) {
            globalXml = xml;
            iteration = 0;
            x = 1;                                                                              //Reset X to 1 when the script runs -- may not be needed.
            tableExists = true;                                                                 //From this point on, it's assumed a table has been created.

            //DRINK SECTION            
            for (var i = 1; i < 7; i++) {
                $(xml).find('drink').each(function () {                                         //Gather Universal DRINK rules
                    var rule = "";                                                              //Make Rule blank
                    var rule = $(this).find('rule' + String.fromCharCode(letter + i)).text();   //Find next Rule (RuleA,RuleB,etc.)
                    if (rule == "")                                                             //If there is no rule or it's blank, break the loop
                    { return false; }
                    output = output + "<tr><td>" + x + ".</td><td class=\"rule\">" + rule + "</td></tr>";       //Stores all Rules for this section
                    x++;
                });
            }
            choiceDelegation();                                                                 //Gather DRINK rules based on user's movie choice    
            choiceDelegation();                                                                 //Gather GULP rules based on user's movie choice   
            choiceDelegation();                                                                 //Gather CHUG rules based on user's movie choice    

            //FINISH SECTION  
            output = output + "<tr><th width=\"5%\"></th><th>Finish Your Drink When:</th></tr>";
            for (var i = 1; i < 7; i++) {
                $(xml).find('finish').each(function () {                                        //Gather Universal FINISH rules
                    var rule = "";                                                              //Make Rule blank
                    var rule = $(this).find('rule' + String.fromCharCode(letter + i)).text();   //Find next Rule (RuleA,RuleB,etc.)
                    if (rule == "")                                                             //If there is no rule or it's blank, break the loop
                    { return false; }
                    output = output + "<tr><td>" + x + ".</td><td class=\"rule\">" + rule + "</td></tr>";       //Stores all Rules for this section
                    x++;
                });
            }
            choiceDelegation();                                                                 //Gather FINISH rules based on user's movie choice    
        }
    });
}

function choiceDelegation()    //Batman Begins
{
    var drinkLetter;
    if (choice == 1) { drinkLetter = 65; }                                                      //Determines which rules to grab DrinkA, DrinkB, ChugC, etc.
    if (choice == 2) { drinkLetter = 66; }
    if (choice == 3) { drinkLetter = 67; }

    iteration++;                                                                                //See Top

    if (iteration == 1) //Print Drink Rules
    {
        for (var i = 1; i < 7; i++) {
            $(globalXml).find('drink' + String.fromCharCode(drinkLetter)).each(function () {    //Gather Universal DRINK rules
                var rule = "";                                                                  //Make Rule blank
                letter++;
                var rule = $(this).find('rule' + String.fromCharCode(letter)).text();           //Find next Rule (RuleA,RuleB,etc.)
                if (rule == "")                                                                 //If there is no rule or it's blank, break the loop
                { return false; }
                output = output + "<tr><td>" + x + ".</td><td class=\"rule\">" + rule + "</td></tr>";           //Stores all Rules for this section
                x++;
            });
        }
    }

    if (iteration == 2) //Print Gulp Rules
    {
        if (choice < 3) { output = output + "<tr><th width=\"5%\"></th><th>Take Two Drinks When:</th></tr>"; }
        for (var i = 1; i < 7; i++) {
            $(globalXml).find('gulp' + String.fromCharCode(drinkLetter)).each(function () {     //Gather Universal GULP rules
                var rule = "";                                                                  //Make Rule blank
                letter++;
                var rule = $(this).find('rule' + String.fromCharCode(letter)).text();           //Find next Rule (RuleA,RuleB,etc.)
                if (rule == "")                                                                 //If there is no rule or it's blank, break the loop
                { return false; }
                output = output + "<tr><td>" + x + ".</td><td class=\"rule\">" + rule + "</td></tr>";           //Stores all Rules for this section
                x++;
            });
        }
    }

    if (iteration == 3) //Print Chug Rules
    {
        if (choice == 2) { output = output + "<tr><th width=\"5%\"></th><th>Chug For 5 Seconds When:</th></tr>"; }
        for (var i = 1; i < 7; i++) {
            $(globalXml).find('chug' + String.fromCharCode(drinkLetter)).each(function () {     //Gather Universal CHUG rules
                var rule = "";                                                                  //Make Rule blank
                letter++;
                var rule = $(this).find('rule' + String.fromCharCode(letter)).text();           //Find next Rule (RuleA,RuleB,etc.)
                if (rule == "")                                                                 //If there is no rule or it's blank, break the loop
                { return false; }
                output = output + "<tr><td>" + x + ".</td><td class=\"rule\">" + rule + "</td></tr>";           //Stores all Rules for this section
                x++;
            });
        }
    }

    if (iteration == 4) //Print Finish Rules
    {
        for (var i = 1; i < 7; i++) {
            $(globalXml).find('finish' + String.fromCharCode(drinkLetter)).each(function () {   //Gather Universal FINISH rules
                var rule = "";                                                                  //Make Rule blank
                letter++;
                var rule = $(this).find('rule' + String.fromCharCode(letter)).text();           //Find next Rule (RuleA,RuleB,etc.)
                if (rule == "")                                                                 //If there is no rule or it's blank, break the loop
                { return false; }
                output = output + "<tr><td>" + x + ".</td><td class=\"rule\">" + rule + "</td></tr>";           //Stores all Rules for this section
                x++;
            });
        }
        myTable.innerHTML = finalize + output;                                                  //Output ENTIRE TABLE
    }

    letter = 64;                                                                                //Reset letter to 64 ASCII value after each iteration.
}