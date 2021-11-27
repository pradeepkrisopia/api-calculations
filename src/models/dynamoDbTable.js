const config = require('../../config.js')
var AWS = require('aws-sdk');
var https = require('https');
var agent = new https.Agent({
    keepAlive: true,
    maxSockets: config.MAX_SOCKETS
});

var DynamoDB = new AWS.DynamoDB({
    region: config.AWS_DEFAULT_REGION,
    httpOptions: {
        agent: agent
    }
});

var DocumentClient = new AWS.DynamoDB.DocumentClient({ service: DynamoDB });
const { Table, Entity } = require('dynamodb-toolbox');
const albertDev = new Table({

    // Specify table name (used by DynamoDB)
    name: `${config.ALBERT_DYNAMO_TABLE}`,

    // Define partition and sort keys
    partitionKey: `${config.PK}`,
    sortKey: `${config.SK}`,
    entityField: false,

    indexes: {
        GS3: { partitionKey: `${config.GS3PK}`, sortKey: `${config.GS3SK}` }
    },
    // Add the DocumentClient
    DocumentClient
});
const Inventory = new Entity({
    name: `${config.DYNAMO_ENTITY_INVENTORY}`,

    // Define attributes
    attributes: {
        PK: { partitionKey: true },
        SK: { sortKey: true },
        id: { type: 'string' },
        name: { type: 'string' },
        module: { type: 'string' },
        subModule: { type: 'string' },
        description: { type: 'string' },
        status: { type: 'string' },
        category: { type: 'string' },
        unit: { type: 'string' },
        createdAt: { type: 'string' },
        createdBy: { type: 'string' },
        createdByName: { type: 'string' },
        updatedAt: { type: 'string' },
        updatedBy: { type: 'string' },
        updatedByName: { type: 'string' },
        GS1PK: { type: 'string' },
        GS1SK: { type: 'string' },
        GS2PK: { type: 'string' },
        GS2SK: { type: 'string' },
        GS3PK: { type: 'string' },
        GS3SK: { type: 'string' },
        expiresAt: { type: 'number' }
    },

    table: albertDev
});

const Pricing = new Entity({
    name: `${config.DYNAMO_ENTITY_PRICING}`,

    // Define attributes
    attributes: {
        PK: { hidden: true, partitionKey: true },
        SK: { sortKey: true },
        id: { type: 'string' },
        parentId: { type: 'string' },
        companyId: { type: 'string' },
        companyName: { type: 'string' },
        locationId: { type: 'string' },
        locationName: { type: 'string' },
        description: { type: 'string' },
        packSize: { type: 'string' },
        price: { type: 'number' },
        currency: { type: 'string' },
        unitCategory: { type: 'string' },
        fob: { type: 'string' },
        module: { type: 'string' },
        expirationDate: { type: 'string' },
        leadTime: { type: 'number' },
        leadTimeUnit: { type: 'string' },
        default: { type: 'number' },
        status: { type: 'string' },
        createdAt: { type: 'string' },
        createdBy: { type: 'string' },
        createdByName: { type: 'string' },
        updatedAt: { type: 'string' },
        updatedBy: { type: 'string' },
        updatedByName: { type: 'string' },
        GS3PK: { type: 'string' },
        GS3SK: { type: 'string' },
        expiresAt: { type: 'number' }
    },

    table: albertDev
});

module.exports = { albertDev, Pricing, Inventory }
