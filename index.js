const orderSorter = (order) => {
  order = order.split(",");

  const obj = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
  };

  for (let i of order) {
    obj[i]++;
  }

  return obj;
};

while (true) {
  const userInput = prompt(
    "Enter your order (or type 'exit' to quit)",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  if (userInput === 'exit')
    break;

  const obj = orderSorter(userInput);
  console.log("You ordered");
  for (let key in obj) {
    console.log(obj[key] + " " + key);
  }
}
