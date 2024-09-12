# Task Manager

Task Manager is a simple application built with Node.js, Express, MongoDB, and Docker that allows you to manage tasks efficiently. This project demonstrates basic CRUD operations (Create, Read, Update, Delete) to manage tasks in a MongoDB database.

## Features

- **Create a Task**: Add new tasks with a title, description, deadline, and status.
- **Read Tasks**: View all tasks or a specific task.
- **Update a Task**: Modify the details of a task, including its status.
- **Delete a Task**: Remove a task from the task list.
- **Dockerized**: The application runs seamlessly using Docker, making it easy to set up and deploy.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing tasks.
- **Docker**: Containerization platform for running the application.

## Getting Started

### Prerequisites

- **Docker**: Make sure Docker is installed on your system. [Download Docker](https://www.docker.com/products/docker-desktop).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/DenisGavar/TaskManager.git
   cd TaskManager
    ```

2. **Start the Application Using Docker**:

   ```bash
    docker-compose up --build
    ```

3. **Access the Application**:

    The server will start running on `http://localhost:5000`

4. **Access the DB**:

    The DB will start running on `mongodb://localhost:27017/`

## API Endpoints
1. **Create a Task**
    * URL: `/api/task`

    * Method: `POST`

    * Description: Create a new task.

    * Request Body (JSON):

    ```json
    {
    "title": "Finish the report",
    "description": "Complete the final report for the project.",
    "deadline": "2024-09-10T14:30:00Z"
    }
    ```

    * Response:

        * 201: Task created successfully.
        * 400: Bad request, missing required fields.

2. **Get All Tasks**
    * URL: `/api/task`

    * Method: `GET`

    * Description: Retrieve a list of all tasks.

    * Response:

        * 200: Returns an array of tasks.
        * 500: Internal error.

3. **Get a specific task**
    * URL: `/api/task/:id`

    * Method: `GET`

    * Description: Retrieve a specific task.

    * Response:

        * 200: Returns a specific task.
        * 404: Task not found.

4. **Update a Task**
    * URL: `/api/task/:id`

    * Method: `PUT`

    * Description: Update an existing task.

    * Request Body (JSON):

    ```json
    {
    "title": "Updated Report Title",
    "status": "completed"
    }
    ```

    * Response:

        * 200: Task updated successfully.
        * 404: Task not found.

5. **Delete a Task**
    * URL: `/api/task/:id`

    * Method: `DELETE`

    * Description: Delete a task by its ID.

    * Response:

        * 200: Task deleted successfully.
        * 404: Task not found.
