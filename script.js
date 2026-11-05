
// Part 1: Date Display

const today = new Date();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const year = today.getFullYear();

const dateMessage = "Today is " + month + "/" + day + "/" + year;
document.getElementById("dateOutput").textContent = dateMessage;

// Part 2: Number Conversion

const valueOne = "50";
const valueTwo = "25.75";
const valueThree = "apple";
const valueFour = "120";

const numberOne = Number(valueOne);
const numberTwo = Number(valueTwo);
const numberThree = Number(valueThree);
const numberFour = Number(valueFour);

const resultOne = "Original: '" + valueOne + "' | Converted: " + numberOne +
    " | isNaN: " + Number.isNaN(numberOne) +
    " | isInteger: " + Number.isInteger(numberOne);

const resultTwo = "Original: '" + valueTwo + "' | Converted: " + numberTwo +
    " | isNaN: " + Number.isNaN(numberTwo) +
    " | isInteger: " + Number.isInteger(numberTwo);

const resultThree = "Original: '" + valueThree + "' | Converted: " + numberThree +
    " | isNaN: " + Number.isNaN(numberThree) +
    " | isInteger: " + Number.isInteger(numberThree);

const resultFour = "Original: '" + valueFour + "' | Converted: " + numberFour +
    " | isNaN: " + Number.isNaN(numberFour) +
    " | isInteger: " + Number.isInteger(numberFour);

// Part 4: Conditional Messages

let messageOne;
if (Number.isNaN(numberThree)) {
    messageOne = "Apple is not a valid number.";
} else {
    messageOne = "Apple is a valid number.";
}

let messageTwo;
if (Number.isInteger(numberOne)) {
    messageTwo = "50 is an integer.";
} else {
    messageTwo = "50 is not an integer.";
}

const conversionOutput =
    "<p>" + resultOne + "</p>" +
    "<p>" + resultTwo + "</p>" +
    "<p>" + resultThree + "</p>" +
    "<p>" + resultFour + "</p>" +
    "<p>" + messageOne + "</p>" +
    "<p>" + messageTwo + "</p>";

document.getElementById("numberConversionOutput").innerHTML = conversionOutput;

// Part 3: Math and Formatting

const itemPrice = 49.99;
const shippingCost = 5.50;
const taxRate = 0.095;

const subtotal = itemPrice + shippingCost;
const taxAmount = subtotal * taxRate;
const total = subtotal + taxAmount;

const mathMessage =
    "<p>Item Price: $" + itemPrice.toFixed(2) + "</p>" +
    "<p>Shipping Cost: $" + shippingCost.toFixed(2) + "</p>" +
    "<p>Subtotal: $" + subtotal.toFixed(2) + "</p>" +
    "<p>Tax Amount: $" + taxAmount.toFixed(2) + "</p>" +
    "<p>Total Cost: $" + total.toFixed(2) + "</p>";

document.getElementById("mathOutput").innerHTML = mathMessage;
