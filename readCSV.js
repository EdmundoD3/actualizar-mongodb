import { createReadStream, promises } from "fs";
import csv from "csv-parser";
import Client from "./helpers/csvClientModel.js";

const path = "datos.csv";
export async function readcsv() {
  const results = [];

  return new Promise((res, rej) => {
    promises
      .access(path)
      .catch(() => {
        throw new Error("Archivo no existe\nFavor de guardar en la carpeta raiz de la aplicacion\nel archivo 'datos.csv'")
      });
    try {
      createReadStream(path)
        .pipe(csv())
        .on("data", (data) => {
          const cuenta = Object.entries(data)[0][1];
          if (cuenta) results.push(new Client({ ...data, cuenta }));
        })
        .on("end", () => {
          res(results);
        });
    } catch (error) {
      rej(error);
    }
  });
}
