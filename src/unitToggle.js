import { CreateElement } from "./createElement";
import { container } from ".";

export function UnitToggle(feels, humid, temp) {
  const feelsContent = document.getElementById("feelslike");
  const humidContent = document.getElementById("humidity");
  const tempContent = document.getElementById("temperature");

  const toggleContainer = CreateElement("div", container, "checkbox-container");
  const fahrenheit = CreateElement(
    "p",
    toggleContainer,
    "temp-unit",
    undefined,
    "°F"
  );
  const label = CreateElement("label", toggleContainer, "switch");
  const input = CreateElement("input", label, undefined, "checkbox");
  const span = CreateElement("span", label, "slider");
  span.classList.add("round");
  const celsius = CreateElement(
    "p",
    toggleContainer,
    "temp-unit",
    undefined,
    "°C"
  );

  input.addEventListener("click", () => {
    if (input.checked === true) {
      feelsContent.textContent =
        "Feels-like: " + (((feels - 32) * 5) / 9).toFixed(1) + " °C";
      humidContent.textContent =
        "Humidity: " + (((humid - 32) * 5) / 9).toFixed(1) + " °C";
      tempContent.textContent =
        "Temperature: " + (((temp - 32) * 5) / 9).toFixed(1) + " °C";
    } else {
      feelsContent.textContent = "Feels-like: " + feels + " °F";
      humidContent.textContent = "Humidity: " + humid + " °F";
      tempContent.textContent = "Temperature: " + temp + " °F";
    }
  });
}
