const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const session = require('express-session');

const app = express();
const port = 5010;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

app.post('/api/apply', (req, res) => {
  const { name, phone, ip } = req.body;
  
  // Prepare data for the lead
  const data = {
    name,
    phone,
    ip,
    // Add other required fields here
  };

  // Example of sending data to an external API (modify as needed)
  axios.post('https://app.cpaecom.com/api/leads', data)
    .then(response => {
      res.json({ success: true, message: 'Order submitted successfully', response: response.data });
    })
    .catch(error => {
      console.error('Error submitting order:', error);
      res.status(500).json({ success: false, message: 'Failed to submit order', error: error.message });
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
