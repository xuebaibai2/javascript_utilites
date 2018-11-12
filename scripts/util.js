/**
 * 
 * @param {Function} initFun Provide a inital function which will run immediatlly
 * @param {[]} initFunArgs Arguments for initial function as an Array format
 * @param {Function} completeFun Provide a function name that will be called when timmer is completed
 * @param {[]} completeFunArgs Arguments for complete function as an Array format
 * @param {number} interval Debounce time. 1000ms = 1s.
 * @param {bool} immediate True if want to run functions immediatlly, False if want to run functions after interval time.
 */
function debounceWithInitFun(initFun, initFunArgs, completeFun, completeFunArgs, interval, immediate) {
    var timeout, initTimeout;

    return function () {
        var context = this,
            initArgs = initFunArgs,
            completeArgs = completeFunArgs;
        clearTimeout(initTimeout);

        if (initFun && {}.toString.call(initFun) === '[object Function]' && initTimeout == null) {
            initTimeout = setTimeout(initFun, interval + 1);
            initFun.apply(context, initArgs);
        }

        var later = function () {
            timeout = null;
            clearTimeout(initTimeout);
            initTimeout = null;
            if (!immediate) completeFun.apply(context, completeArgs);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, interval);

        if (callNow) completeFun.apply(context, completeArgs);
    };
}