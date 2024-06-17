let container: HTMLElement | null;


const triggerCracklePop = (element: HTMLElement | null) : void => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
        } else if (i % 3 === 0) {
            createElement(`${i} CracklePop`, "crackle-pop");
        } else if (i % 5 === 0) {
            createElement(`${i} Crackle`, "crackle");
        } else {
            createElement(i, "number");
        }
    }
}

const createElement = (content, type) => {
const div = document.createElement('div');
div.innerHTML = content;
div.classList.add(type);
container?.appendChild(div);
}


addEventListener("DOMContentLoaded", () => {
    container = document.getElementById("container");
    triggerCracklePop(container);
});

