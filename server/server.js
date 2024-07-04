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

  console.log('Received request:', { name, phone, ip });

  if (!name || !phone) {
    console.error('Name or phone missing');
    return res.status(400).json({ success: false, message: 'Name and phone are required' });
  }
  
  // Prepare data for the lead
  const data = {
    country: 'UA',
    stream_key: 'djGaPaSljX',
    name,
    phone,
    ip,
  };

  console.log('Prepared data for lead:', data);

  // Example of sending data to an external API with API key
  axios.post('https://app.cpaecom.com/api/leads', data, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key_here'  // Add your API key here
    }
  })
    .then(response => {
      console.log('Response from external API:', response.data);
      res.json({ success: true, message: 'Order submitted successfully', response: response.data });
    })
    .catch(error => {
      console.error('Error submitting order:', error);
      console.error('Error details:', error.response ? error.response.data : error.message);
      res.status(500).json({ success: false, message: 'Failed to submit order', error: error.message });
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
