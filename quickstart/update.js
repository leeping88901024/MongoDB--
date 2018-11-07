var MongoClient = require('mongodb').MongoClient;

var uri = 'mongodb://test:test@cluster0-shard-00-00-avsto.azure.mongodb.net:27017,cluster0-shard-00-01-avsto.azure.mongodb.net:27017,cluster0-shard-00-02-avsto.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    const myNewCollection = client.db('myDBTest').collection('updateCollection');

    myNewCollection.insertMany([
        {
            item: 'canvas',
            qty: 100,
            size: { h: 28, w: 35.5, uom: 'cm' },
            status: 'A'
          },
          {
            item: 'journal',
            qty: 25,
            size: { h: 14, w: 21, uom: 'cm' },
            status: 'A'
          },
          {
            item: 'mat',
            qty: 85,
            size: { h: 27.9, w: 35.5, uom: 'cm' },
            status: 'A'
          },
          {
            item: 'mousepad',
            qty: 25,
            size: { h: 19, w: 22.85, uom: 'cm' },
            status: 'P'
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
          },
          {
            item: 'sketchbook',
            qty: 80,
            size: { h: 14, w: 21, uom: 'cm' },
            status: 'A'
          },
          {
            item: 'sketch pad',
            qty: 95,
            size: { h: 22.85, w: 30.5, uom: 'cm' },
            status: 'A'
          }
    ]);

    /**
     * db.collection.updateOne()
     * @param object  更新对象
     * @param object  更新内容
     */

    
    myNewCollection.updateOne(
        { item: 'paper' }, // 更新对象
        {
            $set: { 'size.uom': 'cm', status: 'P' },  // 更新内容
            $currentDate: { lastModified: true }
        }
    );

    
    myNewCollection.updateMany(
        { qty: { $lt: 50 } },
        {
            $set: { 'size.uom': 'in', status: 'P' },
            $currentDate: { lastModified: true }
        }
    );

    // 更新整个文档
    // 更新整个文档时，新文档的内容只能包含字段-值，不要包含更新操作符
    myNewCollection.replaceOne(
        { item: 'paper' },
        {
            $set: {
                item: 'paper',
                instock: [{ warehouse: 'A', qty: 60 }, { warehouse: 'B', qty: 40 }]
            },
            $unset: {
                qty: '',
                size: '',
                status: '',
                lastModified: ''
            }
        }
    )


    client.close();
});
