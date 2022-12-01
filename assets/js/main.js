

const slider = document.querySelector("input[type='range']");
const output = document.querySelector(".count");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}