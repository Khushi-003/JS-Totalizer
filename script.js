let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";
function clearScreen() {
    document.getElementById("result").value = "";
}
function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function magic() {
    let darkMode = document.getElementById("darkMode");
    let mode = document.getElementById("magic");
    if (mode.getAttribute("href") == lightTheme) {
      mode.href = darkTheme;
      darkMode.innerHTML = "🌞";
    } else {
      mode.href = lightTheme;
      darkMode.innerHTML = "🌙";
    }
  }