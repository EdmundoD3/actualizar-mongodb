const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((acc, fn) => fn(acc), initialValue);

const AddParameters = ({
  ciudadesId = [],
  coloniasId = [],
  productsId = [],
  usersSearch = [],
}) => {
  function ciudad(cliente) {
    const searchedCity = cliente.ciudad;
    if (!searchedCity) {
      cliente.ciudadId = null;
      return cliente;
    }
    const { _id } = ciudadesId.find(({ ciudad }) => searchedCity == ciudad);
    cliente.ciudadId = _id;
    return cliente;
  }
  function colonia(cliente) {
    const searchedColonia = cliente.colonia;
    if (!searchedColonia) {
      cliente.coloniaId = null;
      return cliente;
    }
    const { _id } = coloniasId.find(
      ({ colonia }) => searchedColonia == colonia
    );
    cliente.coloniaId = _id;
    return cliente;
  }
  function idProduct({ quantity, product: searchedProduct }) {
    const { _id } = productsId.find(
      ({ product }) => product == searchedProduct
    );
    return { quantity, product: _id };
  }
  function products(cliente) {
    const products = [];
    const productsSearched = [
      cliente?.prod1,
      cliente?.prod2,
      cliente?.prod3,
      cliente?.prod4,
    ];
    productsSearched.forEach((prod) => {
      if (prod) products.push(idProduct(prod));
    });

    cliente.products = products;
    return cliente;
  }
  function idUser(cliente) {
    if (!cliente.vendedor) cliente.vendedorId = null;
    else {
      const { _id } = usersSearch.find(({ name }) => name == cliente.vendedor);
      cliente.vendedorId = _id;
    }

    return cliente;
  }
  
  function addIds(clientes) {
    const addId = pipe(ciudad, colonia, products, idUser);

    const processedClients = clientes.map((cliente) => addId(cliente));
    return processedClients;
  }
  return addIds;
};
export default AddParameters;
