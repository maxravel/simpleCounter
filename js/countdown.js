function countdown() {
    'use strict';
    var now = new Date(),
        eventDate = new Date(2018, 1, 17, 10),
	    currentTiime = now.getTime(),
        eventTime = eventDate.getTime(),
        remTime = eventTime - currentTiime,
        s = Math.floor(remTime / 1000),
	    m = Math.floor(s / 60),
	    h = Math.floor(m / 60),
	    d = Math.floor(h / 24);

	h %= 24;
	m %= 60;
	s %= 60;

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	document.getElementById("days").textContent = d;
	document.getElementById("days").innerText = d;

	document.getElementById("hours").textContent = h;
	document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

	setTimeout(countdown, 1000);
}

countdown();