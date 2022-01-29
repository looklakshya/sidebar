let hamburger = document.getElementsByClassName("hamburger")[0];
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let sidebar = document.getElementsByClassName("sidebar")[0];
let sidebarUl = document.getElementById("sidebarUl");

let isOpen = true;
let firstTime = true;

// width: 40px;
// transform: translate(-5px, 10px) rotate(45deg);
hamburger.addEventListener("click", () => {
    if (!isOpen) {
        // sidebar.style.display = "block";
        burgerOn();
    } else {
        // sidebar.style.display = "none";
        burgerOff();
    }
});

sidebar.addEventListener("click", () => {
    if (isOpen) {
        burgerOff();
    }
});

function burgerOn() {
    sidebar.style.height = "100vh";
    sidebar.style.zIndex = "0";
    sidebarUl.style.display = "flex";

    first.style.backgroundColor = "red";
    second.style.backgroundColor = "red";
    third.style.backgroundColor = "red";

    first.style.width = "40px";
    first.style.transform = "translate(-10px, 10px) rotate(45deg)";

    second.style.display = "none";

    third.style.width = "40px";
    third.style.transform = "translate(-10px, 0px) rotate(-45deg)";

    isOpen = true;
}

function burgerOff() {
    sidebar.style.height = "0";
    sidebar.style.zIndex = "-10";
    sidebarUl.style.display = "none";

    first.style.backgroundColor = "black";
    second.style.backgroundColor = "black";
    third.style.backgroundColor = "black";

    first.style.width = "25px";
    first.style.transform = "translate(0px) rotate(0deg)";

    second.style.display = "block";

    third.style.width = "25px";
    third.style.transform = "translate(0px) rotate(0deg)";

    isOpen = false;
}

// width: 40px;
// transform: translate(-10px, -10px) rotate(-45deg);

setInterval(() => {
    if (firstTime) {
        burgerOff();
        firstTime = false;
    }
}, 20);
