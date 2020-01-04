# Finance Watch API

## Installation

    1. Install dependencies by running npm install
    2. Lift the server with npm run start
    4. The server will be running on https://localhost:5000.
    
    NOTE: You can import the Postman collection located in /data and test the service created.

## Services description

    The main route to have a standard after the localhost:5000 is /api.

    The service will folow this route so if the service is called /xxxx, to make
    the request to that service we should point to http://localhost:5000/api/xxxx

## API Service

    GET /stock/:symbol --> Get the info requested by the test.

    - Latest stock price
    - Path to the company logo
    - Latest news article for the company.

## CURL command
    The command has to be executed only if the server is running on localhost:5000
    curl -XGET -H "Content-type: application/json" 'http://localhost:5000/api/stock/AAPL'

## Unit Tests

    To run the suite of tests execute npm run test on command line.
