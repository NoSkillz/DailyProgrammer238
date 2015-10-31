(function (dp) {
    "use strict";

    var validChars = 'cv';

    // takes a character and sees if it's valid by itself
    var isValidChar = function (character) {
        var isValid = false;
        for (var i = 0; i < validChars.length; i++) {
            if (validChars[i] === character) {
                isValid = true;
            }
        }
        return isValid;
    };

    // checks if the string is valid. it needs to be in validChars
    dp.isValid = function (inputText) {
        var result = true;
        for (var i in inputText) {
            if (!isValidChar(inputText[i])) {
                result = false;
                break;
            }
        }

        return result;
    }

})(window.DailyProgrammer = window.DailyProgrammer || {});