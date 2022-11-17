// ==UserScript==
// @name         Open Twitter App
// @version      1.0
// @author       Talhah
// @match        *://*.twitter.com/*
// ==/UserScript==
if (window.location.pathname === '/redirect') return;
window.location.href = `twitter://${window.location.pathname.slice(1)}${
	window.location.search
}${window.location.hash}`;