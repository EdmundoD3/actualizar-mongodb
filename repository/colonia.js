import Colonia from "../models/Colonia.js";

export default class ColoniaRepository {
    static async save(colonia) {
      const coloniaFinded = await Colonia.findOne({ colonia });
      if (coloniaFinded) return coloniaFinded;
  
      const newColonia = new Colonia({ colonia });
      return newColonia.save();
    }
    static async saveAll(colonias = []) {
      return Promise.all(
        colonias.map(
          async (colonia) => (await this.save( colonia ))
        )
      );
    }
  }