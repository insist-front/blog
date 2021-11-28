---
title: 问题
date: 2018-12-23
tags:
 - hadoop
categories:
 -  大数据
---



# ERROR: but there is no YARN_RESOURCEMANAGER_USER defined. Aborting operation.

1. 描述，core-site.xml使用root用户配置

2. 解决

   1. 在start-dfs.sh中（文件开头）

      ```shell
      HDFS_DATANODE_USER=root
      HADOOP_SECURE_DN_USER=hdfs
      HDFS_NAMENODE_USER=root
      HDFS_SECONDARYNAMENODE_USER=root
      ```

   2. 在start-yarn.sh中（文件开头）

      ```shell
      YARN_RESOURCEMANAGER_USER=root
      HADOOP_SECURE_DN_USER=yarn
      YARN_NODEMANAGER_USER=root
      ```

      