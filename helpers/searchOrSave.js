import Customer from "../models/Customer.js";
import Purchase from "../models/Purchase.js";


const searchOrSavedCustomer = async ({customer}) => {
  const { name, date } = customer

  const customerFinded = await Customer.findOne({ name, date })
  if (!customerFinded ) {
    // the document not exist, create new document
    const newCustomer = new Customer({
      ...customer
    });
    return await newCustomer.save()
  }
  return customerFinded 
}
const searchOrSavedPurchase = async ({purchase}) => {
  const {saleDate, cuenta} = purchase 
  const purchaseFinded = await Purchase.findOne({saleDate, cuenta})
  if (!purchaseFinded) {
    // the document not exist, create new document
    const newPurchase = new Purchase({
      ...purchase
    });
    return await newPurchase.save()
  }
  return purchaseFinded
}

export { searchOrSavedCustomer, searchOrSavedPurchase}