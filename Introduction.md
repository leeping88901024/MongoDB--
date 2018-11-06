# 简绍
## 开始
MongoDB 是开源的文档数据库，它提供高性能、高可用、自动扩展的特性。  
---
### 文档数据库
  一条记录在MongoDB里就是一个文档，它是包含字段和值这样成对的数据结构。MongoDB的文档和JSON对象类似。字段的值可以包含其他文档、数组、以及文档组成的数组。
  使用文档的好处在于：
  * 文档符合很多编程语言的原始数据类型。
  * 嵌套的文档和数组减少昂贵连接的需要。
  * 动态的概要（schema）支持流利的多态化。

### 主要特性
#### 高可用性
MongoDB提供很高的 数据持久化性能，特别是：
* 支持嵌套数据模型在数据库系统减少I/O活动。
* 索引支持快速查找，并且可以包含自嵌套文档和数组的主键。
#### 丰富的查询语言
MongoDB支持丰富的查询语言支持读写操作（CRUD）同时提供：
* 数据聚合
* 文本搜索和地理空间查询
#### 高可用性
#### 水平扩展性
#### 支持多个存储引擎

以下教程使用MongoDB Node.js Driver 来插入数据以及执行查询操作。
### 你需要
教程需要你链接以下几个：
* MongoDB Atlas Free Tier Cluster: MongoDB是快速、简单的方法来开始MongoDB。你可以从[创建 Atlas Free Tier Cluster](https://docs.mongodb.com/manual/tutorial/atlas-free-tier-setup/#create-free-tier-manual)教程开始使用MongoDB Atlas。
* 本地MongoDB数据库: 在本地安装MongoDB数据库，请看[安装MongoDB](https://docs.mongodb.com/manual/installation/#tutorial-installation)
## 快速创建数据库
[MongoDB Atlas](https://www.mongodb.com/cloud/atlas?utm_source=atlas-free-tier-setup&utm_campaign=20-docs-in-20-days&utm_medium=docs) 是云端可提供、运行、监控、和维护MongoDB的部署。可以快速、简单、自由的方式开始使用MongoDB。安装和运行本地MongoDB，请看[安装MongoDB](https://docs.mongodb.com/manual/installation/#tutorial-installation)
下面的教程使用[MongoDB Node.js Driver](http://mongodb.github.io/node-mongodb-native/2.2/)连接Atlas自由层簇。
1. 创建Atlas用户账号
## 数据库和集合
MongoDB存储 [BSON 文档](https://docs.mongodb.com/manual/core/document/#bson-document-format),数据记录在集合里。
### 数据库
在MongoDB，数据库持有文档的集合。
选择一个数据库使用，在[mongo](https://docs.mongodb.com/manual/reference/program/mongo/#bin.mongo)shell，使用 `<db>` 语句，如下所示：
> use myDB
#### **创建数据库**
如果一个数据库不存在，当你从数据库存储数据的时候MongoDB创建数据库。这样，你可以转换到一个没有存在的数据库执行以下的[mongo](https://docs.mongodb.com/manual/reference/program/mongo/#bin.mongo)  shell  

> use myNewDB  
> db.myNewCollection1.insertOne({ x: 1 })  

[insertOne()]()操作同时创建数据库 `myNewDB` 和集合 `myNewCollection1`，当然，如果它们不存在的话。
有关数据库名命名的限制，请看[命名限制](https://docs.mongodb.com/manual/reference/limits/#restrictions-on-db-names)
### 集合
MongoDB在集合里面存储文档，集合在关系型数据库里类似于表。
#### **创建集合**
当你在集合里面存数据的时候，如果集合不存在，MongoDB会首先创建集合，再存数据。
> db.myNewCollection2.insertOne({ x: 1 })
> db.myNewCollection3.createIndex({ y: 1 })

#### **显示创建**
MongoDB提供[db.createCollection()](https://docs.mongodb.com/manual/reference/method/db.createCollection/#db.createCollection)方法配合其他参数显示的创建集合。比如设置最大值或者文档验证规则。如果你没有指定这些参数，当你从集合里存数据的时候MongoDB会创建集合所以你没有必要显示的创建集合。
修改这些结合的参数，参考[collMod](https://docs.mongodb.com/manual/reference/command/collMod/#dbcmd.collMod)

#### **文档验证**
#### **修改文档结构**
#### **唯一标识符**

## 文档
MongoDB以BSON文档存储数据记录，BSON是JSON文档的二进制形式。可以认为他比JSON包含更多的数据类型。关于BSON的说明，请看[bsonspec.org](http://bsonspec.org/)，还有[BSON类型](https://docs.mongodb.com/manual/reference/bson-types/)  
![img1](https://docs.mongodb.com/manual/_images/crud-annotated-document.bakedsvg.svg "mig1")  
 ### 文档结构
> {
>   field1: value1,
>   field2: value2,
>   field3: value3,
>   ...
>   fieldN: valueN
> }
