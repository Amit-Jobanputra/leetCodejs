/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var narray= new Array(arr.length);
    for(var i=0 ;i<arr.length; i++){
        narray[i]=fn(arr[i],i);
    }
    return narray;
};
function one(n,b) {
    n=n+1;  
    return n; 
}
