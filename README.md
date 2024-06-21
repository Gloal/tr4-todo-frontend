# Vite Todo App with Spring Boot Backend

This is a simple Todo application built with Vite and Tailwinf for the frontend, and Spring Boot for the backend. The frontend communicates with the backend through a RESTful API and uses Tailwind CSS for styling.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, update, delete, and list todo tasks
- Limit of 10 incomplete tasks at a time
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Error handling for API requests

## Prerequisites

- Node.js and npm (or yarn)
- Java 11 or higher
- Maven (for backend dependencies)

## Installation

### Backend

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/todo-app.git
    cd todo-app/backend
    ```

2. Install dependencies and build the project:
    ```sh
    mvn clean install
    ```

3. Run the Spring Boot application:
    ```sh
    mvn spring-boot:run
    ```

The backend server should now be running at `http://localhost:8080`.

### Frontend

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root of the `frontend` directory and set the `VITE_API_BASE_URL` to your backend API URL:
    ```env
    VITE_API_BASE_URL=http://localhost:8080/v1
    ```

4. Start the development server:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

The frontend application should now be running at `http://localhost:5173`.

## API Endpoints

The backend provides the following API endpoints:

- `GET /v1/todo/{id}`: Get a todo by ID
- `GET /v1/todos`: Get all todos
- `POST /v1/todo`: Create a new todo
- `PUT /v1/todo/{id}`: Update a todo by ID
- `DELETE /v1/todo/{id}`: Delete a todo by ID
- `DELETE /v1/todos`: Delete all todos
