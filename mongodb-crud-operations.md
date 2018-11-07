# MongoDB CURD 操作
&emsp;&emsp;CRUD 操作创建、读取、更新和删除 [文档](https://docs.mongodb.com/manual/core/document/#bson-document-format)。
## 创建操作 
&emsp;&emsp;创建或者插入操作添加一个新的文档到集合。如果集合不存在，插入操作会创建集合。
&emsp;&emsp; MongoDB 提供如下的方法在集合中插入文档：
* [db.collection.insertOne( )]() *New in version 3.2*
* [db.collection.insertMany( )]() *New in version 3.2*  
&emsp;&emsp;在 MongoDB 中，插入操作定位单个集合，所有的写操作在单个文档上是原子操作。  
![图标](https://docs.mongodb.com/manual/_images/crud-annotated-mongodb-insertOne.bakedsvg.svg "图片标题")  
&emsp;&emsp;更多的示例，参考 [插入文档](https://docs.mongodb.com/manual/tutorial/insert-documents/)。  
## 读操作
&emsp;&emsp;读操作从集合获取文档，从集合中查询文档。MongoDB 提供了下列的方法从集合读取文档。  
* [db.collection.find( )](https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find)  
&emsp;&emsp;你可以指定[条件或者范围](https://docs.mongodb.com/manual/tutorial/query-documents/#read-operations-query-argument)指明返回的文档。  
![图片](https://docs.mongodb.com/manual/_images/crud-annotated-mongodb-find.bakedsvg.svg "读文档")  
&emsp;&emsp;更多示例，参考：
* [查询文档](https://docs.mongodb.com/manual/tutorial/query-documents/)
* [查询嵌套文档](https://docs.mongodb.com/manual/tutorial/query-embedded-documents/)
* [查询数组](https://docs.mongodb.com/manual/tutorial/query-arrays/)
* [查询嵌套数组](https://docs.mongodb.com/manual/tutorial/query-array-of-documents/)
## 更新操作
&emsp;&emsp;更新操作修改集合中存在的文档。MongoDB 提供如下的方法来修改记恨中的文档：  
* [db.collection.updateOne( )]() *New in version 3.2*
* [db.collection.updateMany( )]() *New in version 3.2*
* [db.collection.replaceOne( )]() *New in version 3.2*  
&emsp;&emsp;在 MongoDB 中，插入操作定位单个集合，所有的写操作在单个文档上是原子操作。  
&emsp;&emsp;你可以指定[条件或者范围](https://docs.mongodb.com/manual/tutorial/query-documents/#read-operations-query-argument)指明返回的文档。  
![图片](https://docs.mongodb.com/manual/_images/crud-annotated-mongodb-updateMany.bakedsvg.svg "读文档")  
## 删除操作
&emsp;&emsp;删除操作从集合移除文档，MongoDB 提供如下的方法从集合中删除文档：  
* [db.collection.deleteOne( )](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/#db.collection.deleteOne) *New in version 3.2*
* [db.collection.deleteMany( )](https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/#db.collection.deleteMany) *New in version 3.2*  
&emsp;&emsp;在 MongoDB 中，插入操作定位单个集合，所有的写操作在单个文档上是原子操作。 
&emsp;&emsp;你可以指定条件或者范围，条件或者范围和上述的读操作一样。
![图片](https://docs.mongodb.com/manual/_images/crud-annotated-mongodb-deleteMany.bakedsvg.svg "删除")
## 批量读操作
&emsp;&emsp;MongoDB提供批量读的操作，详细内容参看 [批量读操作](https://docs.mongodb.com/manual/core/bulk-write-operations/)