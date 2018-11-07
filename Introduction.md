# 简绍
## 1. 开始
&emsp;&emsp;MongoDB 是开源的文档数据库，它提供高性能、高可用、自动扩展的特性。
### 文档数据库
---
&emsp;&emsp;一条记录在MongoDB里就是一个文档，它是包含字段和值这样成对的数据结构。MongoDB的文档和JSON对象类似。字段的值可以包含其他文档、数组、以及文档组成的数组。
  使用文档的好处在于：
  * 文档符合很多编程语言的原始数据类型。
  * 嵌套的文档和数组减少昂贵连接的需要。
  * 动态的概要（schema）支持流利的多态化。

### 主要特性
---
#### 高可用性
&emsp;&emsp;MongoDB提供很高的 数据持久化性能，特别是：
* 支持嵌套数据模型在数据库系统减少I/O活动。
* 索引支持快速查找，并且可以包含自嵌套文档和数组的主键。
#### 丰富的查询语言
&emsp;&emsp;MongoDB支持丰富的查询语言支持读写操作（CRUD）同时提供：
* 数据聚合
* 文本搜索和地理空间查询
#### 高可用性
#### 水平扩展性
#### 支持多个存储引擎

&emsp;&emsp;以下教程使用MongoDB Node.js Driver 来插入数据以及执行查询操作。
### 开始前
---
&emsp;&emsp;教程需要你链接以下几个：
* MongoDB Atlas Free Tier Cluster: MongoDB是快速、简单的方法来开始MongoDB。你可以从 [创建 Atlas Free Tier Cluster](https://docs.mongodb.com/manual/tutorial/atlas-free-tier-setup/#create-free-tier-manual)教程开始使用MongoDB Atlas。
* 本地MongoDB数据库: 在本地安装MongoDB数据库，请看 [安装MongoDB](https://docs.mongodb.com/manual/installation/#tutorial-installation)
## 快速创建数据库
[MongoDB Atlas](https://www.mongodb.com/cloud/atlas?utm_source=atlas-free-tier-setup&utm_campaign=20-docs-in-20-days&utm_medium=docs) 是云端可提供、运行、监控、和维护MongoDB的部署。可以快速、简单、自由的方式开始使用MongoDB。安装和运行本地MongoDB，请看 [安装MongoDB](https://docs.mongodb.com/manual/installation/#tutorial-installation)
下面的教程使用 [MongoDB Node.js Driver](http://mongodb.github.io/node-mongodb-native/2.2/) 连接Atlas自由层簇。
1. 创建Atlas用户账号
## 2. 数据库和集合
&emsp;&emsp;MongoDB存储 [BSON 文档](https://docs.mongodb.com/manual/core/document/#bson-document-format) ,数据记录在集合里。
### 数据库
---
在MongoDB，数据库持有文档的集合。
选择一个数据库使用，在&ensp;[mongo](https://docs.mongodb.com/manual/reference/program/mongo/#bin.mongo)&ensp;shell，使用 `<db>` 语句，如下所示：
> use myDB
#### **创建数据库**
&emsp;&emsp;如果一个数据库不存在，当你从数据库存储数据的时候MongoDB创建数据库。这样，你可以转换到一个没有存在的数据库执行以下的 [mongo](https://docs.mongodb.com/manual/reference/program/mongo/#bin.mongo)  shell  

> use myNewDB  
> db.myNewCollection1.insertOne({ x: 1 })  

&emsp;&emsp;[insertOne()]()&ensp;操作同时创建数据库 `myNewDB` 和集合 `myNewCollection1`，当然，如果它们不存在的话。
有关数据库名命名的限制，请看&ensp;[命名限制](https://docs.mongodb.com/manual/reference/limits/#restrictions-on-db-names)
### 集合
---
MongoDB在集合里面存储文档，集合在关系型数据库里类似于表。
#### **创建集合**
当你在集合里面存数据的时候，如果集合不存在，MongoDB会首先创建集合，再存数据。
> db.myNewCollection2.insertOne({ x: 1 }) <br/>
> db.myNewCollection3.createIndex({ y: 1 })

#### **显示创建**
&emsp;&emsp;MongoDB 提供 [db.createCollection()](https://docs.mongodb.com/manual/reference/method/db.createCollection/#db.createCollection) 方法配合其他参数显示的创建集合。比如设置最大值或者文档验证规则。如果你没有指定这些参数，当你从集合里存数据的时候MongoDB会创建集合所以你没有必要显示的创建集合。
修改这些结合的参数，参考 [collMod](https://docs.mongodb.com/manual/reference/command/collMod/#dbcmd.collMod)

#### **文档验证**
#### **修改文档结构**
#### **唯一标识符**

## 3. 文档
&emsp;&emsp;MongoDB以BSON文档存储数据记录，BSON是JSON文档的二进制形式。可以认为他比JSON包含更多的数据类型。关于BSON的说明，请看 [bsonspec.org](http://bsonspec.org/)，还有 [BSON类型](https://docs.mongodb.com/manual/reference/bson-types/)  
![img1](https://docs.mongodb.com/manual/_images/crud-annotated-document.bakedsvg.svg "mig1")  
 ### 文档结构
 ---
 ```
 {
   field1: value1,  
   field2: value2,  
   field3: value3,  
   ...  
   fieldN: valueN  
}
```
&emsp;&emsp;字段的值可以包含容易的&ensp;[BSON数据类型](https://docs.mongodb.com/manual/reference/bson-types/)&ensp;，包含其他文档，数组，以及文档数组。比如，下列文档包含了多种类型：
```
var mydoc = {
               _id: ObjectId("5099803df3f4948bd2f98391"),
               name: { first: "Alan", last: "Turing" },
               birth: new Date('Jun 23, 1912'),
               death: new Date('Jun 07, 1954'),
               contribs: [ "Turing machine", 
               "Turing test","Turingery" ],
               views : NumberLong(1250000)
            }
```
&emsp;&emsp;上述字段包含以下几种数据类型：
* _id 持有 [ObjectId](https://docs.mongodb.com/manual/reference/bson-types/#objectid)  
* name持有嵌入的文档，文档包含字段 `first` 和 `last` 。  
* `birth` 和 `death` 持有 `Date` 类型的值。
* `contribs` 持有字符串数组。
* `views` 持有 `NumberLong` 类型的值。

&emsp;&emsp;**字段名称**  
&emsp;&emsp;字段名称是字符串。  
&emsp;&emsp;文档对字段名称的限制如下：
* 字段名称 `_id` 保留用来作为主键，在集合里这个值必唯一，不可改变的，并且可能是除数组以外的其他类型。
* 字段名称**不能**包含`null`字符.
* 顶级字段名称不能以`$`符号开始。  
&emsp;&emsp;另外，从MongoDB 3.6开始，服务器允许存储包含`.,$`的字段名称。  
&emsp;&emsp;BSON文档可能包含多个相同名称的字段。多数的 [MongoDB 接口](https://docs.mongodb.com/manual/applications/drivers/) ，然而表示MongoDB数据结构，（哈希表）不支持重复的命名。如果你需要重复字段命名的文档，查看 [驱动文档](https://docs.mongodb.com/manual/applications/drivers/)。  
&emsp;&emsp;有些被内部MongoDB进程创建的文档可能包含重复的字段名，但是没有MongoDB进程会在已存用户文档中复制字段。

&emsp;&emsp;**字段值限制**  
&emsp;&emsp;对于已索引的集合，被索引字段的值有 [最大索引关键字长](https://docs.mongodb.com/manual/reference/limits/#Index-Key-Limit) 限制。  
### 点标记（Dot Notation）
---
&emsp;&emsp;MongoDB使用*点标记(dot notation)*获取嵌套文档的字段或者数组的元素。  
&emsp;&emsp;**数组**  

&emsp;&emsp;指定或者获取以0开始索引的数组元素，用点(.)和数组名称相连，后面跟上数组位置。  
&emsp;&emsp;例如查询数组如下：  
* 查询数组
* 查询嵌套文档数组

&emsp;&emsp;**嵌套文档**  
&emsp;&emsp;以点标记指定或者获取嵌套文档的字段，用点(.)和文档名称相连，后面跟上字段的名称。
> `"<embedded document>.<field>"`  
&emsp;&emsp;比如给定如下的文档：
```
{
   ...
   name: { first: "Alan", last: "Turing" },
   contact: { phone: { type: "cell", number: "111-222-3333" } },
   ...
}
```
* 获取 `name`字段名为 `last` 的字段，使用点标记：**"name.last"**。
* 获取 在字段 `contact` 内的 `phone` 文档的 `number` 字段，使用点标记：`"contact.phone.number"`。  
&emsp;&emsp;有关查询嵌套文档的案例，请查看：
* [在嵌套文档上查询](https://docs.mongodb.com/manual/tutorial/query-embedded-documents/)  
* [查询嵌套文档数组](https://docs.mongodb.com/manual/tutorial/query-array-of-documents/)

### 文档限制
---
&emsp;&emsp;文档有以下属性：  
&emsp;&emsp;**文档大小限制**  
&emsp;&emsp;**文档字段顺序**  
&emsp;&emsp;**_id字段**

### 文档结构的其他用途
--- 
&emsp;&emsp;**查询过滤文档**  
&emsp;&emsp;**更新指定文档**  
&emsp;&emsp;**索引指定文档**

### 其他资源
---
[Thinking in documents Part 1](https://www.mongodb.com/blog/post/thinking-documents-part-1?jmp=docs)

## 4. BSON 类型
&emsp;&emsp;[BSON](https://docs.mongodb.com/manual/reference/glossary/#term-bson) 是序列化二进制格式用来存储文档，并且远程过程在MongoDB中调用。BSON 的说明在 [bsonspec.org](http://bsonspec.org/)。  
&emsp;&emsp;每种 BSON 类型都有整数和字符串标识如下表所示：
类型|数字|别名|备注  
---|:--:|:--:|---
Double|1|"double"|  
String|2|"string"|
Object|3|"object"|
Array|4|"array"|
Binary data|5|"binData"|
Undefined|6|"undefined"| 过时|
ObjectId|7|"objectId"|
Boolean|8|"bool"|
Date|9|"date"|
Null|10|"null"|
Regular Expression|11|""regex|
DBPoniter|12|"dbPointer"|过时|
JavaScript|13|"javascript"|
Symbol|14|"symbol"|过时|
JavaScript(with scope)|15|"javascriptWithScope"|
32-bit integer|16|"int"
Timestamp|17|"timestamp"|
64-bite integer|18|"long"
Decimal128|19|"decimal"| 在版本3.4|
Min key|-1|"minKey"|
Max key|127|"maxKey"|

&emsp;&emsp;你可以使用操作符 [${type}](https://docs.mongodb.com/manual/reference/operator/query/type/#op._S_type) 通过 BSON 类型查询文档。聚合操作 *$type* 返回使用上述 BSON 类型字符串表达式的类型。  
&emsp;&emsp;判断字段的类型，查看 [Check Types in mongo shell](https://docs.mongodb.com/manual/core/shell-types/#check-types-in-shell)。  
&emsp;&emsp;如果你想把 BSON 转换成 JSON ，请参考 [JSON 扩展](https://docs.mongodb.com/manual/reference/mongodb-extended-json/)。  
&emsp;&emsp;下列讨论特殊情况下的几种特别 BSON 类型。
## 5. 比较和排序规则
## 6. MongoDB JSON 扩展

