function init() {
    const stage = document.querySelector(".stage");
    function clickHandler(e) {
        if (e.target.classList.contains("ilbuni")) {
            stage.removeChild(e.target);
        }
    }
    stage.addEventListener("click", clickHandler);
}
init();
