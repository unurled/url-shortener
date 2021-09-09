# URL - Shortener

## How to Use ?

1. you need [mongdb](https://www.mongodb.com/en-us), and [nodejs](https://nodejs.org/en/)

2.  `npm install`

3. change the port or the url in:
    - ```src/service/url.js: const baseUrl = 'CHANGE_URL_HERE'```
    - ```src/service/server.js: const PORT = process.env.PORT || 8080```
    - ```src/main.js: const PORT = process.env.PORT || 8080```
    - ```public/js/app.js: await fetchService.performPostHttpRequest(`URL_CHANGE_ME/api/url/shorten```

4.  `npm start`