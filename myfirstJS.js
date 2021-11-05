function changeStyle(node, color, text, backgroundColor) {
  if (text) {
    node.textContent = text;
  }
  node.style.backgroundColor = backgroundColor;
  node.style.color = color;
  node.style.padding = "2rem";
  node.style.textAlign = "center";
}
// const colors = ['red', 'orange', 'yellow','green', 'blue', 'darkblue', 'purple']
// const colors = ['#eb3434', '#eb8934', '#ebeb34','#34eb3a', '#3477eb', '#5334eb', '#c334eb']

const colors = [
  "#ff0000",
  "#ff7b00",
  "#ffe600",
  "#00ff00",
  "#00a6ff",
  "#0000ff",
  "#f000ff",
];
const words = ["Каждый", "Охотник", "Желает", "Знать", "Где", "Сидит", "Фазан"];
const headings = document.querySelectorAll("h2");

document.bgColor = "#000";

for (let i = 0; i < 7; i++) {
  setTimeout(() => {
    changeStyle(headings[i], colors[i], 0, "#000");
  }, i * 1000 + 1000);
}

for (let i = 0; i < 7; i++) {
  setTimeout(() => {
    changeStyle(headings[i], "#fff", words[i], colors[i]);
  }, i * 1000 + 8000);
}

setTimeout(() => {
  document.bgColor = "#fff";
}, 15000);
