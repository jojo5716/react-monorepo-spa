const fixtures = require('../fixtures');

module.exports = (app) => {
    // Mocking ajax request for loyalty
   
    // Returns the post data received by the server
    app.post('*', (request, response) => {
        // Wait for wait to let us see the loader
        setTimeout(() => {
            let fullBody = '';
            request.on('data', (chunk) => fullBody += chunk.toString());
            request.on('end', () => response.send(fullBody));
        }, 1000);
    });
};
