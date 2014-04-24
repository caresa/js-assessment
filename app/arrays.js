if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
     return arr.indexOf(item);
    },

    sum : function(arr) {
        var total = 0;

        for (var i in arr) { total += arr[i]; }
            return total;
    },

    remove : function(arr, item) {

        // for (var i=0; i<arr.length; i++) {
        //     if (arr[i] == item) {
        //         arr.splice(i,1);
        //     }
        // }
        // return arr;

        for(var i in arr){
            if (arr[i] == item) {
                arr.splice(i,1);
            }
        }
        return arr;

    },

    removeWithoutCopy : function(arr, item) {
        for(var i in arr){
            if (arr[i] == item) {
                arr.splice(i,item);
            }
        }
        return arr;
},

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
