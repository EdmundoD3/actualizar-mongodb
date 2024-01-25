function separateHash(texto) {
  const coincidencias = texto.split('#');
  return [coincidencias[0].toLowerCase(), coincidencias[2] || ''];
}
function separateAmountFrequency(AmountFrequency) {
  const frequencyParts = AmountFrequency.split(" x ");
  const amount = frequencyParts[0]
  const frequency = String(frequencyParts[1])
  return { amount, frequency }
}

const regex = /^(\d+)\s*(.*)/;  // Expresión regular para separar el primer número del resto del texto
function separateQuantityProduct(texto) {
  const resultado = texto.match(regex)
  const quantity = parseInt(resultado[1]);
  const product = resultado[2].trim().toLowerCase();
  const resultadoFinal = { quantity, product };
  return resultadoFinal
}
function quantityProducts(products) {
  const arr = [separateQuantityProduct(products["PRODUCTOS"])];
  for (let i = 2; i <= 4; i++) {
    if (products["Prod " + i] !== "") arr.push(separateQuantityProduct(products["Prod " + i]));
  }
  return arr;
}
export {separateHash, separateAmountFrequency, quantityProducts}