(function (dp) {
    "use strict";

    dp.createWord = function () {
        var input = document.getElementById('input').value;
        if (dp.isValid(input)) {
            document.getElementById('validationResult').innerHTML = 'Valid';
            document.getElementById('output').innerHTML = dp.convert(input);
        } else {
            document.getElementById('validationResult').innerHTML = 'Not valid!';
        }
    };


})(window.DailyProgrammer = window.DailyProgrammer || {});