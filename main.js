"use strict"

/** 
 * @filename    main.js
 * @brief       javascript template using the module pattern
 * @author      Sarah Rosanna Busch
 * @version     1.1
 * @date        6 May 2022
 */

var main = (function() {
    var that = {}; //public methods and objects
    var elem = {}; //store dom elems once on load for efficiency
    var vars = {}; //variables available to all functions in main

    that.init = function() {
        elem.navBtns = f.html.getElems('button');
        elem.main = f.html.getElem('main');
        vars.view = 1;
        that.nav(vars.view);
        f.http.post('noFile', 'pageLoaded');
    }

    that.nav = function(view) {
        let file = 'views/view' + view + '.html';
        let viewIdx = vars.view - 1;
        elem.navBtns[viewIdx].classList.remove('selected');
        f.http.get(file, function(pageData) {
            elem.main.innerHTML = pageData;
            vars.view = view;
            viewIdx = view - 1;
            elem.navBtns[viewIdx].classList.add('selected');
        });
    }

    return that;
}());