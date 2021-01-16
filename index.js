const server = require("./lib/server")


const appStarter = {

}

appStarter.start = (callback) => {
    server.init("expressApp");
    callback();
}

if(require.main = module) {
    appStarter.start(() => {})
}

module.exports = appStarter