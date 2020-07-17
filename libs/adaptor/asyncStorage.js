function AsyncStorage(RNAsyncStorage) {
    this.RNAsyncStorage = RNAsyncStorage;
}

AsyncStorage.prototype.setItem = async function (key = "", value = "") {
    await this.RNAsyncStorage.setItem(key, value);
}

AsyncStorage.prototype.multiSet = async function (keyValuePairs = []) {
    await new Promise((res, rej) => {
        this.RNAsyncStorage.multiSet(keyValuePairs, err => {
            if (err)
                rej(err);
            else
                res(keyValuePairs);
        });
    });
}

AsyncStorage.prototype.getItem = async function (key = "") {
    return await this.RNAsyncStorage.getItem(key);
}

AsyncStorage.prototype.removeItem = async function (key = "") {
    await this.RNAsyncStorage.removeItem(key);
}

AsyncStorage.prototype.getAllKeys = async function () {
    return await this.RNAsyncStorage.getAllKeys();
}

AsyncStorage.prototype.multiGet = async function (keys = []) {
    return (await this.RNAsyncStorage.multiGet(keys)).map(x => x[1]);
}

AsyncStorage.prototype.multiRemove = async function (keys = []) {
    await this.RNAsyncStorage.multiRemove(keys);
}

module.exports = AsyncStorage;