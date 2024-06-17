var container;
var triggerCracklePop = function (element) {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
        }
        else if (i % 3 === 0) {
            createElement("".concat(i, " CracklePop"), "crackle-pop");
        }
        else if (i % 5 === 0) {
            createElement("".concat(i, " Crackle"), "crackle");
        }
        else {
            createElement(i, "number");
        }
    }
};
var createElement = function (content, type) {
    var div = document.createElement('div');
    div.innerHTML = content;
    div.classList.add(type);
    container === null || container === void 0 ? void 0 : container.appendChild(div);
};
addEventListener("DOMContentLoaded", function () {
    container = document.getElementById("container");
    triggerCracklePop(container);
});
