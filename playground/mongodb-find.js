const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongodDb server');
    }
    console.log('Connected to MongoDB server');

/*    db.collection('Todos').find({
        _id: new ObjectID("58c8d5ec0983017a6c5cd25b")
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });
*/
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    db.collection('Users').find({name: 'Chris'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('unable to fetch users', err);
    });
    
    //db.close();
});