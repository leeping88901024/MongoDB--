var MongoClient = require('mongodb').MongoClient;

var uri = 'mongodb://test:test@cluster0-shard-00-00-avsto.azure.mongodb.net:27017,cluster0-shard-00-01-avsto.azure.mongodb.net:27017,cluster0-shard-00-02-avsto.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    const myNewCollection = client.db('myDBTest').collection('createCollection');

      /**
     * db.collection.find()
     * @param object
     * @returns Promise
     */

     // 查询全部文档 select * from myNewCollection
     // toArray
     // explain
     // skip
     myNewCollection.find({}).toArray(function(err, docs) {
         console.log(`the docs length is ${docs.length}\n  the docs content is ${docs}`)
     });

     // 指定查询条件 select * from myNewCollection where qty = 100
     const cursor2 = myNewCollection.find({ qty: 100 });

     console.log(`the type of find result is ${typeof(cursor2)} \n and it contain : ${cursor2}`);

     // 使用查询操作符 select * from myNewCollection where qty < 85
     // 语法 {<field1>: { <operator1>: <value1> }, ... }
     const cursor3 = myNewCollection.find({
         qty: { $lt: 85 }
     });

     // 指定 与 操作 select * from myNewCollection where qty < 85 and item = 'mousepad'
     const cursor4 = myNewCollection.find({
        qty: { $lt: 85 },
        item: 'mousepad'
    });

    // 指定或者操作  select * from myNewCollection where qty < 85 or item = 'mousepad'
    const cursor5 = myNewCollection.find({
        $or: [{ qty: { $lt: 85 } }, { item: 'mousepad' }]
    });

    // 上述二者可以合并，指定 与 和 或 操作

    client.close();
});
