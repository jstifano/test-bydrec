# Bydrec Test API

## Installation

    1. Install dependencies by running npm install
    2. Lift the server with npm run start
    4. The server will be running on https://localhost:5000.
    
    NOTE: You can import the Postman collection located in /data/postman and test the services created.

## Services description

    The main route to have a standard after the localhost:5000 is /api.

    The service will folow this route so if the service is called /xxxx, to make
    the request to that service we should point to http://localhost:5000/api/xxxx

## API Services

    GET/gateways --> Get all gateways from the DB with their devices.

## Unit Tests

    To run the suite of tests execute npm run test on command line.
