import { createReadStream } from 'fs';
import csv from 'csv-parser';
import { searchOrSavedCustomer, searchOrSavedPurchase } from './helpers/searchOrSave.js';
import { formatDate } from './helpers/formatDate.js';
import { quantityProducts, separateAmountFrequency, separateHash } from './helpers/separate.js';
import { arrCiudId, arrColoId, arrProdId, arrVendId } from './helpers/arrayId.js';
import { objectToLowercase } from './helpers/ObjectToLowercase.js';
import { createExtraPropertys } from './helpers/extraPropertys.js';

// Definir cobrador
const cobradorId = '65827e8329cbd4acca91769a'

// Nombre del archivo CSV
const archivoCsv = 'datos.csv';

// Lista para almacenar los datos
const datos = [];
// incluye los productos/colonia/ciudad/vendedor una sola vez que se repitan en el archivp
const prod = []
const colo = []
const ciud = []
const vend = []

function addVendedorId({ client, index, vendedorId }) {
  const vendedor = client.purchase.vendedorId
  const { id } = vendedorId.find(({ vendedor: ven }) => ven === vendedor)
  datos[index].purchase.vendedorId = id
}

const arrNotIncludes = (arr = [], valor) => !arr.includes(valor)

// Abrir el archivo CSV y leer los datos
createReadStream(archivoCsv)
  .pipe(csv())
  .on('data', async (fila) => {
    const filaLowercase = objectToLowercase(fila)

    const extraPropertys = createExtraPropertys(filaLowercase)
    const entries = Object.entries(filaLowercase)
    filaLowercase['CTA'] = entries[0][1]

    const [calle, numeroCasa] = separateHash(filaLowercase["DIRECCION"]);
    const products = quantityProducts(filaLowercase);
    products.forEach(({ product }) => prod.includes(product) || prod.push(product))

    if (arrNotIncludes(colo, filaLowercase["COLONIA"])) colo.push(filaLowercase["COLONIA"])
    if (arrNotIncludes(ciud, filaLowercase["CIUDAD"]))
      ciud.push(filaLowercase["CIUDAD"])
    if (arrNotIncludes(vend, filaLowercase["VENDEDORA"]))
      vend.push(filaLowercase["VENDEDORA"])

    const direction = {
      "calle": calle,
      "numeroCasa": numeroCasa,
      "colonia": filaLowercase["COLONIA"],
      "ciudad": filaLowercase["CIUDAD"],
      "entreCalles": filaLowercase["ENTRE CALL"],
      "referencia": filaLowercase["REF"]
    };
    const dataClient = {
      customer: {
        name: filaLowercase["NOMBRE"],
        phone: filaLowercase["TELEFONO"],
        date: formatDate(filaLowercase['FECHA']),
        direction: direction,
        updatedAt: new Date()
      },
      purchase: {
        vendedorId: filaLowercase["VENDEDORA"],
        cobradorId: cobradorId,
        cuenta: filaLowercase['CTA'],
        saleDate: formatDate(filaLowercase['FECHA']),
        creditPrice: filaLowercase["CREDITO"],
        cashPrice: filaLowercase["D.CONTADO"],
        collectionDate: formatDate(filaLowercase["IN. COBRO"]),
        collectionFrequency: separateAmountFrequency(filaLowercase["PAGOS"]),
        products: products,
        isActive: false,
        ...extraPropertys
      }
    };

    if (filaLowercase['CTA'] !== '') return datos.push(dataClient);
  })
  .on('end', async () => {

    //guardamos en una lista los datos repetitivos para facilitar las busquedas
    const productId = await Promise.all(arrProdId(prod))
    const coloniaId = await Promise.all(arrColoId(colo))
    const ciudadId = await Promise.all(arrCiudId(ciud))
    const vendedorId = await Promise.all(arrVendId(vend))

    await Promise.all(datos.map(async (client, index) => {
      addVendedorId({ client, index, vendedorId })
      const customerSaved = await searchOrSavedCustomer({ customer: client.customer })
      const purchase = { ...client.purchase, clientId: customerSaved._id }
      const purchaseSaved = await searchOrSavedPurchase({ purchase })
      if (!purchaseSaved) return console.log("customer", customerSaved, " not added purchesId")
      const purchaseId = purchaseSaved._id
      const isPurchaseAlredyExist = customerSaved.purchase.find((purchase) => String(purchase) == String(purchaseId))
      if (isPurchaseAlredyExist) return;
      customerSaved.purchase.push(purchaseId)
      customerSaved.save()
    }))
  })
  .on('close', () => {
    console.log('Stream cerrado.');
  });
