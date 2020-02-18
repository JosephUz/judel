const RNAsyncStorage = require('@react-native-community/async-storage');

function AsyncStorage() {

}

AsyncStorage.prototype.setItem = async function (key = "", value = "") {
    await RNAsyncStorage.setItem(key, value);
}

AsyncStorage.prototype.getItem = async function (key = "") {
    return await RNAsyncStorage.getItem(key);
}

AsyncStorage.prototype.removeItem = async function (key = "") {
    await RNAsyncStorage.removeItem(key);
}

AsyncStorage.prototype.getAllKeys = async function () {
    return await RNAsyncStorage.getAllKeys();
}

AsyncStorage.prototype.multiGet = async function (keys = []) {
    return (await RNAsyncStorage.multiGet(keys)).map(x => x[1]);
}

AsyncStorage.prototype.multiRemove = async function (keys = []) {
    await RNAsyncStorage.multiRemove(keys);
}

module.exports = AsyncStorage;