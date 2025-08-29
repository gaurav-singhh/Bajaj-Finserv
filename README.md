# Bajaj Finserv Backend Challenge

This repository contains the solution for the Bajaj Finserv backend development hiring challenge. The project is a REST API built with Node.js and Express that processes an array of data and returns a structured analysis.

## 1. Objective

The goal is to build and host a `POST` REST API that accepts an array of mixed data types and returns a JSON object containing:

1.  The operational status (`is_success`).
2.  The developer's user ID, email, and college roll number.
3.  Separate arrays for even numbers, odd numbers, and alphabets (converted to uppercase).
4.  The sum of all numerical data.
5.  A concatenated string of all alphabets in reverse order with alternating capitalization.

## 2. Tech Stack

- **Backend**: Node.js
- **Framework**: Express.js
- **Hosting**: Render

## 3. Live API Endpoint

The API is deployed on Render and is publicly accessible.

- **Method**: `POST`
- **URL**: `https://bajaj-finserv-api-9w22.onrender.com/bfhl`

## 4. API Documentation

### Request

The API expects a `POST` request with a `Content-Type` of `application/json`. The request body must contain a single key, `data`, which is an array of strings.

**Request Body Structure:**

```json
{
  "data": ["value1", "value2", ...]
}
```

### Response

- **Success (200 OK)**: If the request is valid, the API returns a JSON object with the processed data.
- **Client Error (400 Bad Request)**: If the `data` field is missing or is not an array.
- **Server Error (500 Internal Server Error)**: For any other unexpected errors.

**Success Response Structure:**

```json
{
  "is_success": true,
  "user_id": "gaurav_kumar_singh_29082025",
  "email": "gaurav.22bce7822@vitapstudent.ac.in",
  "roll_number": "22BCE7822",
  "odd_numbers": ["<string>"],
  "even_numbers": ["<string>"],
  "alphabets": ["<string>"],
  "special_characters": ["<string>"],
  "sum": "<string>",
  "concat_string": "<string>"
}
```

## 5. Examples

### Example A

- **Request Body**: `{"data": ["a","1","334","4","R", "$"]}`
- **Response**:
  ```json
  {
    "is_success": true,
    "user_id": "gaurav_kumar_singh_29082025",
    "email": "gaurav.22bce7822@vitapstudent.ac.in",
    "roll_number": "22BCE7822",
    "odd_numbers": ["1"],
    "even_numbers": ["334", "4"],
    "alphabets": ["A", "R"],
    "special_characters": ["$"],
    "sum": "339",
    "concat_string": "Ra"
  }
  ```

### Example B

- **Request Body**: `{"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}`
- **Response**:
  ```json
  {
    "is_success": true,
    "user_id": "gaurav_kumar_singh_29082025",
    "email": "gaurav.22bce7822@vitapstudent.ac.in",
    "roll_number": "22BCE7822",
    "odd_numbers": ["5"],
    "even_numbers": ["2", "4", "92"],
    "alphabets": ["A", "Y", "B"],
    "special_characters": ["&", "-", "*"],
    "sum": "103",
    "concat_string": "ByA"
  }
  ```

### Example C

- **Request Body**: `{"data": ["A","ABcD","DOE"]}`
- **Response**:
  ```json
  {
    "is_success": true,
    "user_id": "gaurav_kumar_singh_29082025",
    "email": "gaurav.22bce7822@vitapstudent.ac.in",
    "roll_number": "22BCE7822",
    "odd_numbers": [],
    "even_numbers": [],
    "alphabets": ["A", "ABCD", "DOE"],
    "special_characters": [],
    "sum": "0",
    "concat_string": "EoDdCbAa"
  }
  ```

## 6. Project Structure

The project follows industry best practices for code organization, separating concerns into different modules:

- `src/`: Contains all the source code.
- `src/config/`: Stores static configuration data like user details.
- `src/controllers/`: Handles incoming requests and orchestrates the response.
- `src/middleware/`: Contains middleware for validation and error handling.
- `src/routes/`: Defines the API routes and maps them to controllers.
- `src/services/`: Encapsulates the core business logic for data processing.
- `index.js`: The main entry point for the application.
