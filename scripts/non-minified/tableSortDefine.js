$(function() {
    $("#fullList").tablesorter({ 
        headers: {
            0: {
                sorter: 'ignoreArticles',
                ignoreArticles : 'en',
                ignoreArticlesExcept : ''
            }
        },
        sortInitialOrder: "desc",
        sortList: [[1,0]]
    });
});