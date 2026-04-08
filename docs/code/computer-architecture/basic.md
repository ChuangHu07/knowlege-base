---
title: Homwork4
date: 2026-04-07
---

# 基本概念

## 什么是计算机组成原理

连接VPN
ssh CHH429@thompson.cs.pitt.edu
git clone https://github.com/wonsunahn/CS2410_Spring2026
cd CS2410_Spring2026/resources/cache_experiments/

遇到了两个问题
1. make: *** [Makefile:91: outputs/array.bin.100.ipc] Error 2
rm linked-list_nodata.o array_nodata.o array.o linked-list.o array_optimized.o linked-list_optimized.o
outputs/ 目录不存在
原因： Makefile 试图把 perf 的输出结果写入 outputs/ 文件夹，但这个文件夹没有被自动创建。
解决方法：
mkdir -p outputs
mkdir 是创建目录的命令，-p 的意思是"如果父目录不存在也一并创建，且不报错"。
2. perf_ctl 文件已存在
错误信息：
mkfifo: cannot create fifo 'perf_ctl': File exists
原因： 第一次 make 失败时，perf_ctl 这个临时文件已经被创建了但没有被清理掉。第二次运行 make 时试图重新创建它，就冲突了。
解决方法：
make clean

## 冯诺依曼结构

...