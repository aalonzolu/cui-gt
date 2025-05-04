import assert from "node:assert/strict";
import { isValidCui } from "../src/index.js";

/* --- Casos VÁLIDOS (diferentes deptos/municipios) --- */
const validCuis = [
  "1234567890101", // 01‑Guatemala, muni 01
  "8765432122217", // 22‑Jutiapa,    muni 17
  "1029384741305", // 13‑Huehuetenango, muni 05
  "7654321020924", // 09‑Quetzaltenango, muni 24
];

/* --- Casos INVÁLIDOS (checksum, depto, muni, longitud, etc.) --- */
const invalidCuis = [
  "1234567890000", // depto/muni 00
  "1234567892301", // depto 23 no existe
  "1234567890125", // muni 25 no existe en depto 01
  "123456789010",  // longitud 12 (debe ser 13)
  "5486270650102", // checksum incorrecto
];

/* ---------- Tests ---------- */
for (const cui of validCuis) {
  assert.ok(
    isValidCui(cui),
    `Se esperaba que el CUI fuera VÁLIDO, pero falló: ${cui}`
  );
}

for (const cui of invalidCuis) {
  assert.ok(
    !isValidCui(cui),
    `Se esperaba que el CUI fuera INVÁLIDO, pero pasó: ${cui}`
  );
}

console.log("✔ Todos los tests de CUI‑GT pasaron");
