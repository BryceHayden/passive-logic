export default function SolarPanel({ rows = 3, columns = 6 }) {
  const width = 36 * columns;
  const height = 50 * rows;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Outer panel border */}
      <rect
        x="10"
        y="10"
        width={30 * columns + 4}
        height={42 * rows + 8}
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
            x={20 + col * 28}
            y={20 + row * 40}
            width={24}
            height={36}
            fill="#d0d0d0"
            stroke="#888"
            strokeWidth="1"
          />
        ))
      )}
    </svg>
  );
}
