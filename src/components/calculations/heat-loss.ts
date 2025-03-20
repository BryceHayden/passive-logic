function heatLossConduction(k, L, T_w, T_env, r_o, r_i) {
  return (2 * Math.PI * k * L * (T_w - T_env)) / Math.log(r_o / r_i);
}

function heatLossConvection(h, A, T_pipe, T_env) {
  return h * A * (T_pipe - T_env);
}

function totalHeatLoss(k, L, T_w, T_env, r_o, r_i, h) {
  const Q_cond = heatLossConduction(k, L, T_w, T_env, r_o, r_i);
  const T_pipe = T_w; // Assuming pipe surface temperature equals water temperature for simplicity
  const A = 2 * Math.PI * r_o * L;
  const Q_conv = heatLossConvection(h, A, T_pipe, T_env);
  return Q_cond + Q_conv;
}

// Example parameters
const k = 200; // Thermal conductivity of the pipe material (W/m·K)
const L = 10; // Length of the pipe (m)
const T_w = 350; // Temperature of the water (K)
const T_env = 300; // Ambient temperature (K)
const r_o = 0.05; // Outer radius of the pipe (m)
const r_i = 0.04; // Inner radius of the pipe (m)
const h = 10; // Convective heat transfer coefficient (W/m²·K)

const Q_total = totalHeatLoss(k, L, T_w, T_env, r_o, r_i, h);
console.log(`Total heat loss: ${Q_total.toFixed(2)} W`);
