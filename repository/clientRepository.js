import Customer from "../models/Customer.js";
let lastDate = new Date();
function parseDate(dateString = "") {
  if (!dateString) return new Date();
  const [day, month, year] = dateString.split("/").map(Number);
  // Los meses en JavaScript son indexados desde 0 (Enero es 0, Diciembre es 11)
  const newDate = new Date(year, month - 1, day);
  if (isNaN(newDate)) return lastDate;
  lastDate = newDate;
  return newDate;
}
let countSavedClient = 0
let countExistClient = 0
class ClientRepository {
  static async save({
    name,
    phone,
    date,
    statusId,
    calle,
    entreCalles,
    referencia,
    coloniaId,
    ciudadId,
  }) {
    const customerFinded = await Customer.findOne({
      name,
      'direction.coloniaId':coloniaId
    });
    if (customerFinded){ 
      countExistClient++
      return customerFinded;
    }

    const direction = {
      calle,
      coloniaId,
      ciudadId,
      entreCalles,
      referencia,
    };
    const newCustomer = new Customer({
      name,
      phone,
      statusId,
      direction,
      date: parseDate(date),
      purchases: [],
      updatedAt: new Date(),
    });
    countSavedClient++
    return newCustomer.save();
  }
  static async saveAll(clientes, statusId) {
    return Promise.all(
      clientes.map((cliente) => this.save({ ...cliente, statusId }))
    );
  }
  static async registeredData() {
    console.log("Clientes nuevos almacenados: ",countSavedClient);
    console.log("Clientes no almacenados por que ya existen: ",countExistClient);
  }
}

export default ClientRepository;
