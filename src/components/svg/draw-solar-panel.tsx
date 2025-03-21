export default function SolarPanel({ rows = 3, columns = 6 }) {
  const width = 36 * columns;
  const height = 50 * rows;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Outer panel border */}
      <rect
        x="0"
        y="0"
        width={30 * columns + 34}
        height={42 * rows + 38}
        rx="10"
        fill="#f0f0f0"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Grid of solar cells */}
      {Array.from({ length: rows }, (_, row) =>
        Array.from({ length: columns }, (_, col) => (
          <rect
            key={`${row}-${col}`}
            x={20 + col * 30}
            y={20 + row * 42}
            width={26}
            height={38}
            fill="#d0d0d0"
            stroke="#888"
            strokeWidth="1"
          />
        ))
      )}
    </svg>
  );
}
