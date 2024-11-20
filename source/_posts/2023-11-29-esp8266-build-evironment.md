---
layout: Post
title: ESP8266官方SDK环境搭建
date: 2023-11-29
author:   Jett 
tags: 
  - MCU
giscus: true  
---
<!-- toc -->

ESP8266_RTOS_SDK+MinGW32
# 1.下载工具链  
1. 下载[编译环境](https://dl.espressif.com/dl/esp32_win32_msys2_environment_and_toolchain-20181001.zip)  
    并解压到你所需路径下
2. 下载最新版[ESP8266编译工具](https://dl.espressif.com/dl/xtensa-lx106-elf-gcc8_4_0-esp-2020r3-win32.zip)
   并解压到上一步解压的文件夹的opt文件夹中
![[解压到opt文件夹位置.png]](解压到opt文件夹位置.png)
# 2.下载SDK
1. 打开mingw32![[mingw32位置.png]](mingw32位置.png)
2. 下载SDK，输入下列命令，若下载成功可在home递归文件夹中发现
```shell
git clone https://github.com/espressif/ESP8266_RTOS_SDK.git 
```
1. 设置编译环境，打开子文件夹\etc\profile.d里面的 esp32_toolchain.sh文件![[esp32_toolchain文件位置.png]](esp32_toolchain文件位置.png)
2. 添加变量，路径为你所安装的位置，格式和下列相同
```shell
	export PATH="$PATH:/opt/xtensa-lx106-elf/bin"
	export IDF_PATH="C:/msys32/home/MingXXX/esp/ESP8266_RTOS_SDK"
```
![[添加变量.png]](添加变量.png)
# 3.编译项目
1. 设置烧录的端口号，打开mingw32终端
```shell
cd ~/esp/ESP8266_RTOS_SDK/examples/get-started/hello_world
make menuconfig
```
2. 编译，烧录并打开调试窗口
```shell
make flash monitor
```
# 4.参考资料
[espressif/ESP8266_RTOS_SDK: Latest ESP8266 SDK based on FreeRTOS, esp-idf style. (github.com)](https://github.com/espressif/ESP8266_RTOS_SDK)  
[Standard Setup of Toolchain for Windows — ESP8266 RTOS SDK Programming Guide documentation (espressif.com)](https://docs.espressif.com/projects/esp8266-rtos-sdk/en/latest/get-started/windows-setup.html)  
[ESP8266学习之路1环境搭建 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/388980614)  
[Tutorial for Beginners - ESP8266 Developer Zone (espressif.com)](https://bbs.espressif.com/viewtopic.php?f=67&t=821)