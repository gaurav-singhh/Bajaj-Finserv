# Bajaj Finserv REST API

This is a REST API built with Node.js and Express for the Bajaj Finserv hiring challenge. The API processes an array of data and returns a structured JSON response containing classified information based on the input.

## Live API Endpoint

The API is hosted on Render and is available at the following endpoint:

**`https://bajaj-finserv-api-9w22.onrender.com/bfhl`**

## API Usage

To use the API, you must send a `POST` request to the endpoint with a JSON body.

### Request Format

The request body must be a JSON object containing a single key, `data`, which holds an array of strings.

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

### Response Format

A successful request will return a `200 OK` status code and a JSON object with the following structure:

```json
{
  "is_success": true,
  "user_id": "your_user_id",
  "email": "your_email",
  "roll_number": "your_roll_number",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": [],
  "special_characters": [],
  "sum": "0",
  "concat_string": ""
}
```

## Example

### Request

```bash
curl -X POST https://bajaj-finserv-api-9w22.onrender.com/bfhl \
-H "Content-Type: application/json" \
-d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

### Response

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
