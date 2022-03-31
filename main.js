"use strict"

/** 
 * @filename    main.js
 * @brief       javascript template using the module pattern
 * @author      Sarah Rosanna Busch
 * @version     1.0
 * @date        30 March 2022
 */

var main = (function() {
    var that = {}; //public methods and objects
    var vars = {}; //variables available to all functions in main
    var elem = {}; //store dom elems once on load for efficiency

    that.init = function() {
        elem.header = f.html.getElem('header');
        elem.main = f.html.getElem('main');
        elem.footer = f.html.getElem('footer');
        that.nav('views/basicTags.html');
        f.http.post('noFile', 'pageLoaded');
    }

    that.nav = function(view) {
        f.http.get(view, function(pageData) {
            elem.main.innerHTML = pageData;
        });
    }

    return that;
}());