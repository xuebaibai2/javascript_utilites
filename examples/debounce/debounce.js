/// <reference path="../../scripts/util.js" />
window.onload = function () {

    var statusDiv = document.getElementById('statusDiv');
    var input = document.getElementById('input');

    input.onkeypress = debounceWithInitFun(onTyping, ['Tom', 'Smith'], onCompleteTyping, [], 2000, false);

    function onTyping(firstName, lastName) {
        statusDiv.append(firstName + ' ' + lastName + ': is typing...');
        statusDiv.appendChild(document.createElement('br'));
    }

    function onCompleteTyping() {
        statusDiv.append('completed typing: ' + input.value);
        statusDiv.appendChild(document.createElement('br'));
        statusDiv.appendChild(document.createElement('br'));
    }
};