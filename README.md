# react-mesto-api-full

Repository for the Mesto project application, which includes frontend and backend parts of the application with the following features: authorization and registration of users, operations with cards and users.

Domain: http://photosave.nomoredomains.xyz

Server: http://api.photosave.nomoredomains.work

Registration is required to gain access.

## How it works

- The tree of elements is built using the library tools React.js .
- The client sends featch requests to the API.
- Server on the Node platform.js accepts the data and returns a response.
- To simplify maintenance, the server-side code is written using Express functions.
- Data is written in MongoDB.
- Continuous operation is provided by pm2.
- Requests are redirected by Nginx.

## Future plans

To date, the client interface does not allow you to directly see the creator of the card and the users who rated it, although the API provides for this. Therefore, my plans include the search for a design solution and the corresponding expansion of functionality.
