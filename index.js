const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use('/api', schoolRoutes);

app.get('/', (req, res) => {
  res.send('School Management API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
