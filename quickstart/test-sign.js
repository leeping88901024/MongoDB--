var MongoClient = require('mongodb').MongoClient,
  url = 'mongodb://test:test@cluster0-shard-00-00-avsto.azure.mongodb.net:27017,cluster0-shard-00-01-avsto.azure.mongodb.net:27017,cluster0-shard-00-02-avsto.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
MongoClient.connect(url,{useNewUrlParser: true}, (err, db) => {
    // Some docs for insertion
    var docs = [{
        title : 'this is my title', author : 'bob', posted : new Date(),
        pageViews : 5, tags : ['fun', 'good', 'fun'], other : { foo : 5},
        comments : [
            { author : 'joe', text : 'this is cool' }, { author : 'sam', text : 'this is bad' }
        ]}];
    // create a colletion
    var collection = db.collection('aggregationExample1');
    // Insert the docs
    collection.insertMany(docs, { w: 1 }, (err, result) => {
        // Execute aggregate, notices the pipeline is expressed as an Array
        collection.aggregate([
            {
                $project : {
                    author : 1,
                    tags : 1
                }
            },
            { $un }
        ])
    })
});