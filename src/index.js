import "./styles.css";

const myButton = document.getElementById("my-button");
const headertext = document.getElementById("headertext");
const addDataButton = document.getElementById("add-data");
const myList = document.getElementById("my-list");
const textData = document.getElementById("text-data");

myButton.addEventListener("click", function () {
  console.log("Hello world");
  headertext.innerText = "My notebook";
});

addDataButton.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.innerText = textData.value;
  myList.appendChild(newItem);
});
