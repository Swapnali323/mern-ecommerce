const express =require('express');
const path =require('path');
const mongoose =require('mongoose');
const bodyParser =require('body-parser');
const config =require('../config');
const cors = require('cors');
const productRoute =require('./routes/productRoutes');
const uploadRoute =require('./routes/uploadRoutes');


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
app.use('/api/uploads', uploadRoute);

app.use('/api/products', productRoute);

app.use(express.static(path.join(__dirname+'/uploads')));
// app.use(express.static(path.join(__dirname, '/uploads')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/uploads`));
// });



app.listen(5001, () => {
  console.log(' Products Service started at http://localhost:5001');
});
