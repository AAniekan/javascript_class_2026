function calculateFinalPrice(price, discount) {
  if (price < 0) {
    return "Invalid Price";
  }

  if (discount < 0 || discount > 100) {
    return "Invalid Discount";
  }

  let discount_amt = price * (discount / 100);
  let final_price = price - discount_amt;

  return final_price.toFixed(2);
}m

let new_price = calculateFinalPrice(10_000_000, 5);

console.log(new_price);
