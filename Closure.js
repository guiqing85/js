/**
 * Created by Apple on 18/1/19.
 */

function sum(array) {
    return array.reduce(function (x,y) {
        return x +y;
    });
}
sum([1,2,3,4,5,6,7,8,9]);//45

function lazySum(array) {
    var sum = function () {
        return array.reduce(function (x, y) {
            return x+y;
        });
    }
    return sum;
}

var func = lazySum([1,2,3,4,5,6,7,8,9]);//not run
func();//45

/**
 * Closure
 * @returns {Array}
 */
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
               return n * n;
            }
        })(i));
    }
    return arr;
}

var result = count();
var f1 = result[0];
var f2 = result[1];
var f3 = result[2];

f1();//1
f2();//4
f3();//9

/**
 *anonymous function and execute immediately
 */
(function (n) {
    return n*n;
})(3);


