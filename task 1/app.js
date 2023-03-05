var toggle_btn;
var container_Main;

function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    container_Main = document.querySelector(".container-Main");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {

    dark = !dark;
    let clone = container_Main.cloneNode(true);
    if (dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    clone.addEventListener("animationend", () => {
        container_Main.remove();
        clone.classList.remove("copy");

        declare();
        events();
    });
}

function events() {
    toggle_btn.addEventListener("click", toggleAnimation);
}

events();


