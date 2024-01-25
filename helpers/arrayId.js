import { productData, ciudadData, coloniaData, vendedorData } from './findOrCreate.js';
function arrProdId(prod) {
  return prod.map(async (product) => {
    const { _id: id } = await productData({ product })
    return { product, id };
  }, [])
}
function arrColoId(colo) {
  return colo.map(async (colonia) => {
    const { _id: id } = await coloniaData({ colonia })
    return { colonia, id };
  }, [])
}
function arrCiudId(ciud) {
  return ciud.map(async (ciudad) => {
    const { _id: id } = await ciudadData({ ciudad })
    return { ciudad, id };
  }, [])
}
function arrVendId(vend) {
  return vend.map(async (name) => {
    const { _id: id } = await vendedorData({ name })
    return { vendedor: name, id };
  }, [])
}

export { arrCiudId, arrColoId, arrProdId, arrVendId}