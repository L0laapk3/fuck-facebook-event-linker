// ==UserScript==
// @name         fuck facebook event linker
// @version      1.1
// @description  facebook sucks ass
// @author       You
// @match        https://www.messenger.com/*
// @grant        none
// ==/UserScript==

var sheet = document.createElement('style');
sheet.innerHTML = "div[message] a[href='#'] { cursor: text !important; text-decoration: none !important; }";
document.head.appendChild(sheet);