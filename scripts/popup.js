$(document).ready(function () {
    if ($.cookie('popup') != 1) {
        $.cookie('popup', '1', { expires : 10 });
        document.getElementById('popup').style.display = 'block'; document.getElementById('fade').style.display = 'block';
    }
});