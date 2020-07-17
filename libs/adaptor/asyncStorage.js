function AsyncStorage(RNAsyncStorage) {
    this.RNAsyncStorage = RNAsyncStorage;

    this.setItem = async function (key = "", value = "") {
        await this.RNAsyncStorage.setItem(key, value);
    }

    this.multiSet = async function (keyValuePairs = []) {
        await new Promise((res, rej) => {
            this.RNAsyncStorage.multiSet(keyValuePairs, err => {
                if (err)
                    rej(err);
                else
                    res(keyValuePairs);
            });
        });
    }

    this.getItem = async function (key = "") {
        return await this.RNAsyncStorage.getItem(key);
    }

    this.removeItem = async function (key = "") {
        await this.RNAsyncStorage.removeItem(key);
    }

    this.getAllKeys = async function () {
        return await this.RNAsyncStorage.getAllKeys();
    }

    this.multiGet = async function (keys = []) {
        return (await this.RNAsyncStorage.multiGet(keys)).map(x => x[1]);
    }

    this.multiRemove = async function (keys = []) {
        await this.RNAsyncStorage.multiRemove(keys);
    }
}

module.exports = AsyncStorage;