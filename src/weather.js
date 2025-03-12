import { CreateElement } from "./createElement";
import { container } from ".";
import { DisplayData } from "./displayData";

export async function Weather(value) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?key=BEJT6VVJCGPT83YPW4PMKE9YQ`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const address = weatherData.resolvedAddress;
    const conditions = weatherData.currentConditions.conditions;
    const description = weatherData.days[0].description;
    const feelslike = weatherData.currentConditions.feelslike;
    const humidity = weatherData.currentConditions.humidity;
    const temp = weatherData.currentConditions.temp;
    const time = weatherData.currentConditions.datetime;
    DisplayData(
      address,
      conditions,
      description,
      feelslike,
      humidity,
      temp,
      time
    );
  } catch {
    const errorContent = CreateElement(
      "h1",
      container,
      "error-content",
      undefined,
      "Error 400 - Bad Request"
    );
  }
}
