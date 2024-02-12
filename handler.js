module.exports.checkInventory = async (event) => {
  console.log(event);
  return "Stock available";
}

module.exports.calculateTotal = async (event) => {
  console.log(event);
  return 1000;
}