function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
        // IE 10 or older => return version number
        alert("ALERT: You're using Internet Explorer. Please note this website does not render properly while using IE. Your experience will be diminished.");
    }

    if (trident > 0) {
        // IE 11 (or newer) => return version number
        alert("ALERT: You're using Internet Explorer. Please note this website does not render properly while using IE. Your experience will be diminished.");
    }
};