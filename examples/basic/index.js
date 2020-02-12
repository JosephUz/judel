const judel = require('../../index.js');

var adaptor = judel.adaptor.Base();

var repo = new judel.Repo({
    adaptor
});

var userModel = repo.create("user");

(async () => {
    var yusuf = await userModel.insert({
        name: 'yusuf'
    });

    yusuf.name = 'yusuf çağrı';
    yusuf.surname = 'oğuz';
    yusuf = await userModel.update(yusuf);

    console.log(' --- before 05.08.2016 ---');
    console.log((await userModel.list()).map(x => `${x.name} ${x.surname}`));

    var ayda = await userModel.insert({
        name: 'aydanur',
        surname: 'emre' 
    });

    console.log(' --- after 05.08.2016 ---');
    console.log((await userModel.list()).map(x => `${x.name} ${x.surname}`));

    ayda.surname = 'oğuz';
    ayda = await userModel.update(ayda);

    console.log(' --- after 16.08.2020 ---');
    console.log((await userModel.list()).map(x => `${x.name} ${x.surname}`));
})();