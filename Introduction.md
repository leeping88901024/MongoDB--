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

## 快速创建数据库
以下教程使用MongoDB Node.js Driver 来插入数据以及执行查询操作。
###你需要
教程需要你链接以下几个：
* MongoDB Atlas Free Tier Cluster: MongoDB是快速、简单的方法来开始MongoDB。你可以从[创建 Atlas Free Tier Cluster](https://docs.mongodb.com/manual/tutorial/atlas-free-tier-setup/#create-free-tier-manual)教程开始使用MongoDB Atlas。
* 本地MongoDB数据库: 在本地安装MongoDB数据库，请看[安装MongoDB](https://docs.mongodb.com/manual/installation/#tutorial-installation)
## 数据库和集合