import Product from "../models/Products.js";

export default class ProductRepository {
    static async save(product) {
      const productFinded = await Product.findOne({ product });
      if (productFinded) return productFinded;
  
      const newproduct = new Product({ product });
      return newproduct.save();
    }
    static async saveAll(products = []) {
      return Promise.all(
        products.map(
          async (product) => (await this.save( product ))
        )
      );
    }
  }