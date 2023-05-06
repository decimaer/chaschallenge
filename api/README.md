#Backend API

## Run in dev mode

-  install config.env in api root folder with `NODE_ENV` set to `development`
-  Run `npm install`
-  Run `npm run dev`

## config.env

```
# Global configuration variables
NODE_ENV =  # development or production

# Server specific variables
PORT =
DIR_STATIC_FILES = # From which folder static files are served (relative to __dirname)

# MongoDB variables
DATABASE_URL =
```