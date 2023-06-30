# express-exception-handling

```
Efficient Error Handling in Express.js Made Easy
https://dev.to/franciscomendes10866/easy-peasy-error-handling-in-expressjs-n98

Sample Error Response - 1

{
    "statusCode": 400,
    "payload": {
        "errorCode": 400,
        "errorName": "BAD_REQUEST",
        "errorMessage": "The server cannot or will not process the request due to an apparent client error.",
        "errorRawMessage": [
            {
                "validation": "url",
                "code": "invalid_string",
                "message": "Invalid url",
                "path": [
                    "body",
                    "url"
                ]
            },
            {
                "code": "invalid_type",
                "expected": "string",
                "received": "undefined",
                "path": [
                    "body",
                    "content"
                ],
                "message": "The content is required"
            }
        ]
    }
}

Sample Error Response - 2

{
    "statusCode": 500,
    "payload": {
        "errorCode": 500,
        "errorName": "INTERNAL_SERVER_ERROR",
        "errorMessage": "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.",
        "errorRawMessage": "[\n  {\n    \"validation\": \"url\",\n    \"code\": \"invalid_string\",\n    \"message\": \"Invalid url\",\n    \"path\": [\n      \"body\",\n      \"url\"\n    ]\n  },\n  {\n    \"code\": \"invalid_type\",\n    \"expected\": \"string\",\n    \"received\": \"undefined\",\n    \"path\": [\n      \"body\",\n      \"content\"\n    ],\n    \"message\": \"The content is required\"\n  }\n]"
    }
}

```