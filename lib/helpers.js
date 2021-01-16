/* 
 * Helpers
*/

// Dependencies

const helpers = {}

helpers.parseJson = (str) => {
    str = typeof(str) == "string" && str.length > 0 ? str : "{}"
    return JSON.parse(str)
}


module.exports = helpers