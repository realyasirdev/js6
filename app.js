// Scenario 1: Coffee Shop POS (Cappuccino)

// Step 1: Base price (cannot change)
const basePrice = 4.50;

// Step 2: Sales tax rate (cannot change) e.g. 0.08 = 8%
const salesTaxRate = 0.08;

// Step 3: Total cappuccinos ordered (can change)
let qty = Number(prompt("How many cappuccinos do you want? (e.g., 3)"));

// Step 4: Elite rewards member? (boolean)
let eliteInput = prompt("Are you an elite rewards member? (yes/no)");
let isEliteMember = (eliteInput.toLowerCase() === "yes");

// Step 5: Subtotal (basePrice * qty)
let subtotal = basePrice * qty;

// Step 6: Discount (only if elite member)
const discountRate = 0.10; // 10% discount
let discount = 0;

if (isEliteMember) {
  discount = subtotal * discountRate;
}

// Step 7: Total after discount
let afterDiscount = subtotal - discount;

// Step 8: Tax amount
let tax = afterDiscount * salesTaxRate;

// Step 9: Final total
let total = afterDiscount + tax;

// Step 10: Display result
alert(
  "Cappuccino POS Bill" +
  "\nBase Price: $" + basePrice +
  "\nQuantity: " + qty +
  "\nSubtotal: $" + subtotal.toFixed(2) +
  "\nElite Member: " + isEliteMember +
  "\nDiscount: $" + discount.toFixed(2) +
  "\nAfter Discount: $" + afterDiscount.toFixed(2) +
  "\nTax (" + (salesTaxRate * 100) + "%): $" + tax.toFixed(2) +
  "\nTotal: $" + total.toFixed(2)
);