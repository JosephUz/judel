
# Judel

Judel is a JavaScript library that provides a flexible and easy-to-use interface for managing data repositories for JSON or like RNAsyncStorage. It supports both synchronous and asynchronous data storage operations, making it ideal for a wide range of applications.

## Features
- Customizable repository management.
- Support for both synchronous and asynchronous storage.
- Easy-to-use API for data operations like insert, update, delete, and query.

## Installation
To install Judel, use npm or Yarn:
```bash
npm install judel
```
or
```bash
yarn add judel
```

## Usage
### Basic Setup
```javascript
const { Repo, adaptor } = require('judel');

// Using AsyncStorage adaptor
const myRepo = new Repo('myRepo', { adaptor: adaptor.AsyncStorage(RNAsyncStorage) });
```

### Inserting Data
```javascript
await myRepo.insert({ name: 'Example', value: 'Data' });
```

### Updating Data
```javascript
await myRepo.update({ id: 'some-id', name: 'New Name' });
```

### Removing Data
```javascript
await myRepo.remove('some-id');
```

### Querying Data
```javascript
const allItems = await myRepo.list();
const singleItem = await myRepo.findOne(item => item.id === 'some-id');
```

## Adaptors
Judel comes with two built-in adaptors:
- `Base`: A basic in-memory storage adaptor.
- `AsyncStorage`: An adaptor for React Native's AsyncStorage.

You can also create your own adaptor by extending the `Base` adaptor.

## Examples

### [Basic Usage][]

This example shows the most basic way of usage.

[Basic Usage]: https://github.com/JosephUz/judel/tree/master/examples/basic


License
-------

This software is free to use under the JosephUz. See the [LICENSE file][] for license text and copyright information.


[LICENSE file]: https://github.com/JosephUz/judel/blob/master/LICENSE
