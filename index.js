module.exports = {
    Repo: require('./libs/repo/factory'),
    adaptor: {
        AsyncStorage: function () {
            const AsyncStorage = require('./libs/adaptor/asyncStorage') 
            return new AsyncStorage();
        },
        Base: function () {
            const Base = require('./libs/adaptor/base');
            return new Base();
        }
    }
};