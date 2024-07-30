function separateHash(texto) {
  const coincidencias = texto.split("#");
  return [coincidencias[0].toLowerCase(), coincidencias[2] || ""];
}
function separateAmountFrequency(AmountFrequency) {
  const frequencyParts = AmountFrequency.split(" x ");
  const amount = frequencyParts[0];
  const frequency = String(frequencyParts[1]);
  return { amount, frequency };
}

const regex = /^(\d+)\s*(.*)/; // Expresión regular para separar el primer número del resto del texto
function separateQuantityProduct(texto) {
  const resultado = texto.match(regex);
  if(!resultado||resultado== ".") return null
  try {
    const quantity = parseInt(resultado[1]);
    const product = resultado[2].trim().toLowerCase();
    const res = { quantity, product };
    return res;
  } catch (error) {
    console.log(error,resultado);
    return null;
  }
}

const separate = (product) => {
    if (!product) return;
    if (product == "."||product=="1 +") return;
    const quantityProducts = separateQuantityProduct(product);
    return quantityProducts
  }

function quantityProducts(products) {
  const arr = [];
  const pushesData = [
    products["PRODUCTOS"],
    products["Prod 2"],
    products["Prod 3"],
    products["Prod 4"],
  ];
  pushesData.forEach((product) => {
    const quantityProducts = separate(product)
    if (quantityProducts) arr.push(quantityProducts);
  });
  return arr;
}
export { separateHash, separateAmountFrequency, quantityProducts, separate };
