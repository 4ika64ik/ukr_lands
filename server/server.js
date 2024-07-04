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

app.post('/api/apply', async (req, res) => {
  const { name, phone, utm_source, utm_medium, utm_campaign, utm_term, utm_content, subid, sub_id_1, sub_id_2, sub_id_3, sub_id_4, click_id } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' });
  }

  // Prepare IP
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.includes(',')) {
    ip = ip.split(',')[0];
  }

  // Prepare Data for Lead
  const data = {
    country: 'UA',
    stream_key: 'djGaPaSljX',
    name: name,
    phone: phone,
    ip: ip,
    user_agent: req.get('User-Agent'),

    utm_source: utm_source || req.query.utm_source || null,
    utm_medium: utm_medium || req.query.utm_medium || null,
    utm_campaign: utm_campaign || req.query.utm_campaign || null,
    utm_term: utm_term || req.query.utm_term || null,
    utm_content: utm_content || req.query.utm_content || null,

    sub_id: subid || req.query.sub_id || null,
    sub_id_1: sub_id_1 || req.query.sub_id_1 || null,
    sub_id_2: sub_id_2 || req.query.sub_id_2 || null,
    sub_id_3: sub_id_3 || req.query.sub_id_3 || null,
    sub_id_4: sub_id_4 || req.query.sub_id_4 || null,

    click_id: click_id || req.query.click_id || null,

    landing_url: req.get('Referer') || null,
  };

  try {
    const response = await axios.post('https://app.cpaecom.com/api/leads', data, {
      headers: {
        Accept: 'application/json',
      },
    });

    const result = response.data;
    if (result.redirect_url) {
      return res.json({ redirect_url: result.redirect_url });
    }

    req.session.data = data;
    req.session.lead_id = result.lead_id;

    if (result.status === 'duplicate') {
      return res.json({ redirect_url: '/duplicate' });
    } else {
      return res.json({ redirect_url: '/success' });
    }
  } catch (error) {
    const { response } = error;
    return res.status(response ? response.status : 500).json({
      error: error.message,
      result: response ? response.data : null,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
