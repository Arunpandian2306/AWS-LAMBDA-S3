import AWS from 'aws-sdk';
const s3 = new AWS.S3();

export const handler = async (event) => { // Change `getHandler` to `handler`
    const bucketName = 'arun.doc.com';
    const prefix = ''; // Specify a prefix if needed
    let allData = [];
    let continuationToken;

    try {
        do {
            // List objects in the S3 bucket
            const listParams = {
                Bucket: bucketName,
                Prefix: prefix,
                ContinuationToken: continuationToken // Use this for pagination
            };
            
            const listedObjects = await s3.listObjectsV2(listParams).promise();
            
            // Retrieve and parse each object
            const dataPromises = listedObjects.Contents.map(async (object) => {
                const getObjectParams = {
                    Bucket: bucketName,
                    Key: object.Key
                };

                const objectData = await s3.getObject(getObjectParams).promise();
                return JSON.parse(objectData.Body.toString('utf-8'));
            });

            // Wait for all data to be retrieved for this batch
            const dataArray = await Promise.all(dataPromises);
            allData = allData.concat(dataArray); // Combine data from this batch

            // Set the continuation token for the next batch
            continuationToken = listedObjects.NextContinuationToken;
        } while (continuationToken); // Continue while there are more objects

        if (allData.length === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "No data found." })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify(allData)
        };
    } catch (error) {
        console.error("Error:", error.message);
        return { 
            statusCode: 422, 
            body: JSON.stringify({ error: "Failed to retrieve data from S3.", details: error.message }) 
        };
    }
};
