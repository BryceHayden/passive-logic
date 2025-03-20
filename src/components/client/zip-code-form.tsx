"use client";
import { Input } from "@/components/ui/input";
import { clientFetchWeather } from "@/server/weather-by-zip";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";

const ZipCodeForm = () => {
  const [zipLength, setZipLength] = useState(0);
  const [message, setMessage] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const zipText = e.target.value;

    const length = zipText.length;
    if (length === 0 || length === 5) {
      setMessage("");
    } else {
      setMessage("Incorrect zip code.");
    }

    setZipLength(zipText.length);
  };

  return (
    <div className="overflow-visible">
      <form action={clientFetchWeather}>
        <div className="flex max-w-sm items-end gap-1.5">
          <div className="flex-row">
            <Label htmlFor="zipCode" className="mb-2 ml-1">
              Panel Location
            </Label>
            <Input
              type="number"
              id="zipCode"
              name="zipCode"
              placeholder="Zip Code"
              onChange={handleChange}
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div
            // Hack since shadcn doesn't pass on cursor css when disabled
            className={`${
              zipLength === 5 ? `cursor-pointer` : `cursor-not-allowed`
            }`}
          >
            <Button
              className={`bg-stone-300 text-stone-950 hover:bg-stone-400 cursor-pointer`}
              type="submit"
              disabled={zipLength !== 5}
            >
              Update
            </Button>
          </div>
        </div>
      </form>
      <div className="text-red-500 h-0 overflow-visible">{message}</div>
    </div>
  );
};

export default ZipCodeForm;
