function cloneTableContents() {
    var counter = 0;                                            //Loop Iteration Counter
    $("head").each(function() {
        $(this).find("title").each(function () {
            $(".copy").append($(this).text() + "\n");
        });
    });
    $("table").each(function () {
        $(this).find("tr").each(function () {
            $(this).children().each(function () {
                $(".copy").append($(this).text() + " ");
                counter++;                                      //Counter Increment
                if (counter % 2 == 0)                           //Insert a new line every 2 table cells
                { $(".copy").append("\n"); }
            });
        });
    });
    $(".copy").append("\nFrom Drink2Movies.com");
}