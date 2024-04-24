// Function: Creates table based on user's choice.

identifyTitle();

function identifyTitle()
{
    /* Name of CSV file is appended on the URL from the previous page. Ex. "#cops"
    Sloppy, but this avoids the use of cookies to dynamically generate the HTML for this page*/
    const currentUrl = window.location.href;
    const showTitleSplit = currentUrl.split('#');
    const showTitle = showTitleSplit[1];

    createTable(showTitle);                                                                     // Get the ball rolling!
}

function createTable(showTitle) {

    var myTable = document.getElementById('rulesTable');                                        // myTable = the table on the page
    var csvurl = "../../csv/shows/" + showTitle + ".csv";
    const showTitleElement = document.getElementById('showTitle');                              // showTitle = the title of the show on the page

    $.get( csvurl, function(input){
        var rules = $.csv.toArrays(input);
        var drinkRule = "";
        var gulpRule = "";
        var chugRule = "";
        var finishRule = "";
        var output = "";                                                                        // Prepares Output Buffer

        // Fetch and store all rules. ruleAmount will keep track of how many rules there are
        for (var ruleAmount = 1; ruleAmount<rules.length; ruleAmount++){

            var drinktype = rules[ruleAmount][0];                                               // Identify drink type

            switch(drinktype){                                                                  // Store rules in a string
                case 'drink':
                    drinkRule += rules[ruleAmount][1] + "\n";                                   // Add a new line for filtering later. This preserves punctuation.
                    break;
                case 'gulp':
                    gulpRule += rules[ruleAmount][1] + "\n";
                    break;
                case 'chug':
                    chugRule += rules[ruleAmount][1] + "\n";
                    break;
                case 'finish':
                    finishRule += rules[ruleAmount][1] + "\n";
                    break;
                case 'title':                                                                   // We cheat and put the title of the show in the CSV as a rule
                    showTitleElement.innerHTML = rules[ruleAmount][1] + ".";
                default:
                    break;
            }
        }

        // Reset variables
        var output = "";
        var count = 1;

        // Create arrays from each string, splitting the elements by newline characters added above
        var drinkRuleArray = drinkRule.split(/\r?\n/)
        var gulpRuleArray = gulpRule.split(/\r?\n/)
        var chugRuleArray = chugRule.split(/\r?\n/)
        var finishRuleArray = finishRule.split(/\r?\n/)

        // Trim empty elements from each array
        drinkRuleArray = drinkRuleArray.filter(Boolean);
        gulpRuleArray = gulpRuleArray.filter(Boolean);
        chugRuleArray = chugRuleArray.filter(Boolean);
        finishRuleArray = finishRuleArray.filter(Boolean);


        // Build final HTML for table output. If the arrays aren't empty, builds the rows for each rule
        if (drinkRule != ""){
            drinkRuleArray.forEach((rule) => {
                output += "<tr><td>" + count + ".</td><td class=\"rule\">" + rule + "</td></tr>"
                count++;
            });
        }
        if (gulpRule != ""){
            output += "<tr><th width=\"5%\"></th><th>Take a Gulp When:</th></tr>";
            gulpRuleArray.forEach((rule) => {
                output += "<tr><td>" + count + ".</td><td class=\"rule\">" + rule + "</td></tr>"
                count++;
            });
        }
        if (chugRule != ""){
            output += "<tr><th width=\"5%\"></th><th>Chug For 5 Seconds When:</th></tr>";
            chugRuleArray.forEach((rule) => {
                output += "<tr><td>" + count + ".</td><td class=\"rule\">" + rule + "</td></tr>"
                count++;
            });
        }
        if (finishRule != ""){
            output += "<tr><th width=\"5%\"></th><th>Finish Your Drink When:</th></tr>";
            finishRuleArray.forEach((rule) => {
                output += "<tr><td>" + count + ".</td><td class=\"rule\">" + rule + "</td></tr>"
                count++;
            });
        }
        myTable.innerHTML = "<tr><th width=\"5%\"></th><th>Take a Drink when:</th></tr>" + output;  //Output ENTIRE TABLE  
    })
}