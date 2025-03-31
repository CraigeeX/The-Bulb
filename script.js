const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");

let isOn = false;

toggleButton.addEventListener("click", () => {
    if (isOn) {
        bulb.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
        toggleButton.textContent = "Turn On";
    } else {
        bulb.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
        toggleButton.textContent = "Turn Off";
    }
    isOn = !isOn;
});
