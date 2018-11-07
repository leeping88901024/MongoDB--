var MongoClient = require('mongodb').MongoClient;

var uri = 'mongodb://test:test@cluster0-shard-00-00-avsto.azure.mongodb.net:27017,cluster0-shard-00-01-avsto.azure.mongodb.net:27017,cluster0-shard-00-02-avsto.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    // 先获取集合，所有的操作都基于集合，集合在关系数据库中相当于 表
    const myNewCollection = client.db('myDBTest').collection('createCollection');
    
    /**
     * db.collection.insertOne()
     * @param object
     * @returns Promise
     */

    // 返回一个 Promise 对象
    myNewCollection.insertOne({
        item: 'canvas',
        qty: 100,
        tags: ['cotton'],
        size: { h: 28, w: 35.5, uom: 'cm' }
    }).then( result => console.log(result.insertedId ));
    
    /**
     * db.collection.insertMany()
     * @param Array
     * @returns Promise
     */

     // 多个插入
     myNewCollection.insertMany([
         {
             item: 'journal',
             qty: 25,
             tags: ['blank', 'red'],
             size: { h: 14, w: 21, uom: 'cm' }
         },
         {
            item: 'mat',
            qty: 85,
            tags: ['gray'],
            size: { h: 27.9, w: 35.5, uom: 'cm' }
          },
          {
            item: 'mousepad',
            qty: 25,
            tags: ['gel', 'blue'],
            size: { h: 19, w: 22.85, uom: 'cm' }
          }
     ]).then(result => console.log(result.insertedIds));

     /**
      * db.collection.insert()
      * @param object
      * @param Array
      */
     
    client.close();
});
