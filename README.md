# APIs with AWS Lambda and S3

## Overview
This document outlines the steps to create and manage POST and GET APIs using AWS Lambda and S3 for data storage and retrieval.

## Technologies Used
- **AWS Lambda**: Serverless compute service for running backend code.
- **AWS S3**: Object storage service for storing JSON data.
- **API Gateway**: Manage and expose the APIs created with Lambda.
- **POST MAN**: To Test the Apis

## Setup Instructions

### 1. Create an AWS Account
- Go to [AWS](https://aws.amazon.com/) and create an account if you don't already have one.

### 2. Create an S3 Bucket
- Navigate to the S3 service in the AWS Management Console and create a new S3 bucket.

### 3. Set Up AWS Lambda
1. Go to the Lambda service in the AWS Management Console.
2. Select the option to create a new function for handling HTTP requests.
3. Create a new function for **POST** and **GET** requests.

### 4. Create an API Gateway
- Go to the API Gateway service and create a new API. Link it to the Lambda functions created in the previous step.

### 5. Set Permissions
- Grant the S3 bucket read and write permissions to the APIs via API Gateway.

### 6. Upload Lambda Code
- For the **POST** endpoint, upload the `my-post-lambda-s3.zip` file (contains code and npm packages).
- For the **GET** endpoint, upload the `my-get-lambda-s3.zip` file (contains code and npm packages).

### 7. Add Test Events
#### For POST Endpoint:
- Add the following sample test event:
json
{
  "name": "viji",
  "age": 43
}

#### For GET Endpoint:
- Add the following sample test event:
json
{
  "httpMethod": "GET",
  "path": "/getjsondata",
  "queryStringParameters": {
    "userId": "123"
  }
}
*********************************************************************************************************************************************************************************************************
## APIs Via Postman
### 1.POST
- https://d4wr7x2m1k.execute-api.us-east-1.amazonaws.com/storejsondata

- Sample Request
{
  "name": "viji",
  "age": 43
}

- Sample Response

{
    "e_tag": "\"5c6c4e4de08d9bcd7d61b16bd0bd6077\"",
    "url": "https://arun.doc.com.s3.amazonaws.com/data-1728833398409.json"
}


### 2.GET
- https://jfoa464a9l.execute-api.us-east-1.amazonaws.com/getjsondata
- Sample Request
[{"name":"John","age":30},{"name":"John","age":30},{"name":"arun","age":30},{"name":"saran","age":22},{"name":"vishwa","age":31},{"name":"sanjeev","age":24},{"name":"pandian","age":21},{"name":"pandi","age":22},{"name":"viji","age":43}]
 make format this readme this is not event schedular i just need text format like event schedular
