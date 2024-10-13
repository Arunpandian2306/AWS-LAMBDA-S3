import AWS from 'aws-sdk';
const s3 = new AWS.S3();

export const handler = async (event) => {
    console.log("Received event:", JSON.stringify(event, null, 2));

    try {
        let requestBody;

        // Check if the event is coming from API Gateway
        if (event.body) {
            // Parse the event body if it's from API Gateway
            requestBody = JSON.parse(event.body);
        } else {
            // Directly use event for Lambda console testing
            requestBody = event;
        }

        // Check if the required properties are present in the request body
        if (!requestBody.name || !requestBody.age) {
            throw new Error('Request body is missing required fields');
        }

        // Create a body object from the parsed request body
        const body = {
            name: requestBody.name,
            age: requestBody.age
        };
        
        const fileName = `data-${Date.now()}.json`;

        const params = {
            Bucket: 'arun.doc.com',
            Key: fileName,
            Body: JSON.stringify(body),
            ContentType: 'application/json'
        };

        const data = await s3.putObject(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                e_tag: data.ETag,
                url: `https://arun.doc.com.s3.amazonaws.com/${fileName}`
            })
        };
    } catch (error) {
        console.error("Error:", error.message);
        return { statusCode: 422, body: JSON.stringify({ error: error.message }) };
    }
};
