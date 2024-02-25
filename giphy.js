function updateSliderValue(event) {
    document.querySelector(".js-gif-range-value").innerText = event.target.value;
}

document.querySelector("[name=gif-range]").addEventListener("input", updateSliderValue);
