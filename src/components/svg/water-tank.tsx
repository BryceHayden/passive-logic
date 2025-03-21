const WaterTank = () => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 400"
      width="130"
    >
      <defs>
        <style>
          {`
                .cls-1{fill:#4d4d4d;}
                .cls-2{fill:#666;}
                .cls-3{fill:#999;}
                .cls-4{fill:#333;}
                .cls-5{fill:#e6e6e6;}
                .cls-6{fill:#00aaff;}
              `}
        </style>
      </defs>

      <rect
        className="cls-5"
        x="50"
        y="50"
        width="100"
        height="300"
        rx="20"
        ry="20"
      />

      <rect
        className="cls-6"
        x="50"
        y="200"
        width="100"
        height="150"
        rx="20"
        ry="20"
      />

      <rect
        className="cls-2"
        x="50"
        y="40"
        width="100"
        height="20"
        rx="10"
        ry="10"
      />

      <rect
        className="cls-2"
        x="50"
        y="340"
        width="100"
        height="20"
        rx="10"
        ry="10"
      />

      <rect className="cls-2" x="90" y="10" width="20" height="30" />
      <rect className="cls-2" x="90" y="360" width="20" height="30" />
    </svg>
  );
};

export default WaterTank;
