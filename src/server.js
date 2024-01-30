const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.post('/send-sms', async (req, res) => {
  const { apiKey, phoneNumber, message } = req.body;

  const fast2smsUrl = 'https://www.fast2sms.com/dev/bulkV2';
  const headers = {
    'authorization': apiKey,
    'Content-Type': 'application/json',
  };

  const body = JSON.stringify({
    phoneNumber: phoneNumber,
    message: message,
  });

  try {
    const response = await fetch(fast2smsUrl, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    const result = await response.json();

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      console.error('Response:', result);
      throw new Error('Error in Fast2SMS API response');
    }

    if (result.success === true) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, error: result.error });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
