$(document).ready(function () {
    var div = document.getElementById('movieListContainer');
    var showbutton = document.getElementById('show');
    var hidebutton = document.getElementById('hide');

    $("#show").click(function () {
        div.style.display = 'block';
        showbutton.style.display = 'none';
        hidebutton.style.display = 'block';
    });

    $("#hide").click(function () {
        div.style.display = 'none';
        showbutton.style.display = 'block';
        hidebutton.style.display = 'none';
    });
});