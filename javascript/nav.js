const indicatorDiv = document.getElementById("indicatorContainer");

/* mobile nav dropdown */
document.getElementById('navbarToggle').addEventListener("click", () => {
    if (indicatorDiv.className === "is-none") {
        indicatorDiv.className = "flex";
    } else {
        indicatorDiv.className = "is-none";
    }
})
/* closes mobile nav if click happens outside nav */
document.getElementById('layout').addEventListener("click", () => {
    if (indicatorDiv.className === "flex") {
        indicatorDiv.className = "is-none";
    }
})