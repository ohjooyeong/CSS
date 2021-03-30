function init() {
    const stageElem = document.querySelector(".stage");
    const houseElem = document.querySelector(".house");
    const progressBarElem = document.querySelector(".progress-bar");
    const mousePos = { x: 0, y: 0 };
    let maxScrollValue = 0;

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    window.addEventListener("scroll", function () {
        const scrollPercent = pageYOffset / maxScrollValue;
        const zMove = scrollPercent * 980 - 490;

        houseElem.style.transform = `translateZ(${zMove}vw)`;
        // progress bar
        progressBarElem.style.width = `${scrollPercent * 100}%`;
    });

    window.addEventListener("mousemove", function (e) {
        const scrollPercent = pageYOffset / maxScrollValue;
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        if (scrollPercent > 0.05) {
            stageElem.style.transform = `rotateX(${mousePos.y * 10}deg) rotateY(${
                mousePos.x * 25
            }deg)`;
        } else {
            stageElem.style.transform = `rotateX(${mousePos.y * 10}deg) rotateY(${
                mousePos.x * 12
            }deg)`;
        }
    });
}

init();
