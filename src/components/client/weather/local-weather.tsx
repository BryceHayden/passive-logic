"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LocationWeatherProps {
  city: string;
  temp: string;
  icon: string;
  description: string;
}

interface TempIndicatorsProps {
  active: "C" | "F";
  toggle: (scale: "C" | "F") => void;
}

const TempIndicators = ({ active, toggle }: TempIndicatorsProps) => {
  let tempScales: ["C" | "F", "C" | "F"] = ["C", "F"];
  if (tempScales[0] !== active) {
    tempScales = ["F", "C"];
  }

  return (
    <>
      <span className={`text-xl font-bold px-4 max-h-min text-white`}>
        °{tempScales[0]}
      </span>
      <span className="font-medium">|</span>
      <Button
        variant="link"
        className={`font-medium transition ease-out hover:scale-125 cursor-pointer py-0 max-h-min text-white`}
        onClick={() => {
          toggle(tempScales[1]);
        }}
      >
        °{tempScales[1]}
      </Button>
    </>
  );
};

const LocationWeather = ({
  city,
  temp,
  icon,
  description,
}: LocationWeatherProps) => {
  const [activeTempScale, setActiveTempScale] = useState<"C" | "F">("C");
  const tempAdjusted =
    activeTempScale === "C"
      ? temp
      : (parseFloat(temp) * (9 / 5) + 32).toFixed(2);

  return (
    <div className="flex items-end gap-x-4">
      <div className="flex-row">
        <div className="flex h-[32px] items-center justify-start text-2xl font-medium ">
          <span>{city}</span>
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt={`Current Weather: ${description}`}
          />
        </div>
        <div>
          {tempAdjusted}
          <TempIndicators
            active={activeTempScale}
            toggle={setActiveTempScale}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationWeather;
