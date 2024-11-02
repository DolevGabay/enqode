const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const dataFilePath = path.join(__dirname, 'zeroTrustData.json');

app.use(bodyParser.json());

const readDataFromFile = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const writeDataToFile = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
};

app.post('/submit-zero-trust', (req, res) => {
    const zeroTrustScore = req.body;

    if (!zeroTrustScore.averageShannonEntropyScore || !zeroTrustScore.tlsVersion) {
        return res.status(400).send({ message: 'Invalid data' });
    }

    const data = readDataFromFile();
    data.push(zeroTrustScore);
    writeDataToFile(data);

    res.status(201).send({ message: 'Zero-Trust Score data submitted successfully' });
});

app.get('/retrieve-zero-trust', (req, res) => {
    const data = readDataFromFile();
    res.status(200).json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
