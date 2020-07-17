var storage = {};

function Adaptor() {
    this.setItem = async function (key = "", value = "") {
        storage[key] = value;
    }

    this.multiSet = async function (keyValuePairs = []) {
        keyValuePairs.forEach(keyValuePair => {
            storage[keyValuePair[0]] = keyValuePair[1];
        });
    }

    this.getItem = async function (key = "") {
        return storage[key];
    }

    this.removeItem = async function (key = "") {
        storage[key] = null;
        delete storage[key];
    }

    this.getAllKeys = async function () {
        return Object.keys(storage);
    }

    this.multiGet = async function (keys = []) {
        return keys.map(key => storage[key]);
    }

    this.multiRemove = async function (keys = []) {
        keys.forEach(key => this.removeItem(key));
    }
}

module.exports = Adaptor;