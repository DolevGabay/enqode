const axios = require('axios');

const baseUrl = 'http://localhost:3000';

const testData = {
    averageShannonEntropyScore: 7.8,
    firewallDetected: true,
    DNSsecEnabled: true,
    tlsVersion: "1.2",
    certificateBitStrength: 2048,
    securityHeadersImplemented: ["X-XSS-Protection", "X-Frame-Options"],
    openPortsDetected: 12
};

const testPostZeroTrust = async () => {
    try {
        const response = await axios.post(`${baseUrl}/submit-zero-trust`, testData);
        console.log('POST /submit-zero-trust response:', response.data);
    } catch (error) {
        console.error('Error posting zero-trust data:', error.response ? error.response.data : error.message);
    }
};

const testGetZeroTrust = async () => {
    try {
        const response = await axios.get(`${baseUrl}/retrieve-zero-trust`);
        console.log('GET /retrieve-zero-trust response:', response.data);
    } catch (error) {
        console.error('Error retrieving zero-trust data:', error.response ? error.response.data : error.message);
    }
};

const runTests = async () => {
    console.log('Testing POST /submit-zero-trust...');
    await testPostZeroTrust();

    console.log('Testing GET /retrieve-zero-trust...');
    await testGetZeroTrust();
};

runTests();
