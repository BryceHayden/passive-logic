"use server";
import { z } from "zod";

export async function fetchWeatherByZip(formData: FormData) {
  const schema = z.object({
    zipCode: z.string().nonempty().length(5),
  });
  const { zipCode } = schema.parse({
    zipCode: formData.get("zipCode"),
  });

  const countryCode = "US"; //for now we are only doing the US

  try {
    const openWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`,
      { cache: "no-store" }
    );

    const weatherData = await openWeatherResponse.json();

    if (!openWeatherResponse.ok) {
      const { cod, message } = weatherData;
      throw new Error(`\n\nError Code: ${cod} \nMessage: ${message}\n`);
    }

    //Maybe place a DTO here instead of passing everything forward.
    return weatherData;
  } catch (err) {
    //Normally I would have this attached to our logger
    console.log(err);
  }
}
