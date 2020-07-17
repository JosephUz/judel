const Repo = require('./repo');

function Factory({ adaptor }) {
    this.adaptor = adaptor;

    this.create = function (name) {
        return new Repo(name, {
            adaptor: this.adaptor,
        });
    }
}

module.exports = Factory;