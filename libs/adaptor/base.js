var storage = {};

function Adaptor() {

}

Adaptor.prototype.setItem = async function (key = "", value = "") {
    storage[key] = value;
}

Adaptor.prototype.getItem = async function (key = "") {
    return storage[key];
}

Adaptor.prototype.removeItem = async function (key = "") {
    storage[key] = null;
    delete storage[key];
}

Adaptor.prototype.getAllKeys = async function () {
    return Object.keys(storage);
}

Adaptor.prototype.multiGet = async function (keys = []) {
    return keys.map(key => storage[key]);
}

Adaptor.prototype.multiRemove = async function (keys = []) {
    keys.forEach(key => this.removeItem(key));
}

module.exports = Adaptor;