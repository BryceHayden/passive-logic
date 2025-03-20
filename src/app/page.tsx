import LocationWeather from "@/components/client/location-weather";
import SolarPanel from "@/components/client/solar-panel";
import ZipCodeForm from "@/components/client/zip-code-form";
import { fetchWeather } from "@/server/weather-by-zip";
import SunCloudy from "@/components/svg/sun-cloudy";

export default async function Home() {
  const data = await fetchWeather();
  console.log("Data", data);

  return (
    <div>
      <header className="flex w-ful items-end justify-center gap-x-16 bg-stone-900 px-16 py-8 text-white">
        <LocationWeather
          city={data.name}
          temp={data.main.temp}
          icon={data.weather[0].icon}
          description={data.weather[0].description}
        />
        <ZipCodeForm />
      </header>
      <main className="p-16">
        <SunCloudy />
        <SolarPanel />
      </main>
    </div>
  );
}
