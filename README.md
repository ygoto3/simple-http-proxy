# simple-http-proxy

A simple http proxy server

Requirement
---

- Node.js v9.4.0~
- Heroku

Usage
---

Create a new app on Heroku.

Configure variables:

- `PORT` ex. `80`
- `PROXY_TO` ex. `https://example.com`

Use the Heroku CLI to set up the app.

```sh
$ heroku git:remote -a heroku-app-name
$ git push heroku master
```
