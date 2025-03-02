/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let a= false;
    let b;
    return function(...args){
        if(!a){
            b=fn(...args);
            a=true;
            return b;
        }
        else{
            return undefined;
        }
    }
    console.log(calls);
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
