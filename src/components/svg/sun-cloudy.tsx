const SunCloudy = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sun */}
      <circle cx="100" cy="100" r="40" fill="yellow" />

      {/* Sun rays */}
      <line x1="100" y1="10" x2="100" y2="40" stroke="yellow" strokeWidth="4" />
      <line
        x1="100"
        y1="160"
        x2="100"
        y2="190"
        stroke="yellow"
        strokeWidth="4"
      />
      <line x1="10" y1="100" x2="40" y2="100" stroke="yellow" strokeWidth="4" />
      <line
        x1="160"
        y1="100"
        x2="190"
        y2="100"
        stroke="yellow"
        strokeWidth="4"
      />
      <line x1="30" y1="30" x2="60" y2="60" stroke="yellow" strokeWidth="4" />
      <line
        x1="140"
        y1="140"
        x2="170"
        y2="170"
        stroke="yellow"
        strokeWidth="4"
      />
      <line x1="30" y1="170" x2="60" y2="140" stroke="yellow" strokeWidth="4" />
      <line x1="140" y1="60" x2="170" y2="30" stroke="yellow" strokeWidth="4" />

      {/* Cloud 1 */}
      <ellipse cx="70" cy="100" rx="30" ry="20" fill="lightgray" />
      <ellipse cx="90" cy="90" rx="25" ry="15" fill="lightgray" />
      <ellipse cx="110" cy="100" rx="30" ry="20" fill="lightgray" />

      {/* Cloud 2 */}
      <ellipse cx="130" cy="120" rx="30" ry="20" fill="lightgray" />
      <ellipse cx="150" cy="110" rx="25" ry="15" fill="lightgray" />
      <ellipse cx="170" cy="120" rx="30" ry="20" fill="lightgray" />
    </svg>
  );
};

export default SunCloudy;
