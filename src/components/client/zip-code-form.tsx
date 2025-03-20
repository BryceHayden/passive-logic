"use client";
import { Input } from "@/components/ui/input";
import { fetchWeatherByZip } from "@/server/weather-by-zip";
import { Button } from "@/components/ui/button";

const ZipCodeForm = () => {
  return (
    <form action={fetchWeatherByZip}>
      <Input type="number" name="zipCode" placeholder="Zip Code" />
      <Button type="submit">Change Location</Button>
    </form>
  );
};

export default ZipCodeForm;
