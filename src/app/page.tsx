"use client";

import { fetchWeather } from "@/server/weather-by-zip";

import LocationWeather from "@/components/client/weather/local-weather";
import ZipCodeForm from "@/components/client/weather/zip-code-form";
import SunCloudy from "@/components/svg/sun-cloudy";
import SolarPanel from "@/components/client/solar-panel";
import { useEffect, useState } from "react";

interface WeatherData {
  name: string;
  main: {
    temp: string;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
}

const WaterHeater = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [zipCode, setZipCode] = useState(84043);

  useEffect(() => {
    async function getWeather() {
      try {
        const weather = await fetchWeather(zipCode.toString());
        setData(weather);
      } catch (err) {
        //Normally I would have this attached to our logger
        console.log(err);
      }
    }

    getWeather();
  }, [zipCode]);

  if (data !== null) {
    return (
      <div>
        <header className="flex w-ful items-end justify-center gap-x-16 bg-stone-900 px-16 py-8 text-white">
          <LocationWeather
            city={data.name}
            temp={data.main.temp}
            icon={data.weather[0].icon}
            description={data.weather[0].description}
          />
          <ZipCodeForm zipCode={zipCode} setZipCode={setZipCode} />
        </header>
        <main className="p-16">
          <SunCloudy />
          <SolarPanel />
        </main>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default WaterHeater;
