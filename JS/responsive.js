(function () {
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', ev => {
        if (window.innerWidth <= 1100) {
            if (!document.getElementById("respSheet")) {
                let link = document.createElement("link");
                link.href = "./CSS/mobile.css";
                link.type = "text/css";
                link.rel = "stylesheet";
                link.id = "respSheet"
                document.getElementsByTagName("head")[0].appendChild(link);
            }
        } else {
            let funny = document.getElementById("respSheet");
            if (funny) {

                funny.remove();
            }
        }
    })

    function init() {
        if (window.innerWidth <= 1100) {
            let link = document.createElement("link");
            link.href = "./CSS/mobile.css";
            link.type = "text/css";
            link.rel = "stylesheet";
            link.id = "respSheet"
            document.getElementsByTagName("head")[0].appendChild(link);
        }
    }

    init();
})();