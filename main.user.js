// ==UserScript==
// @name         fuck facebook event linker
// @version      1
// @description  facebook sucks ass
// @author       You
// @match        https://www.messenger.com/*
// @grant        none
// ==/UserScript==

window.document.styleSheets[0].insertRule("div[message] a[href='#'] { cursor: text !important; text-decoration: none !important; }", sheet.cssRules.length);