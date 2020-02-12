const uuidv4 = require('uuid/v4');
const Base = require('./base');

function AsyncRepo(name, { adaptor }) {
    Base.call(this, name, { adaptor });
}

AsyncRepo.prototype.insert = async function (item = {}) {
    item.id = uuidv4();
    await this.adaptor.setItem(this.name + item.id, JSON.stringify(item));
    return item;
}

AsyncRepo.prototype.update = async function (item) {
    var old = await this.get(item.id);
    if (old) {
        Object.keys(item).forEach(key => {
            old[key] = item[key];
        });
        await this.adaptor.setItem(this.name + item.id, JSON.stringify(old));
        return old;
    } else {
        return null;
    }
}

AsyncRepo.prototype.upsert = async function (item) {
    if (item.id)
        await this.update(item);
    else
        await this.insert(item);
}

AsyncRepo.prototype.remove = async function (id) {
    await this.adaptor.removeItem(this.name + id);
}

AsyncRepo.prototype.get = async function (id) {
    var item = await this.adaptor.getItem(this.name + id);
    if (item)
        try {
            return JSON.parse(item);
        } catch (error) {
            return null;
        }
    else
        return null;
}

AsyncRepo.prototype.list = async function () {
    const keys = (await this.adaptor.getAllKeys()).filter(
        (key) => key.indexOf(this.name) === 0
    );
    if (keys.length > 0) {
        var values = (await this.adaptor.multiGet(keys));
        return values.map(value => {
            try {
                return JSON.parse(value);
            } catch (error) {
                return null;
            }
        }).filter((x) => x);
    } else
        return [];
}

AsyncRepo.prototype.find = async function (query) {
    return (await this.list()).filter(query);
}

AsyncRepo.prototype.findOne = async function (query) {
    return (await this.list()).filter(query)[0];
}

AsyncRepo.prototype.clear = async function () {
    var list = await this.list();

    if (list.length)
        this.adaptor.multiRemove(list.map((x) => this.name + x.id));
}

module.exports = AsyncRepo;
