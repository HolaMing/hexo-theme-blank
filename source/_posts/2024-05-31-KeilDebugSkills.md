---
layout: Post
title: Keil调试技巧
date: 2024-05-31
author:   Jett 
useHeaderImage: true
headerImage: /img/in-post/2024-05-31/1.jpg
headerMask: rgba(40, 57, 101, .4)
catalog: true
tags: 
  - Common
giscus: true  
---

本来这两篇想靠自己完成，但写到一半，发现别人写得更加全面深入，所以就直接转载算了。这两篇涉及地比较综合，奈何本人技术受限，无法写得更加深入。
## 分享  
[Cortex-M 处理器 hardfault 定位方法和步骤（基于Keil mdk）_cortex m4 hardfault 定位-CSDN博客](https://blog.csdn.net/supermuscleman/article/details/103929606)  
[HardFault_Handler问题查找方法 - J斌(´･ω･`) - 博客园 (cnblogs.com)](https://www.cnblogs.com/Justinben/p/13941579.html)  
[探索Keil常用调试方法，由浅入深，逐步经典，令人着迷_mdk数据改变时暂停-CSDN博客](https://blog.csdn.net/qq_38531460/article/details/118940976)  
[KEIL中HardFault_Handler的调试方法（stm32x0xx_it.c）_keil hardfault lr fffffd-CSDN博客](https://blog.csdn.net/qq_43448742/article/details/106387496)  
[【经验之谈】基于STM32 KEIL调试程序进入HardFault_Handler异常处理总结的经验分享 - STM32团队 ST意法半导体中文论坛 (stmicroelectronics.cn)](https://shequ.stmicroelectronics.cn/thread-638102-1-1.html)  
[【经验之谈】基于STM32 KEIL调试程序进入HardFault_Handler异常处理总结的经验分享 - STM32团队 ST意法半导体中文论坛 (stmicroelectronics.cn)](https://shequ.stmicroelectronics.cn/thread-638102-1-1.html)  
[ARM之Cortex M3的启动过程_armcortex-m3 引导程序-CSDN博客](https://blog.csdn.net/u010376350/article/details/83213675)

## 一、 Keil调试指南
### 1.问题分类
常规问题：逻辑错误，  
Fault问题：内存泄漏，堆栈溢出，越界访问
### 2. 常规问题
#### 2.1 printf打印
查看变量的值：在合适位置打印出关键变量的值  
查看程序运行位置：在合适位置打印字符串标记运行位置
#### 2.2 添加断点  
查看程序运行位置：直接在对应行插入断点  
#### 2.3 添加watch变量  
查看变量的值：填入变量名称，建议填入非局部变量  
#### 2.4 添加mermory地址  
查看寄存器的值：填入寄存器的地址  
查看变量的值：填入变量的地址  
#### 2.5 系统查看窗口  
可查看外设寄存器的值
### 3.Fault问题

## 二、CPU上电后的启动顺序  
### 1.Cortex M
1. **复位寄存器**。包括处理器和外设；
2. **初始化RAM**。将FLASH中全局变量和静态变量拷贝到RAM；
3. **进入startup启动代码**。进入Reset_Handler函数，初始化栈指针，进入SystemInit函数，初始化时钟，配置向量表。

