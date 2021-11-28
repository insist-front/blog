---
title: 群jps脚本
date: 2018-12-18
tags:
 - hadoop
categories:
 -  大数据
---



# **查看三台服务器** **Java** 进程脚本：jpsall

```shell
#!/bin/bash
for host in hadoop01 hadoop02 hadoop03
do
 echo =============== $host ===============
 ssh $host jps 
done
```