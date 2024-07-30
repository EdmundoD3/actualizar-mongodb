import { readcsv } from "./readcsv.js";
import "./mongodb.js";
import UserRepository from "./repository/User.js";
// import { cobrador } from "./CONSTANTS.js";
import CiudadRepository from "./repository/ciudad.js";
import ColoniaRepository from "./repository/colonia.js";
import ProductRepository from "./repository/products.js";
import obtainData from "./helpers/obtainData.js";
import AddParameters from "./helpers/addParameters.js";
import StatusRepository from "./repository/statusRepository.js";
import ClientRepository from "./repository/clientRepository.js";


async function init() {
  console.log("espere");
  const clientes = await readcsv();
  const { ciudades, colonias, products, vendedores } = obtainData(clientes);
  const usersSearch = await Promise.all(
    vendedores.map(
      (vendedor) => UserRepository.save({ name: vendedor })
    )
  );
  const ciudadesId = await CiudadRepository.saveAll(ciudades);
  const coloniasId = await ColoniaRepository.saveAll(colonias);
  const productsId = await ProductRepository.saveAll(products);
  console.log("sub datos actualizados");
  // const cobradorfinded = await UserRepository.findById(cobrador.id);

  const statusId = (await StatusRepository.save("pending"))._id
  const addParametes = AddParameters({ciudadesId,coloniasId,productsId,usersSearch})
  const processedClients = addParametes(clientes)
  console.log("almacenando clientes...");
  await ClientRepository.saveAll(processedClients,statusId)
  await ClientRepository.registeredData()
  console.log("Exito del proceso puede cerrar la consola");
  // console.log({ ciudades, colonias, products, vendedores });
}

init();
