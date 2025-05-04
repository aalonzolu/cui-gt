// ESM build
const munisPerDept = [
  17, 8, 16, 16, 14, 14, 19, 8, 24, 21, 9,
  30, 32, 21, 8, 17, 14, 5, 11, 11, 7, 17
];

/**
 * @param {string} cui 13‑digit CUI
 * @returns {boolean}
 */
export function isValidCui(cui) {
  if (typeof cui !== "string" || cui.length !== 13 || !/^\d{13}$/.test(cui)) {
    return false;
  }
  const serial = cui.slice(0, 8);
  const check  = Number(cui[8]);
  const dept   = Number(cui.slice(9, 11));
  const muni   = Number(cui.slice(11));

  if (!dept || !muni || dept > munisPerDept.length || muni > munisPerDept[dept - 1]) {
    return false;
  }

  const total = [...serial].reduce((sum, digit, i) => sum + Number(digit) * (i + 2), 0);
  return total % 11 === check;
}

export default { isValidCui };
