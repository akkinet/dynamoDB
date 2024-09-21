import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'
import { NextResponse } from 'next/server'


export const GET = async (req) => {
    const dbClient = new DynamoDBClient();
    const command = new ScanCommand({
        TableName: 'User'
    });

    try {
        const response = await dbClient.send(command);
        // console.log(response.TableNames.join('\n'));

        return NextResponse.json(response, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}