import ZipCodeForm from "@/components/client/zip-code-form";
import { fetchWeather } from "@/server/weather-by-zip";
import SunCloudy from "@/components/svg/sun-cloudy";
import SolarPanel from "@/components/svg/solar-panel";

export default async function Home() {
  const data = await fetchWeather();
  console.log("Data", data);

  return (
    <div className="p-16">
      <div className="flex w-full h-[58px] items-center justify-center gap-x-16">
        <div className="flex h-full items-end gap-x-4">
          <div className="flex-row">
            Lehi
            <div>{data.main.temp} </div>
          </div>
          <img
            className="w-[58px]"
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt={`Current Weather: ${data.weather[0].description}`}
          />
        </div>
        <ZipCodeForm />
      </div>

      <SunCloudy />
      <SolarPanel rows={5} columns={6} />
    </div>
  );
}
