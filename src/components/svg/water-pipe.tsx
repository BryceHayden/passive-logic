const WaterPipe = ({ temp = "cold", bend = false, transform = "0" }) => {
  const waterColor = temp === "cold" ? "#00aaff;" : "#FF0000;";

  if (bend) {
    return (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="200"
        transform={`rotate(${transform}, 0, 0)`}
      >
        <defs>
          <style>
            {`
                .cls-1-{fill:none;stroke:#b87333;stroke-width:8;stroke-linecap:butt;}
                .${`cls-2-${temp}`}{fill:none;stroke:${waterColor};stroke-width:12;stroke-linecap:butt;}
            `}
          </style>
        </defs>
        <title>copper-pipe-cold-water-bend-open-ends</title>

        <path className="cls-1" d="M0 100 H80 Q100 100 100 120 V200" />
        <path className={`cls-2-${temp}`} d="M0 108 H80 Q92 110 92 120 V200" />
        <path className="cls-1" d="M0 116 H80 Q85 115 85 135 V200" />
        {/* <path className="cls-1" d="M10 100 H100 A20 20 0 0 1 120 120 V190" />
        <path className="cls-2" d="M10 105 H95 A15 15 0 0 1 115 125 V185" /> */}
      </svg>
    );
  }

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="190"
    >
      <defs>
        <style>
          {`
        .cls-1{fill:none;stroke:#b87333;stroke-width:8;stroke-linecap:butt;}
        .${`cls-2-${temp}`}{fill:none;stroke:${waterColor};stroke-width:12stroke-linecap:butt;}
        `}
        </style>
      </defs>
      <title>copper-pipe-cold-water-open-ends</title>
      <path className="cls-1" d="M0 100 H200" />
      <path className={`cls-2-${temp}`} d="M0 108 H200" />
      <path className="cls-1" d="M0 116 H200" />
      {/* <rect className="cls-1" x="10" y="10" width="180" height="30" />
      <rect className="cls-2" x="10" y="15" width="180" height="20" /> */}
    </svg>
  );
};

export default WaterPipe;

// return (
//     <svg
//       id="Layer_1"
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 200 200"
//     >
//       <defs>
//         <style>
//           {`
//           .cls-1{fill:none;stroke:#b87333;stroke-width:4;stroke-linecap:butt;}
//           .cls-2{fill:none;stroke:#00aaff;stroke-width:12;stroke-linecap:butt;}
//           `}
//         </style>
//       </defs>
//       <title>copper-pipe-cold-water-bend-open-ends</title>

//       <path className="cls-1" d="M10 50 H100 V140" />
//       <path className="cls-2" d="M10 58 H92 V140" />
//       <path className="cls-1" d="M10 65 H85 V140" />
//     </svg>
// )
