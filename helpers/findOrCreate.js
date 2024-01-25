import Ciudad from "../models/Ciudad.js";
import Colonia from "../models/Colonia.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

const productData = async ({ product }) => {
  try {
    const productFinded = await Product.findOne({ product })
    if (!productFinded) {
      // the document not exist, create new document
      const newProduct = new Product({
        product
      });
      return await newProduct.save()
    }
    return productFinded
  } catch (error) {
    console.log(error)
  }
}
const coloniaData = async ({ colonia }) => {
  try {
    const coloniaFinded = await Colonia.findOne({ colonia })
    if (!coloniaFinded) {
      // the document not exist, create new document
      const newColonia = new Colonia({
        colonia
      });
      return await newColonia.save()
    }
    return coloniaFinded
  } catch (error) {
    console.log(error)
  }
}


const ciudadData = async ({ ciudad }) => {
  try {
    const ciudadFinded = await Ciudad.findOne({ ciudad })
    if (!ciudadFinded) {
      // the document not exist, create new document
      const newColonia = new Ciudad({
        ciudad
      });
      return await newColonia.save()
    }
    return ciudadFinded
  } catch (error) {
    console.log(error)
  }
}

const vendedorData = async ({ name }) => {
  try {
    const userFinded = await User.findOne({ name })
    if (!userFinded) {
      // the document not exist, create new document
      const newUser = new User({
        name
      });
      return await newUser.save()
    }
    return userFinded
  } catch (error) {
    console.log(error)
  }
}

export {productData, ciudadData,coloniaData,vendedorData}