const math = require("mathjs");

// Function to calculate solar energy absorbed
function solarEnergyAbsorbed(I, A, eta) {
  return I * A * eta;
}

// Function to calculate heat transfer to water
function heatTransferToWater(m, c, deltaT) {
  return m * c * deltaT;
}

// Function to calculate heat loss in pipe by conduction
function heatLossConduction(k, L, T_w, T_env, r_o, r_i) {
  return (2 * Math.PI * k * L * (T_w - T_env)) / Math.log(r_o / r_i);
}

// Function to calculate heat loss in pipe by convection
function heatLossConvection(h, A, T_pipe, T_env) {
  return h * A * (T_pipe - T_env);
}

// Function to calculate total heat loss in pipe
function totalHeatLoss(k, L, T_w, T_env, r_o, r_i, h) {
  const Q_cond = heatLossConduction(k, L, T_w, T_env, r_o, r_i);
  const T_pipe = T_w; // Assuming pipe surface temperature equals water temperature for simplicity
  const A = 2 * Math.PI * r_o * L;
  const Q_conv = heatLossConvection(h, A, T_pipe, T_env);
  return Q_cond + Q_conv;
}

// Example parameters
const I = 1000; // Solar irradiance (W/m²)
const A_solar = 2; // Area of the solar panel (m²)
const eta = 0.2; // Efficiency of the solar panel
const m = 10; // Mass of the water (kg)
const c = 4180; // Specific heat capacity of water (J/kg·°C)
const deltaT = 40; // Temperature rise of water (°C)
const k = 200; // Thermal conductivity of the pipe material (W/m·K)
const L = 10; // Length of the pipe (m)
const T_w = 350; // Temperature of the water (K)
const T_env = 300; // Ambient temperature (K)
const r_o = 0.05; // Outer radius of the pipe (m)
const r_i = 0.04; // Inner radius of the pipe (m)
const h = 10; // Convective heat transfer coefficient (W/m²·K)

// Calculations
const Q_solar = solarEnergyAbsorbed(I, A_solar, eta);
const Q_water = heatTransferToWater(m, c, deltaT);
const Q_total_loss = totalHeatLoss(k, L, T_w, T_env, r_o, r_i, h);

console.log(`Solar energy absorbed: ${Q_solar.toFixed(2)} W`);
console.log(`Heat transferred to water: ${Q_water.toFixed(2)} J`);
console.log(`Total heat loss: ${Q_total_loss.toFixed(2)} W`);
