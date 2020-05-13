




setInterval(() => {
    var today = new Date()
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("hours").innerHTML = hours + ":";
    minutes = document.getElementById("minutes").innerHTML = minutes + ":";
    seconds = document.getElementById("seconds").innerHTML = seconds;
}, 1000);

