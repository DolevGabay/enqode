import axios from 'axios';

async function testQueryDarkWeb() {
  const domain = 'test.com';
  const maxResults = 3;
  const url = `http://localhost:3000/queryDarkWeb/${domain}?maxResults=${maxResults}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.results && data.results.records) {
      console.log('Records:', data.results.records);
    } else {
      console.log('No records found in the response data.');
    }
  } catch (error) {
    if (error.response) {
      console.error('HTTP Error:', error.response.status);
      console.error('Response Data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error:', error.message);
    }
  }
}

testQueryDarkWeb();
