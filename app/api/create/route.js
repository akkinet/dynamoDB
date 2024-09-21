import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'
import { NextResponse } from 'next/server'


export const POST = async (req) => {
    try {
        const { firstName, lastName, email } = await req.json();
        const dbClient = new DynamoDBClient({
            region: 'ap-south-1',
        })
        const command = new PutItemCommand({
            TableName: 'User',
            Item: {
                lastName: {
                    "S": lastName
                },
                firstName: {
                    "S": firstName
                },
                email: {
                    "S": email
                }
            },
        })
        const response = await dbClient.send(command);
        console.log(response);

        return NextResponse.json({ message: "Created" }, { status: 201 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}