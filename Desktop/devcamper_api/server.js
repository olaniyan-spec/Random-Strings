const express= require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './DEVCAMPER_API/.env' });
const app = express();


app.get('/', (req, res) => {
  res.send('hello world')
});
const PORT = process.env.PORT || 5000


app.listen(PORT, console.log('server running in ${process.env.NODE_ENV} mode on port ${PORT}'));




