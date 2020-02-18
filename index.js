const Base = require('./libs/adaptor/base');
const AsyncStorage = require('./libs/adaptor/asyncStorage'); 

module.exports = {
    Repo: require('./libs/repo/factory'),
    adaptor: {
        AsyncStorage: function (RNAsyncStorage) {
            return new AsyncStorage(RNAsyncStorage);
        },
        Base: function () {
            return new Base();
        }
    }
};