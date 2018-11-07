var MongoClient = require('mongodb').MongoClient;

var uri = 'mongodb://test:test@cluster0-shard-00-00-avsto.azure.mongodb.net:27017,cluster0-shard-00-01-avsto.azure.mongodb.net:27017,cluster0-shard-00-02-avsto.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    const myNewCollection = client.db('myDBTest').collection('deleteCollection');

    /*
    myNewCollection.insertMany([
        {
            item: 'journal',
            qty: 25,
            size: { h: 14, w: 21, uom: 'cm' },
            status: 'A'
          },
          {
            item: 'notebook',
            qty: 50,
            size: { h: 8.5, w: 11, uom: 'in' },
            status: 'P'
          },
          {
            item: 'paper',
            qty: 100,
            size: { h: 8.5, w: 11, uom: 'in' },
            status: 'D'
          },
          {
            item: 'planner',
            qty: 75,
            size: { h: 22.85, w: 30, uom: 'cm' },
            status: 'D'
          },
          {
            item: 'postcard',
            qty: 45,
            size: { h: 10, w: 15.25, uom: 'cm' },
            status: 'A'
          }
    ]);
    */

    // myNewCollection.deleteMany({});

    // 返回的 Promise 中有 result result.deletedCount 删除的文档数。
    
    // 条件删除 删除多行
    myNewCollection.deleteMany({ status: 'A' }).then(result => console.log(result.deletedCount))

    // 删除多行中的第一行
    myNewCollection.deleteOne({ status: 'D' }).then(result => console.log(result.deletedCount));

    client.close();
});
