(function() {
    var _id = function _id(id) {
        return document.getElementById(id);
    };

    var _queSelAll = function _queSelAll(query) {
        return document.querySelectorAll(query);
    };

    var stopButton = _id('stopButton'),
        slowButton = _id('slowButton'),
        goButton = _id('goButton');

    var buttons = _queSelAll('.button'),
        bulbs = _queSelAll('.bulb');

    console.log(buttons, bulbs);

    function clearAllLights() {
        Array.prototype.forEach.call(bulbs, function(bulb) {
            bulb.style.backgroundColor = "#111111";
        });
    }

    function turnOnLight() {
        clearAllLights();
        var element = this;
        console.dir(element);

        if (element.id === 'stopButton') {
            stopLight.style.backgroundColor = "red";
        } else if (element.id === 'slowButton') {
            slowLight.style.backgroundColor = "yellow";
        } else {
            goLight.style.backgroundColor = "green";
        }
    }


    Array.prototype.forEach.call(buttons, function(button) {
        button.addEventListener('click', turnOnLight, false);
    });

})();
