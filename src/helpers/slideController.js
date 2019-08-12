const slider = document.getElementById("control-opacity-range");
const output = document.getElementById("theme-controller");
output.innerHTML = slider.value;

slider.oninput = () => {
  output.innerHTML = this.value;
}

const sliderController = () => {

};

export default sliderController;