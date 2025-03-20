"use client";
import { Input } from "@/components/ui/input";
import { clientFetchWeather } from "@/server/weather-by-zip";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ZipCodeForm = () => {
  return (
    <form
      action={clientFetchWeather}
      className="flex max-w-sm items-end gap-1.5"
    >
      <div className="flex-row">
        <Label htmlFor="zipCode" className="mb-2 ml-1">
          Panel Location
        </Label>
        <Input type="text" id="zipCode" name="zipCode" placeholder="Zip Code" />
      </div>
      <Button type="submit">Update</Button>
    </form>
  );
};

export default ZipCodeForm;
