const dotenv =require('dotenv');

dotenv.config();

module.exports= {
  
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://Swapnali:swapnali@cluster0.msztp.mongodb.net/ShopDeals?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'AQD1CsSIETrj0wLb_nQ3BsBns3emvVRxKIfBnBtkwWbTvV00TOPWVpFxo53rinl0X1O6BZeDIWf7MOp_',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};
