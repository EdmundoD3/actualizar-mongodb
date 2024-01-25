import { formatDate } from "./formatDate.js"

function createExtraPropertys(fila){
  let  extraPropertys = {}
  const adeudo = fila["ADEUDO"]
  if (adeudo === "PAGADO") extraPropertys.status = "paid"
  if (adeudo === "CANCELADO") extraPropertys.status = "cancelled"
  if (adeudo === "PENDIENTE") extraPropertys.status = "pending"
  if (fila["Abonos"] > 0) extraPropertys.payment = {
    paymentDate: formatDate(fila["ULT.PAG"]),
    amount: fila["Abonos"],
    receiptId: "NA",
  }
  return extraPropertys
}
export { createExtraPropertys }