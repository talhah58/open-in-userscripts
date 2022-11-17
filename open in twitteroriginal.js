// ==UserScript==
// @name         Open Twitter App
// @version      1.0
// @author       Talhah
// @match        *://*.twitter.com/*
// @downloadURL  https://gist.github.com/asportnoy/628b820184297f5fe296c1a5b79c8000/raw/open-youtube-app.user.js
// @updateURL    https://gist.github.com/asportnoy/628b820184297f5fe296c1a5b79c8000/raw/open-youtube-app.user.js
// @homepage     https://gist.github.com/asportnoy/628b820184297f5fe296c1a5b79c8000/
// ==/UserScript==
if (window.location.pathname === '/redirect') return;
window.location.href = `twitter://${window.location.pathname.slice(1)}${
	window.location.search
}${window.location.hash}`;