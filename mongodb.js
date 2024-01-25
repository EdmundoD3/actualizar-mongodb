import { connect } from 'mongoose';

// mongodb
const PORTMONGODB = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/conatumex'

connect(PORTMONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connection to MongoDB established');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
