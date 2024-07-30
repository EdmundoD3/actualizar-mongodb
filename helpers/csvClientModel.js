import { separate } from "./separate.js";

const cleanData = (dato) => {
  const noExisteElDato = !dato;
  if (noExisteElDato) return null;
  const elDatoEsUnPunto = dato == ".";
  if (elDatoEsUnPunto) return null;
  //si el dato es correcto, cambialo a minuscula
  return dato.toLowerCase();
};

class Client {
  constructor({
    cuenta,
    NOMBRE,
    DIRECCION,
    COLONIA,
    CIUDAD,
    ["ENTRE CALL"]: ENTRECALLES,
    TELEFONO,
    PRODUCTOS,
    ["Prod 2"]: PROD2,
    ["Prod 3"]: PROD3,
    ["Prod 4"]: PROD4,
    PAGOS,
    REF,
    FECHA,
    VENDEDORA,
    CREDITO,
    ["D.CONTADO"]: dCONTADO,
    ["IN. COBRO"]: INCOBRO,
  }) {
    this.cuenta = cuenta || null;
    this.name = NOMBRE.toLowerCase() || "venta de contado";
    this.calle = cleanData(DIRECCION);
    this.colonia = cleanData(COLONIA);
    this.ciudad = cleanData(CIUDAD);
    this.entreCalles = cleanData(ENTRECALLES);
    this.phone = cleanData(TELEFONO != "NT" ? TELEFONO : null);
    this.prod1 = separate(cleanData(PRODUCTOS)) || null;
    this.prod2 = separate(cleanData(PROD2)) || null;
    this.prod3 = separate(cleanData(PROD3)) || null;
    this.prod4 = separate(cleanData(PROD4)) || null;
    this.pagos = cleanData(PAGOS);
    this.referencia = cleanData(REF);
    this.date = cleanData(FECHA);
    this.vendedor = cleanData(VENDEDORA);
    this.credito = cleanData(CREDITO);
    this.contado = cleanData(dCONTADO);
    this.inCobro = cleanData(INCOBRO);
  }
}

export default Client;
