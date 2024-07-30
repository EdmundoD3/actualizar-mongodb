import Ciudad from "../models/Ciudad.js";

export default class CiudadRepository {
  static async save(ciudad) {
    const ciudadFinded = await Ciudad.findOne({ ciudad });
    if (ciudadFinded) return ciudadFinded;

    const newCiudad = new Ciudad({ ciudad });
    return newCiudad.save();
  }
  static async saveAll(ciudades = []) {
    return Promise.all(
      ciudades.map(
        async (ciudad) => (await this.save( ciudad ))
      )
    );
  }
}
