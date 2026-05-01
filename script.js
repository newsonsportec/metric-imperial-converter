const fromValue = document.getElementById("fromValue");
const fromUnit = document.getElementById("fromUnit");
const toValue = document.getElementById("toValue");
const toUnit = document.getElementById("toUnit");
const formulaBox = document.getElementById("formulaBox");

const unitsToMeters = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344
};

const unitNames = {
  mm: "millimeter",
  cm: "centimeter",
  m: "meter",
  km: "kilometer",
  in: "inch",
  ft: "foot",
  yd: "yard",
  mi: "mile"
};

function convertLength() {
  const input = fromValue.value.trim();

  if (input === "") {
    toValue.value = "";
    formulaBox.textContent = "Formula: Enter a value to see the conversion formula.";
    return;
  }

  const numericValue = parseFloat(input);

  if (isNaN(numericValue)) {
    toValue.value = "";
    formulaBox.textContent = "Formula: Please enter a valid number.";
    return;
  }

  const meters = numericValue * unitsToMeters[fromUnit.value];
  const result = meters / unitsToMeters[toUnit.value];

  toValue.value = result.toFixed(6).replace(/\.?0+$/, "");

  const oneUnit = unitsToMeters[fromUnit.value] / unitsToMeters[toUnit.value];
  formulaBox.textContent =
    `Formula: 1 ${unitNames[fromUnit.value]} = ${oneUnit.toFixed(6).replace(/\.?0+$/, "")} ${unitNames[toUnit.value]}`;
}

fromValue.addEventListener("input", convertLength);
fromUnit.addEventListener("change", convertLength);
toUnit.addEventListener("change", convertLength);
