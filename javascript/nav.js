const indicatorDiv = document.getElementById("indicatorContainerID");
/* makes mobile nav responsive */
document.querySelector("#navbarToggle").addEventListener("click", function () {
    if (indicatorDiv.className === "indicator-container") {
        indicatorDiv.className += " responsive";
    } else {
        indicatorDiv.className = "indicator-container";
    }
})
/* closes dropdown nav if click happens outside nav */
document.querySelector(".slide").addEventListener("click", function () {
    if (indicatorDiv.className === "indicator-container responsive") {
        indicatorDiv.className = "indicator-container";
    }
})