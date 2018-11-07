var MongoClient = require('mongodb').MongoClient;

var uri = 'mongodb://test:test@cluster0-shard-00-00-avsto.azure.mongodb.net:27017,cluster0-shard-00-01-avsto.azure.mongodb.net:27017,cluster0-shard-00-02-avsto.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
MongoClient.connect(uri, { useNewUrlParser: true, auto_reconnect: true, poolSize: 10 }, function(err, client) {
    const myNewCollection = client.db('myDBTest').collection('bulkWriteCollection');
    
    /* myNewCollection.insertMany([
        { "_id" : 1, "char" : "Brisbane", "class" : "monk", "lvl" : 4 },
        { "_id" : 2, "char" : "Eldon", "class" : "alchemist", "lvl" : 3 },
        { "_id" : 3, "char" : "Meldane", "class" : "ranger", "lvl" : 3 }
    ]).then(result => console.log(result.insertedIds)); */


    try {
        myNewCollection.bulkWrite(
           [
              { insertOne :
                 {
                    "document" :
                    {
                       "_id" : 4, "char" : "Dithras", "class" : "barbarian", "lvl" : 4
                    }
                 }
              },
              { insertOne :
                 {
                    "document" :
                    {
                       "_id" : 5, "char" : "Taeln", "class" : "fighter", "lvl" : 3
                    }
                 }
              },
              { updateOne :
                 {
                    "filter" : { "char" : "Eldon" },
                    "update" : { $set : { "status" : "Critical Injury" } }
                 }
              },
              { deleteOne :
                 { "filter" : { "char" : "Brisbane"} }
              },
              { replaceOne :
                 {
                    "filter" : { "char" : "Meldane" },
                    "replacement" : { "char" : "Tanys", "class" : "oracle", "lvl" : 4 }
                 }
              }
           ]
        );
     }
     catch (e) {
        console.log(e);
     }
     
    client.close();
});
