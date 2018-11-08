// ==UserScript==
// @name         fuck facebook event linker
// @version      2.0
// @description  facebook sucks ass
// @downloadURL  https://cdn.jsdelivr.net/gh/L0laapk3/fuck-facebook-event-linker/main.user.js
// @author       You
// @match        https://www.messenger.com/*
// @grant        none
// ==/UserScript==

var sheet = document.createElement('style');
sheet.innerHTML = "a[href='#'] { cursor: text !important; text-decoration: none !important; }";
document.head.appendChild(sheet);