module.exports = {
    rest: {
        port : 8091,
        docs : {
            'calculations' : '/api/v3/calculations/spec'
        },
        schemas : {
            'calculations' : '/api/v3/calculations/schema'
        }
    },
    JWT_TOKEN_SECRET : `${process.env.JWT_TOKEN_SECRET}`,
    JWT_TOKEN_SECRET: `${process.env.JWT_TOKEN_SECRET}`,
    PRICING: 'PRC',
    LOCATION: 'LOC',
    COMPANY: 'COM',
    INVENTORY: 'INV',
	STORAGE: 'STL',
	TAG: 'TAG',
	LOT: 'LOT',
	NOTE: 'NOT',
	ATTACHMENT: 'ATT',
    UNIT_ATTRIB: 'unit',
    NAME_ATTRIB: 'name',
    MODULE_ATTRIB: 'module',
    BOOLEAN_TRUE: true,
    BOOLEAN_FALSE: false,
    ALBERT_DYNAMO_TABLE: `albert-${process.env.ECS_CLUSTER_NAME}`,
    ALBERT_DYNAMO_TABLE_PREFIX: `albert​​​​​​​​`,
    DEFAULT_TENANTID: `TEN0`,
    DEFAULT_STATUS: `active`,
    INACTIVE_STATUS: `inactive`,
    AWS_DEFAULT_REGION: `us-west-2`,
    PK: `PK`,
    SK: `SK`,
    GS3PK: `GS3PK`,
    GS3SK: `GS3SK`,
    INDEX_GS3: `GS3`,
    INDEX_GS2: `GS2`,
    INDEX_GS1: `GS1`,
    DYNAMO_ENTITY_PRICING: `PRICING`,
    DYNAMO_ENTITY_INVENTORY: `INVENTORY`,
    DYNAMO_ENTITY_LOCATION: `LOCATION`,
    DYNAMO_ENTITY_COMPANY: `COMPANY`,
    DYNAMO_ENTITY_STORAGE: `StorageLocation`,
	DYNAMO_ENTITY_TAGS: `TAGS`,
    MAX_SOCKETS: `100`,
    POST_RETRY_COUNT: `1`,
    ONE_ITEM: 1,
    FIRST_ITEM_FLAG: 0,
    DEFAULT_PRC_RECORD_FLAG: 1,
    NON_DEFAULT_PRC_RECORD_FLAG: 0
	
}