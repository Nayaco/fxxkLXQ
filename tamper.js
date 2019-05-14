// ==UserScript==
// @name         FCTK
// @version      1.0
// @description  Enable right click
// @author       NYCC
// @match        http://10.214.200.199:8080/masm/*
// ==/UserScript==

(function(){
    'use strict'

  window.addEventListener('load', () => {
    addButton('enable right click', selectReadFn)
    })

    function addButton(text, onclick, cssObj) {
        cssObj = cssObj || {position: 'absolute', bottom: '7%', left:'4%', 'z-index': 3}
        let button = document.createElement('button'), btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key =>{btnStyle[key] = cssObj[key]})
        return button
    }

    function selectReadFn() {
        document.oncontextmenu = true;
        document.onselectstart = true;
    }

}())