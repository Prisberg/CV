const indicatorDiv = document.getElementById("indicatorContainerID");
const slide = document.querySelector(".slide");
/* makes mobile nav responsive */
function navbar() {
    if (indicatorDiv.className === "indicator-container") {
        indicatorDiv.className += " responsive";
     } else {
        indicatorDiv.className = "indicator-container";
    } 
}
/* closes dropdown nav if click happens outside nav */
slide.addEventListener("click", function() {
    if (indicatorDiv.className === "indicator-container responsive") {
        indicatorDiv.className = "indicator-container";
    }
})