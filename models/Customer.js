import { Schema, model } from 'mongoose';

const customerSchema = new Schema({
  name: String,
  password: String,
  email:String,
  phone: String,
  date: Date,
  notes:[String],
  direction: {
    calle: String,
    numeroCasa: String,
    colonia: String,
    ciudad: String,
    entreCalles: String,
    referencia:String,
  },
  purchase: [{ type: Schema.Types.ObjectId, ref: 'Purchase' }],
  updatedAt: {
    type: Date,
    default: new Date()
  },
});

const Customer = model('Customer', customerSchema);

export default Customer;