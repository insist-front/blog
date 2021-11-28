---
title: Hadoop群启脚本
date: 2018-12-17
tags:
 - hadoop
categories:
 -  大数据
---



# Hadoop集群启停脚本(包含HDFS、YARN和Historyserver) myHadoop.sh

```shell
#!/bin/bash
if [ $# -lt 1 ]
then
 echo "No Args Input..."
 exit ;
fi
case $1 in
"start")
 echo " =================== 启动 hadoop 集群 ==================="
 echo " --------------- 启动 hdfs ---------------"
 ssh ha01.prdigital.cn "/opt/module/hadoop-3.1.3/sbin/start-dfs.sh"
 echo " --------------- 启动 yarn ---------------"
 ssh ha02.prdigital.cn "/opt/module/hadoop-3.1.3/sbin/start-yarn.sh"
 echo " --------------- 启动 historyserver ---------------"
 ssh ha01.prdigital.cn "/opt/module/hadoop-3.1.3/bin/mapred --daemon start 
historyserver"
;;
"stop")
 echo " =================== 关闭 hadoop 集群 ==================="
 echo " --------------- 关闭 historyserver ---------------"
 ssh ha01.prdigital.cn "/opt/module/hadoop-3.1.3/bin/mapred --daemon stop 
historyserver"
 echo " --------------- 关闭 yarn ---------------"
 ssh ha02.prdigital.cn "/opt/module/hadoop-3.1.3/sbin/stop-yarn.sh"
 echo " --------------- 关闭 hdfs ---------------"
 ssh ha01.prdigital.cn "/opt/module/hadoop-3.1.3/sbin/stop-dfs.sh"
;;
*)
 echo "Input Args Error..."
;;
esac
```