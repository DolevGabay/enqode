# Zero-Trust Score Server

This project is a simple Node.js and Express server that manages Zero-Trust security score data. It provides endpoints to submit and retrieve security scores, storing the data in a JSON file on the server.

## Project Structure

- `server.js`: The main server file, handling the `/submit-zero-trust` and `/retrieve-zero-trust` routes.
- `zeroTrustData.json`: JSON file where submitted Zero-Trust score data is stored.
- `test.js`: Script to test the server's API endpoints.

## Prerequisites

- Node.js and npm installed
- `axios` library for testing purposes (required for `test.js`)

## Usage

### Running the Server

1. Start the server by running:
- node server.js
    

2. The server will start on `http://localhost:3000`.

### API Endpoints

#### POST `/submit-zero-trust`

Submit a Zero-Trust score. The server will store the data in `zeroTrustData.json`.

- **Response**:
  
    - **201 Created**: `{"message": "Zero-Trust Score data submitted successfully"}`
    - **400 Bad Request**: `{"message": "Invalid data"}` if required fields are missing.

#### GET `/retrieve-zero-trust`

Retrieve all stored Zero-Trust scores.

- **Response**:
  
    - **200 OK**: Returns a JSON array of all Zero-Trust scores submitted.

### Running the Test

To test the server functionality, you can run the `test.js` file. This will automatically send a POST request to add a Zero-Trust score and a GET request to retrieve all stored scores.

1. Make sure the server is running:
2. Run the test script:
- node test.js
3. The test output will be logged to the console.
