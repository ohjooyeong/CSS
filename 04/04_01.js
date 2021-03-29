const ilbuniGroup = document.querySelectorAll(".ilbuni");
const stage = document.querySelector(".stage");

function init() {
    function clickHandler() {
        this.parentNode.removeChild(this);
    }

    for (let i = 0; i < ilbuniGroup.length; i++) {
        ilbuniGroup[i].addEventListener("click", clickHandler);
    }
}

init();
