export { helper, wait_for_final_event };

var helper = {
    breakpoint : {
        // 'small': 0,
        // 'medium': 640,
        // 'large': 1025,
        // 'xlarge': 1300,
        // 'xxlarge': 1500,
    },
    touch_support : Modernizr.touch
}

var wait_for_final_event = function () {

    var timers = {};

    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            // don't call this twice without a uniqueID
            uniqueId = Math.random() * 1000;
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
}();
