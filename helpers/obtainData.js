const addDiferentData = (arr, data) => {
  if (
    data == "" ||
    data == null ||
    data == undefined ||
    data == "." ||
    data == "+"
  )
    return;
  const findData = arr.find((e) => data == e);
  if (findData) return;
  arr.push(data);
};

export default function obtainData(data) {
    const ciudades = [];
    const colonias = [];
    const products = [];
    const vendedores = [];
    data.forEach(({ colonia, ciudad, vendedor, prod1, prod2, prod3, prod4 }) => {
      addDiferentData(colonias, colonia);
      addDiferentData(ciudades, ciudad);
      addDiferentData(vendedores, vendedor);
      addDiferentData(products, prod1?.product);
      addDiferentData(products, prod2?.product);
      addDiferentData(products, prod3?.product);
      addDiferentData(products, prod4?.product);
    });
    return { ciudades, colonias, products, vendedores };
  }