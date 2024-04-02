const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
PORT=4000
app.use(bodyParser.json());

// Allow requests from your frontend origin
app.use(cors({ origin: 'http://localhost:3004', credentials: true }));
app.use (cors())













app.get('/api', (req, res) => {
    res.send('Hello from the server!');
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
  