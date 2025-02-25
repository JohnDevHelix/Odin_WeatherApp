import { CreateElement } from "./createElement";
import { container } from ".";
import { UnitToggle } from "./unitToggle";

export function DisplayData(address, condition, feels, humid, temp) {
  const addressContent = CreateElement(
    "h1",
    container,
    "content-header",
    undefined,
    address
  );
  const conditionContent = CreateElement(
    "p",
    container,
    "contents",
    undefined,
    condition
  );
  const feelsContent = CreateElement(
    "p",
    container,
    "contents",
    undefined,
    "Feels-like: " + feels + " °F"
  );
  feelsContent.id = "feelslike";
  const humidContent = CreateElement(
    "p",
    container,
    "contents",
    undefined,
    "Humidity: " + humid + " °F"
  );
  humidContent.id = "humidity";
  const tempContent = CreateElement(
    "p",
    container,
    "contents",
    undefined,
    "Temperature: " + temp + " °F"
  );
  tempContent.id = "temperature";

  UnitToggle(feels, humid, temp);
}
