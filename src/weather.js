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
    console.log(weatherData);
    const address = weatherData.resolvedAddress;
    const conditions = weatherData.currentConditions.conditions;
    const feelslike = weatherData.currentConditions.feelslike;
    const humidity = weatherData.currentConditions.humidity;
    const temp = weatherData.currentConditions.temp;

    DisplayData(address, conditions, feelslike, humidity, temp);
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
