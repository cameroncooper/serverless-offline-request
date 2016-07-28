# Serverless Offline Request
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

This node module provides an interface to [Serverless Offline](https://github.com/dherault/serverless-offline) and allows you make make HTTP requests without starting a server. This is useful in testing your Serverless API Gateway endpoints.

### Features

 - Allows HTTP requests to [Serverless](https://github.com/serverless/serverless) endpoints without starting a server
 - Works with any test framework

### Installation

```
npm install serverless-offline-request
```

### Usage

The module provides a simple interface to making a HTTP request. First import the module:

```javascript
var request = require('serverless-offline-request');
```

#### GET
```javascript
request.get(url, callback);
```


#### POST
```javascript
request.post(url, body, callback);
```


### Example with Chai

```javascript
var request = require('serverless-offline-request');
var expect = require('chai').expect;

describe('function1', function() {
  it('responds to get requests', function(done) {
    request.get('/function1', (res) => {
      expect(res.result.message).to.equal('Go Serverless! Your Lambda function executed successfully!');
      done();
    });
  });
});

```

### License

MIT