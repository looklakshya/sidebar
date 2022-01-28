let hamburger = document.getElementsByClassName("hamburger")[0];
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let sidebar = document.getElementsByClassName("sidebar")[0];

let isOpen = false;

// width: 40px;
// transform: translate(-5px, 10px) rotate(45deg);
hamburger.addEventListener("click", () => {
    if (!isOpen) {
        sidebar.style.display = "block";
        sidebar.style.transition = "0.3s ease-in-out";
        // sidebar.style.width = "100vw";

        first.style.width = "40px";
        first.style.transform = "translate(-10px, 10px) rotate(45deg)";

        second.style.display = "none";

        third.style.width = "40px";
        third.style.transform = "translate(-10px, 0px) rotate(-45deg)";

        isOpen = true;
    } else {
        sidebar.style.display = "none";
        sidebar.style.transition = "0.3s ease-in-out";
        // sidebar.style.width = "0";

        first.style.width = "25px";
        first.style.transform = "translate(0px) rotate(0deg)";

        second.style.display = "block";

        third.style.width = "25px";
        third.style.transform = "translate(0px) rotate(0deg)";

        isOpen = false;
    }
});

// width: 40px;
// transform: translate(-10px, -10px) rotate(-45deg);
