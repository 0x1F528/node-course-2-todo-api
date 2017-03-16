const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongodDb server');
    }
    console.log('Connected to MongoDB server');

/*    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58ca8fcc62258b98884a26c3')
    }, {
        $set: {
            complete: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
*/    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("58c6a25e57c6261b44f113e8")
    }, {
        $set: {
            name: 'Chris'
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});