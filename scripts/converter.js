(function (dp) {
    "use strict";

    var consonants = 'bcdfghjklmnpqrstvwxyz';
    var vowels = 'aeiou';

    // convert a string and returns the result
    dp.convert = function (word) {
        var result = '';

        for (var i = 0; i < word.length; i++) {
            result += switchCharacter(word[i]);
        }

        return result;
    };

    // convert a single character
    var switchCharacter = function (char) {
        var random;
        if (char === 'v') {
            random = Math.floor((Math.random() * vowels.length));
            return vowels[random]
        } else {
            random = Math.floor((Math.random() * consonants.length));
            return consonants[random]
        }
    }

})(window.DailyProgrammer = window.DailyProgrammer || {});
