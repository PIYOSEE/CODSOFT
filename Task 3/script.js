let display = document.getElementById("display");
let themeBtn = document.getElementById("themeBtn");
let isLight = false;

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  isLight = !isLight;
  themeBtn.textContent = isLight ? "☀️ Light" : "🌙 Dark";
});
