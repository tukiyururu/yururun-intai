var dead = (new Date(2014, 3, 30)).getTime();
window.onload = function() {
    countTimer();
}

function countTimer() {
    var timer = dead - (new Date()).getTime();

    var num = Math.floor(timer / (24 * 60 * 60 * 1000));
    var hour = Math.floor((timer % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var min = Math.floor((timer % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
    var sec = Math.floor((timer % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;

    var days = num + 'day';
    if (num > 1) days = days + 's';
    if (hour < 10) hour = '0' + hour;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    var elem = document.getElementById('count');
    if (timer > 0) {
        elem.innerHTML = days + ' ' + hour + ':' + min + ':' + sec;
    } else {
        elem.innerHTML = '0days 00:00:00';
    }

    setTimeout('countTimer()', 1000);
}