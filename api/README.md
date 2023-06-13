# Backend API

## Run in dev mode

-  install config.env in api root folder with `NODE_ENV` set to `development`
-  Run `npm install`
-  Run `npm run start:dev`

## config.env

```
# Global configuration variables
NODE_ENV =  # development or production

# Server specific variables
PORT =
DIR_STATIC_FILES = # From which folder static files are served (relative to __dirname)

# MongoDB variables
DATABASE_URL =

# Json web token
JWT_SECRET_KEY = # Specify a key to sign the token, at least 32 characters long
JWT_EXPIRES_IN = # Specify in days when the token will expire, eg 30d
```

## REST API Documentation

This is the official documentation for the REST API of our application. The API is built using Node.js and Express and follows the REST architectural style. The API provides several endpoints for interacting with our application.

## Tasks

### Create a Task

`POST /api/tasks`

Creates a new task.

Request Body:

```json
{
  "taskName": "string",
  "description": "string"
}
```

Response Body:

```json
{
  "taskId": "string",
  "taskName": "string",
  "description": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

### Delete a Task

DELETE `/api/tasks/:id`

Deletes a task with the specified ID.

Response Body:

```json
{
  "message": "Task deleted successfully"
}
```

### Get Top Three Tasks

GET `/api/tasks/top-three`

Returns the top three tasks.

Response Body:

```json
[
  {
    "taskId": "string",
    "taskName": "string",
    "description": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
]
```
### Get Task Stats by User

GET `/api/task-stats/:id`

Returns task statistics for a user with the specified ID.

Response Body:

```json
{
  "userId": "string",
  "completedTasks": "number",
  "pendingTasks": "number",
  "totalTasks": "number"
}
```
