import { CreateElement } from "./createElement";
import { container } from ".";
import { UnitToggle } from "./unitToggle";
import { AddImages } from "./addImages";

export function DisplayData(
  address,
  condition,
  description,
  feels,
  humid,
  temp,
  time
) {
  const addressContent = CreateElement(
    "h1",
    container,
    "content-header",
    undefined,
    address
  );
  const imageContainer = CreateElement("div", container, "image-container");
  const conditionContent = CreateElement(
    "h2",
    container,
    "h2-content",
    undefined,
    condition
  );
  const descriptionContent = CreateElement(
    "h3",
    container,
    "h3-content",
    undefined,
    description
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
  AddImages(time);
}
