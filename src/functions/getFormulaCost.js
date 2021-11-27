const { albertDev, InventoryCAS} = require ("../models/dynamoDbTable")
const { errorMessage } = require("../policies/errorHandler")

/**
 * Name:        getInventoriesByCasId
 * Description: retrieves all inventories containing a given CasId sorted by the max percentage of given CAS in  desc order
 * @param {Object} req - Http request object
 * @param {Object} res - return object with success message 
 */
module.exports = async function (req, res) {
    try 
    {
        

    }
    
    catch (exception) {
        exception = exception.message ? exception.message : exception
        if (exception) {
            return errorMessage(res, "Bad Request", exception)
        } else {
            return errorMessage(res, "InternalServerError")
        }
    } 

}     