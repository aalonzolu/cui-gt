import assert from "node:assert/strict";
import { isValidCui } from "../src/index.js";

const VALID = "5486270650101";
const INVALID = "5486270650102";

assert.ok(isValidCui(VALID));
assert.ok(!isValidCui(INVALID));
