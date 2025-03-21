"use client";

import { fetchWeather } from "@/server/weather-by-zip";

import LocationWeather from "@/components/client/weather/local-weather";
import ZipCodeForm from "@/components/client/weather/zip-code-form";
import SunCloudy from "@/components/svg/sun-cloudy";
import SolarPanel from "@/components/client/solar-panel";
import { useEffect, useState } from "react";
import WaterPump from "@/components/svg/water-pump";
import WaterTank from "@/components/svg/water-tank";
import WaterPipe from "@/components/svg/water-pipe";

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

  return (
    <div>
      {data !== null && (
        <>
          <header className="flex w-ful items-end justify-center gap-x-16 bg-stone-900 px-16 py-8 text-white">
            <LocationWeather
              city={data.name}
              temp={data.main.temp}
              icon={data.weather[0].icon}
              description={data.weather[0].description}
            />
            <ZipCodeForm zipCode={zipCode} setZipCode={setZipCode} />
          </header>

          <main className="flex items-center justify-center py-20">
            <div className="relative z-2 top-55 left-220 border-dashed border-2 border-black h-[600px] min-h-[1em] w-0 self-stretch"></div>
            <div>
              <SunCloudy />
              <div className="flex items-center">
                {[...Array(4)].map((_, index) => (
                  <WaterPipe
                    bend={index === 0}
                    transform={index === 0 ? "270" : "0"}
                    key={`top-${index}`}
                  />
                ))}
                <div className="relative right-18 -top-10 z-2 w-0 overflow-visible">
                  <WaterPump />
                </div>
                {[...Array(4)].map((_, index) => (
                  <WaterPipe bend={index === 3} key={index} />
                ))}
              </div>
              <div className="flex items-center justify-between max-w-[1576px]">
                <div className="flex items-center">
                  <SolarPanel />
                  <div className="ml-60 text-4xl">Outside</div>
                </div>
                <div className="flex items-center">
                  <div className="mr-40 text-4xl">Inside Home</div>
                  <div className="relative right-11">
                    <WaterTank />
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <WaterPipe temp="hot" bend transform="180" />
                {[...Array(6)].map((_, index) => (
                  <div className="relative mt-[-10px]" key={index}>
                    <WaterPipe temp="hot" key={`bottom-${index}`} />
                  </div>
                ))}
                <WaterPipe temp="hot" bend transform="90" />
              </div>
            </div>
          </main>
        </>
      )}
      {data === null && <div>Loading...</div>}
    </div>
  );
};

export default WaterHeater;
