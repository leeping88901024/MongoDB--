# CRUD 操作
## 1. 插入文档
## 2. 查询文档
## 3. 更新文档
## 4. 删除文档
## 5. 批量读操作
### 简述
---
&emsp;&emsp;MongoDB 提供了客户端有执行批量写的能力。批量写操作作用在单个集合。MongoDB 允许应用程序确定批量写入操作所需的可接受的确认级别。  
&emsp;&emsp; *New in version 3.2*  
&emsp;&emsp; `db.collection.bulkWrite()`方法提供了执行批量插入、更新、删除的能力。MongoDB 还支持通过`db.collection.insertMany()`进行批量插入。
### 有序和无序操作
---
&emsp;&emsp;批量读操作可分为*有序*和*无序*。  
&emsp;&emsp;有序的操作列表，MongoDB 顺序的执行操作。如果在读从操作中有一个过程出现错误，MongoDB 将返回，同时不再执行接下来的操作列表中的操作。参考[有序批量读](https://docs.mongodb.com/manual/reference/method/db.collection.bulkWrite/#bulkwrite-example-bulk-write-operation)。  
&emsp;&emsp;无序的操作列表，MongoDB将并行执行操作，但是每个操作没有保证执行成功。如果其中的一个操作出现错误，MongoDB将执行操作列表中剩下来的操作。参考[无序批量写](https://docs.mongodb.com/manual/reference/method/db.collection.bulkWrite/#bulkwrite-example-unordered-bulk-write)。  
&emsp;&emsp;通常，在一个共享的集合上执行有序的操作列表要比在无序的操作类表上慢很多。因为每一个操作在等待前一个操作的完成。  
&emsp;&emsp;默认情况，`bulkWrite()`执行有序的操作，指定无序的操作，设置参数 `{ ordered: false }`
### bulkWrite() 方法
---
&emsp;&emsp;`bulkWrite()支持下列写操作：`  
* insertOne()
* updateOne()
* updateMany()
* replaceOne()
* deleteOne()
* deleteMany()  

&emsp;&emsp;每个操作作为文档数组元素，文档作为 `bulkWrite()` 的参数。  
&emsp;&emsp;例如，如下执行批量写操作：  
&emsp;&emsp; `characters`集合包含了下列的文档：
```
{ "_id" : 1, "char" : "Brisbane", "class" : "monk", "lvl" : 4 },
{ "_id" : 2, "char" : "Eldon", "class" : "alchemist", "lvl" : 3 },
{ "_id" : 3, "char" : "Meldane", "class" : "ranger", "lvl" : 3 }
```  
&emsp;&emsp;下列 `bulkWrite`在集合上执行多个操作：
```
try {
   db.characters.bulkWrite(
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
   print(e);
}
```
### 批量插入共享集合的策略
---
#### **预分割集合**
#### **无序写入到 mongos**
#### **避免单调节流**

## 6. 重复写
## 7. MongoDB SQL映射表
### 术语和概念
---
&emsp;&emsp;下表呈现了多种 SQL 术语和概念，以及它在 MongoDB 中的术语和概念。  
SQL 术语/概念| MongoDB 术语/概念
---|:--:|---
database|[database](https://docs.mongodb.com/manual/reference/glossary/#term-database)
table|[collection](https://docs.mongodb.com/manual/reference/glossary/#term-collection)
row|[document](https://docs.mongodb.com/manual/reference/glossary/#term-document) or [BSON](https://docs.mongodb.com/manual/reference/glossary/#term-bson) document
column|[field](https://docs.mongodb.com/manual/reference/glossary/#term-field)
index|[index](https://docs.mongodb.com/manual/reference/glossary/#term-index)
table join|[$look](https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/#pipe._S_lookup),embedded documents
primary key|[primary key](https://docs.mongodb.com/manual/reference/glossary/#term-primary-key)
Specify any unique column or column combination as primary key.|In MongoDB, the primary key is automaticlly set to the [_id](https://docs.mongodb.com/manual/reference/glossary/#term-id) field. 
aggregation(e.g.group by)|aggregation pipeline See the [SQL to Aggregation Mapping Chart](https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/)
transactions|[transactions](https://docs.mongodb.com/manual/core/transactions/)

具体的对应关系查看 [这里](https://docs.mongodb.com/manual/reference/sql-comparison/)
## 8. 文本搜素
&emsp;&emsp;MongoDB 支持查询操作符字符串内容文本搜素。执行文本搜素，MongoDB 使用[文本索引](https://docs.mongodb.com/manual/core/index-text/#index-feature-text)和[$text](https://docs.mongodb.com/manual/reference/operator/query/text/#op._S_text)操作符。
## 9. 地理查询
### 地理空间数据
---
&emsp;&emsp;在MongoDB 你可以以 [GeoJSON](https://docs.mongodb.com/manual/geospatial-queries/#geospatial-geojson) 对象存储地理数据，
### 地理空间索引
---
### 地理空间查询
---
### 地理空间模型
---
### 示例
---
## 10. 隔离读 (Read isolation)(Read consern)
## 11. 署名写 (Write Concern)
## 12. MongoDB CRUD 概念
&emsp;&emsp;这部分提供在 MongoDB中有关 CURD 的额外信息。  
&emsp;&emsp;**原子性、一致性、分布式操作**
* 原子性和事务

