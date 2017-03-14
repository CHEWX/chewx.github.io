(function () {
'use strict';

// Class import
// import Example from './examples';
// Var import
// import { wait_for_final_event } from './helper';

(function ($, document) {

    $(document).ready(function () {

        // App
        app.init();
    });

    $(window).load(function () {});

    $(window).scroll(function () {});

    $(window).resize(function () {

        wait_for_final_event(function () {}, 300, 'init');
    });

    // App Functions

    var app = {

        init: function init() {

            this.element.init();
        },

        element: {

            init: function init() {}

        }

    };
})(jQuery, document);

}());
