import { CreateElement } from "./createElement";

// Icons
import cloudyIcon from "./public/images/icons/cloudy-icon.png";
import clearIcon from "./public/images/icons/clear-icon.png";
import overcastIcon from "./public/images/icons/overcast-icon.png";
import rainingIcon from "./public/images/icons/rainy-icon.png";
import hailIcon from "./public/images/icons/hail-icon.png";
import fogIcon from "./public/images/icons/foggy-icon.png";
import thunderstormIcon from "./public/images/icons/thunderstorm-icon.png";
import drizzleIcon from "./public/images/icons/drizzle-icon.png";
import snowyIcon from "./public/images/icons/snow-icon.png";
import dustIcon from "./public/images/icons/sandstorm-icon.png";
import squallsIcon from "./public/images/icons/squalls-icon.png";
import tornadoIcon from "./public/images/icons/tornado-icon.png";
import lightningIcon from "./public/images/icons/lightning-icon.png";
import freezingFogIcon from "./public/images/icons/freezingfog-icon.png";

// Background Images
import cloudyBg from "./public/images/background/cloudy-bg.jpg";
import clearBg from "./public/images/background/clear-bg.jpg";
import overcastBg from "./public/images/background/overcast-bg.jpg";
import rainingBg from "./public/images/background/rainy-bg.jpg";
import hailBg from "./public/images/background/hail-bg.jpg";
import fogBg from "./public/images/background/fog-bg.jpg";
import thunderstormBg from "./public/images/background/thunderstorm-bg.jpg";
import drizzleBg from "./public/images/background/drizzle-bg.jpg";
import snowyBg from "./public/images/background/snow-bg.jpg";
import dustBg from "./public/images/background/sandstorm-bg.jpg";
import squallsBg from "./public/images/background/squalls-bg.jpg";
import tornadoBg from "./public/images/background/tornado-bg.jpg";
import lightningBg from "./public/images/background/lightning-bg.jpg";
import freezingFogBg from "./public/images/background/freezingfog-bg.jpg";

export function AddImages() {
  const imgContainer = document.querySelector(".image-container");
  const condition = document.querySelector(".h2-content");
  const img = CreateElement("img", imgContainer, "condition-img");

  const weather = [
    "Partially cloudy",
    "Sky Coverage Increasing",
    "Clear",
    "Sky Coverage Decreasing",
    "Blowing Or Drifting Snow",
    "Heavy Rain And Snow",
  ];

  //   function addBackgroundImage(image) {
  //     document.body.style.backgroundImage = `url(${image})`;
  //   }

  //   switch (condition.textContent) {
  //     case "Partially cloudy":
  //     case "Sky Coverage Increasing": {
  //       img.src = partiallyCloudy;
  //       img.setAttribute("alt", "Partially cloudy");
  //       addBackgroundImage(cloudy);
  //       break;
  //     }
  //     case "Clear":
  //     case "Sky Coverage Decreasing": {
  //       img.src = clearSky;
  //       img.setAttribute("alt", "Clear Sky");
  //       addBackgroundImage(clear);
  //       break;
  //     }
  //     case "Blowing Or Drifting Snow":
  //     case "Heavy Rain And Snow":
  //     case "Light Rain And Snow":
  //     case "Snow":
  //     case "Snow And Rain Showers":
  //     case "Snow Showers":
  //     case "Heavy Snow":
  //     case "Light Snow": {
  //       img.src = blowingSnow;
  //       img.setAttribute("alt", "Blowing Or Drifting Snow");
  //       break;
  //     }
  //     case "Overcast": {
  //       img.src = overcast;
  //       img.setAttribute("alt", "Overcast Sky");
  //       break;
  //     }
  //     case "Rain":
  //     case "Rain, Partially cloudy":
  //     case "Rain, Overcast":
  //     case "Rain Showers":
  //     case "Heavy Rain":
  //     case "Light Rain":
  //     case "Heavy Drizzle/Rain":
  //     case "Light Drizzle/Rain": {
  //       img.src = raining;
  //       img.setAttribute("alt", "Raining");
  //       break;
  //     }
  //     case "Heavy Freezing Drizzle/Freezing Rain":
  //     case "Light Freezing Drizzle/Freezing Rain":
  //     case "Heavy Freezing Rain":
  //     case "Light Freezing Rain":
  //     case "Ice":
  //     case "Freezing Drizzle/Freezing Rain": {
  //       img.src = freezingRain;
  //       img.setAttribute("alt", "Freezing Rain");
  //       break;
  //     }
  //     case "Freezing Fog": {
  //       img.src = freezingFog;
  //       img.setAttribute("alt", "Freezing Fog");
  //       break;
  //     }
  //     case "Tornado": {
  //       img.src = tornado;
  //       img.setAttribute("alt", "Tornado");
  //       break;
  //     }
  //     case "Hail Showers":
  //     case "Hail": {
  //       img.src = hail;
  //       img.setAttribute("alt", "Hail Showers");
  //       break;
  //     }
  //     case "Lightning Without Thunder": {
  //       img.src = lightning;
  //       img.setAttribute("alt", "Lightning Without Thunder");
  //       break;
  //     }
  //     case "Mist":
  //     case "Smoke Or Haze":
  //     case "Fog": {
  //       img.src = mist;
  //       img.setAttribute("alt", "Misty Forest");
  //       break;
  //     }
  //     case "Drizzle":
  //     case "Heavy Drizzle":
  //     case "Light Drizzle": {
  //       img.src = drizzle;
  //       img.setAttribute("alt", "Drizzle Rain");
  //       break;
  //     }
  //     case "Squalls": {
  //       img.src = squalls;
  //       img.setAttribute("alt", "Teton Squalls");
  //       break;
  //     }
  //     case "Thunderstorm":
  //     case "Thunderstorm Without Precipitation": {
  //       img.src = thunderstorm;
  //       img.setAttribute("alt", "Thunderstorms");
  //       break;
  //     }
  //     case "Dust storm": {
  //       img.src = dustStorm;
  //       img.setAttribute("alt", "Dust Storm");
  //       break;
  //     }
  //     default:
  //       img.src = partiallyCloudy;
  //       img.setAttribute("alt", "Partially cloudy");
  //   }
}
