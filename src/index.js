import styles from "./styles.css";
import { CreateElement } from "./createElement";
import { Weather } from "./weather";

const mainContainer = document.querySelector(".main-container");

export const container = CreateElement("div", mainContainer, "container");

const submit = document.getElementById("submit");
let inputValue;

submit.addEventListener("click", () => {
  container.innerHTML = "";
  inputValue = document.getElementById("location").value;
  Weather(inputValue);
});
