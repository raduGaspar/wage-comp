(function() {
  'use strict';

  angular
    .module('wagecomp')
    .factory('Utils', Utils);

  function Utils() {
    /*
     * @param {number} wage - amount to process in EUR
     * @param {number} cm - amount awarded on CM (Carte de Munca)
     * @param {number} exRate - EUR/RON Exchange Rate
     */
    var wageComp = function(wage, cm, exRate) {
      var result;

      if (wage && cm && exRate) {
        var totalRon = parseFloat((wage*exRate).toFixed(2)),
          ronSubCM = parseFloat((totalRon-cm).toFixed(2)),
          eurSubCM = parseFloat((ronSubCM/exRate).toFixed(2));

        result = [
          {
            currency: 'RON',
            value: ronSubCM,
            title: 'RON-CM',
            details: 'Your wage in RON without the amount on CM'
          },
          {
            currency: 'EUR',
            value: eurSubCM,
            title: 'EUR-CM',
            details: 'Your wage in EUR without the amount on CM'
          },
          {
            currency: 'RON',
            value: totalRon,
            title: 'RON+CM',
            isTotal: 1,
            details: 'Your total wage in RON'
          }
        ];
      }

      return result;
    },
    /*
     *  Method used for encoding strings
     *  Based on the Mersenne Sequence f(x) = 2x + 1
     *
     *  @param {string} str The text that needs to be encoded
     *
     *  @returns {string} Encoded string
     *
     */
    encode = function(str) {
      var result = '', i;
      for(i=0; i<str.length; i++) {
        var n = parseInt(str.charCodeAt(i), 10),
          algo = 3*n+i;

        result = result.concat(String.fromCharCode(algo));
      }

      return result;
    },

    /*
     *  Method used for decoding strings
     *  Based on the Mersenne Reversed Sequence f(x) = (x-1) / 2
     *
     *  @param {string} str The text that needs to be decoded
     *
     *  @returns {string} Decoded string
     *
     */
    decode = function(str) {
      var result = '', i;
      for(i=0; i<str.length; i++) {
        var n = parseInt(str.charCodeAt(i), 10),
          algo = (n-i)/3;

        result = result.concat(String.fromCharCode(algo));
      }

      return result;
    };

    return {
      wageComp: wageComp,
      string: {
        encode: encode,
        decode: decode
      }
    };
  }
}());
