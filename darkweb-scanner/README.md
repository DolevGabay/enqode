# Dark Web Scanner API

This API provides a simple interface for querying dark web data for a specified domain using the IntelX API. It fetches results based on the provided domain and an optional maximum result limit.

## Prerequisites

- Node.js (version 14 or above recommended)
- IntelX API key

## Setup
- npm install
- Configure API Key in config.json
- npm start


## API Endpoints
Query Dark Web Data
Endpoint: GET /queryDarkWeb/:domain

Parameters:

:domain (required) - The domain to search for in dark web data.
maxResults (optional) - Query parameter to specify the maximum number of results to retrieve. Default is 5.

Example:
GET http://localhost:3000/queryDarkWeb/example.com?maxResults=10

## test
- node test.js - demonstrating call to the API