import { Schema, model } from 'mongoose';

const PurchaseSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer' },
  vendedorId: { type: Schema.Types.ObjectId, ref: 'User' },
  cobradorId: { type: Schema.Types.ObjectId, ref: 'User' },
  cuenta: String,
  saleDate: Date,
  creditPrice: Number,
  cashPrice: Number,
  cashPriceEndDate: Date,
  collectionDate: Date,
  collectionFrequency:{amount:String, frecuency:String},
  sendToCobrador: {
    type: Boolean,
    default: false,
  },
  products: [{quantity:Number,product:String}],
  payments: [{
    paymentDate: Date,
    amount: Number,
    receiptId: String,
  }],
  updatedAt: {
    type: Date,
    default: new Date()
  },
  //paid, cancelled, pending, on-hold, to-deliver, active, inactive, problems
  status:{type:String, default:"inactive"},
  isActive:{
    type: Boolean,
    default: false,
  },
});

const Purchase = model('Purchase', PurchaseSchema);

export default Purchase;
