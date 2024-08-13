import { Schema, model } from 'mongoose';

const PurchaseSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer' },
  vendedorId: { type: Schema.Types.ObjectId, ref: 'User' },
  cobradorId: { type: Schema.Types.ObjectId, ref: 'User' },
  saleDate: Date,
  creditPrice: Number,
  cashPrice: Number,
  cashPriceEndDate: Date,
  collectionDate: Date,
  collectionFrequency: { amount: String, frequency: String },
  sentToCobrador: {
    type: Boolean,
    default: false,
  },
  products: [{ quantity: Number, productId: { type: Schema.Types.ObjectId, ref: 'Product' } }],
  totalPaid: Number,
  payments: [{
    Date: Date,
    amount: Number,
    receiptId: String,
  }],
  updatedAt: {
    type: Date,
    default: new Date()
  },
  statusId: { type: Schema.Types.ObjectId, ref: 'Status' },
  isActive: {
    type: Boolean,
    default: false,
  },
});

// Registra el modelo con el nombre 'Purchase'
const Purchase = model('Purchase', PurchaseSchema);

export default Purchase;
