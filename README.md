1.First need to create AWS ACCOUNT
2.GO S3 Create new s3 bucket
3.Then Go to lambda select HTTP
4.Then create a new function for POST anf GET
5.Go API Gateway CREATE API and paste the function names in Lambda
6.Give S3 bucket read and write permission to the apis via API Gateway
7.For POST Endpoint in the code upload this file my-post-lambda-s3.zip(contains code and npm packages)
  And ADD necessary Test Events
  SampleTest EventJson
  {
  "name": "viji",
  "age": 43
}

8.For GET Endpoint in the code upload this file my-get-lambda-s3.zip(contains code and npm packages)
  And ADD necessary Test Events
  SampleTest EventJson
  {
  "httpMethod": "GET",
  "path": "/getjsondata",
  "queryStringParameters": {
    "userId": "123"
  }
}
******************************************************************************************************************************************************************************************************************************************************************************

Post api file name :my-post-lambda-s3.zip
Get api file name : my-get-lambda-s3.zip
APIs
1.POST
https://d4wr7x2m1k.execute-api.us-east-1.amazonaws.com/storejsondata

Sample Request
{
  "name": "viji",
  "age": 43
}

Sample Response

{
    "e_tag": "\"5c6c4e4de08d9bcd7d61b16bd0bd6077\"",
    "url": "https://arun.doc.com.s3.amazonaws.com/data-1728833398409.json"
}


2.GET
https://jfoa464a9l.execute-api.us-east-1.amazonaws.com/getjsondata
Sample Request
[{"name":"John","age":30},{"name":"John","age":30},{"name":"arun","age":30},{"name":"saran","age":22},{"name":"vishwa","age":31},{"name":"sanjeev","age":24},{"name":"pandian","age":21},{"name":"pandi","age":22},{"name":"viji","age":43}]

