function mango(quantity, price) {
  let mangoFree = Math.floor(quantity / 3);
  return (quantity - mangoFree) * price;
}
console.log(mango(7, 2));
