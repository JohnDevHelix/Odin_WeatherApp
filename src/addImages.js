import { CreateElement } from "./createElement";
import { weatherList } from "./weatherList";

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
import defaultIcon from "./public/images/icons/default-icon.png";
import defaultNightIcon from "./public/images/icons/defaultNight-icon.png";
import clearNightIcon from "./public/images/icons/clearNight-icon.png";
import fogNightIcon from "./public/images/icons/fogNight-icon.png";
import sandstormNightIcon from "./public/images/icons/sandstormNight-icon.png";
import snowNightIcon from "./public/images/icons/snowNight-icon.png";
import thunderstormNightIcon from "./public/images/icons/thunderstormNight-icon.png";
import rainNightIcon from "./public/images/icons/rainNight-icon.png";

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
import defaultBg from "./public/images/background/default-bg.jpg";
import defaultNightBg from "./public/images/background/defaultNight-bg.jpg";
import clearNightBg from "./public/images/background/clearNight-bg.jpg";
import fogNightBg from "./public/images/background/fogNight-bg.jpg";
import sandstormNightBg from "./public/images/background/sandstormNight-bg.jpg";
import snowNightBg from "./public/images/background/snowNight-bg.jpg";
import thunderstormNightBg from "./public/images/background/thunderstormNight-bg.jpg";
import rainNightBg from "./public/images/background/rainNight-bg.jpg";

export function AddImages(time) {
  const imgContainer = document.querySelector(".image-container");
  const condition = document.querySelector(".h2-content");
  const img = CreateElement("img", imgContainer, "condition-img");

  const currentTime = parseInt(time);
  const timeOfDay =
    currentTime >= 6 && currentTime < 19 ? "dayTime" : "nightTime";

  const weather = weatherList.find((w) => condition.textContent.includes(w));
  console.log(weather);
  switch (weather) {
    case "Partially cloudy":
    case "Sky Coverage Increasing": {
      timeOfDay === "dayTime"
        ? addBackgroundImage(cloudyIcon, weather, cloudyBg)
        : addBackgroundImage(defaultNightIcon, weather, overcastBg);
      break;
    }
    case "Clear":
    case "Sky Coverage Decreasing": {
      timeOfDay === "dayTime"
        ? addBackgroundImage(clearIcon, weather, clearBg)
        : addBackgroundImage(clearNightIcon, weather, clearNightBg);
      break;
    }
    case "Blowing Or Drifting Snow":
    case "Heavy Rain And Snow":
    case "Light Rain And Snow":
    case "Snow":
    case "Snow And Rain Showers":
    case "Snow Showers":
    case "Heavy Snow":
    case "Light Snow": {
      timeOfDay === "dayTime"
        ? addBackgroundImage(snowyIcon, weather, snowyBg)
        : addBackgroundImage(snowNightIcon, weather, snowNightBg);
      break;
    }
    case "Overcast": {
      addBackgroundImage(overcastIcon, weather, overcastBg);
      break;
    }
    case "Rain":
    case "Rain, Partially cloudy":
    case "Rain, Overcast":
    case "Rain Showers":
    case "Heavy Rain":
    case "Light Rain":
    case "Heavy Drizzle/Rain":
    case "Light Drizzle/Rain": {
      timeOfDay === "dayTime"
        ? addBackgroundImage(rainingIcon, weather, rainingBg)
        : addBackgroundImage(rainNightIcon, weather, rainNightBg);
      break;
    }
    case "Heavy Freezing Drizzle/Freezing Rain":
    case "Light Freezing Drizzle/Freezing Rain":
    case "Heavy Freezing Rain":
    case "Light Freezing Rain":
    case "Ice":
    case "Freezing Drizzle/Freezing Rain":
    case "Hail Showers":
    case "Hail": {
      addBackgroundImage(hailIcon, weather, hailBg);
      break;
    }
    case "Freezing Fog": {
      addBackgroundImage(freezingFogIcon, weather, freezingFogBg);
      break;
    }
    case "Tornado": {
      addBackgroundImage(tornadoIcon, weather, tornadoBg);
      break;
    }
    case "Lightning Without Thunder": {
      addBackgroundImage(lightningIcon, weather, lightningBg);
      break;
    }
    case "Mist":
    case "Smoke Or Haze":
    case "Fog": {
      timeOfDay === "dayTime"
        ? addBackgroundImage(fogIcon, weather, fogBg)
        : addBackgroundImage(fogNightIcon, weather, fogNightBg);
      break;
    }
    case "Drizzle":
    case "Heavy Drizzle":
    case "Light Drizzle": {
      addBackgroundImage(drizzleIcon, weather, drizzleBg);
      break;
    }
    case "Squalls": {
      addBackgroundImage(squallsIcon, weather, squallsBg);
      break;
    }
    case "Thunderstorm":
    case "Thunderstorm Without Precipitation": {
      timeOfDay === "dayTime"
        ? addBackgroundImage(thunderstormIcon, weather, thunderstormBg)
        : addBackgroundImage(
            thunderstormNightIcon,
            weather,
            thunderstormNightBg
          );
      break;
    }
    case "Dust storm": {
      timeOfDay === "dayTime"
        ? addBackgroundImage(dustIcon, weather, dustBg)
        : addBackgroundImage(sandstormNightIcon, weather, sandstormNightBg);
      break;
    }
    default:
      meridiem === "sun"
        ? addBackgroundImage(defaultIcon, weather, defaultBg)
        : addBackgroundImage(defaultNightIcon, weather, defaultNightBg);
  }

  function addBackgroundImage(source, altName, bgUrl) {
    img.src = source;
    img.setAttribute("alt", altName);
    document.body.style.backgroundImage = `url(${bgUrl})`;
  }
}
