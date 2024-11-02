import express from 'express';
import axios from 'axios';
import config from './config.json' assert { type: 'json' };

const app = express();
const port = 3000;
const apiKey = config.apiKey; 

app.get('/queryDarkWeb/:domain', async (req, res) => {
  const domain = req.params.domain;
  const maxResults = parseInt(req.query.maxResults) || 5;

  const url = 'https://2.intelx.io/intelligent/search';
  const data = {
    term: domain,
    buckets: [],
    lookuplevel: 0,
    maxresults: 1000,
    timeout: 0,
    datefrom: '',
    dateto: '',
    sort: 2,
    media: 0,
    terminate: [],
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'x-key': apiKey,
      },
    });

    const searchId = response.data.id;
    const results = await getSearchResults(searchId, maxResults);
    res.json({ searchId, results });
  } catch (error) {
    if (error.response) {
      console.error('HTTP Error:', error.response.status);
      console.error('Response Data:', error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
      res.status(500).json({ error: 'No response received from IntelX API' });
    } else {
      console.error('Error:', error.message);
      res.status(500).json({ error: error.message });
    }
  }
});

async function getSearchResults(searchId, maxResults) {
  const url = `https://2.intelx.io/intelligent/search/result?id=${searchId}&offset=0&limit=${maxResults}&previewlines=5`;

  try {
    const response = await axios.get(url, {
      headers: {
        'x-key': apiKey,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('HTTP Error:', error.response.status);
      console.error('Response Data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    throw error;
  }
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
