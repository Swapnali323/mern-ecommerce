const express =require('express');
const path =require('path');
const mongoose =require('mongoose');
const bodyParser =require('body-parser');
const config =require('../config');
const cors = require('cors');

const userRoute =require('./routes/userRoutes');

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

app.use('/api/users', userRoute);

// app.use(express.static(path.join(__dirname, '/uploads')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/uploads`));
// });



app.listen(5003, () => {
  console.log(' User Service started at http://localhost:5003');
});
