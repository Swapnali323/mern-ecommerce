const express =require('express');
const path =require('path');
const mongoose =require('mongoose');
const bodyParser =require('body-parser');
const config =require('../config');
const cors = require('cors');
const orderRoute =require('./routes/orderRoutes');


const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to database !!');
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/orders', orderRoute);
app.get('http://localhost:5000/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});




app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});
