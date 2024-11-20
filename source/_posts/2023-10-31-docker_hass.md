---
layout: Post
title: Windows PC充当服务器，远程管理设备
date: 2023-10-31
author:   Jett 
tags: 
  - network
giscus: true  
---
<!-- toc -->

# 1.先决条件dddddddddfasffdfdfsfffffffffffff
1. 硬件：Windows PC，智能设备（可联网）
2. 软件：docker，home assistant，ddns-go
3. 技术：偏向计算机网络
4. 网络：公网IP，域名
# 2.软件配置
## 2.1 安装docker
推荐下载[Docker Desktop](https://www.docker.com/products/docker-desktop/)
## 2.2 安装home assistant
1. 拉取镜像
```bash
docker pull homeassistant/home-assistant:latest
```
2. 创建容器并运行
```bash
docker run -d --name="hass" -v C:/hass/config:/config -p 8123:8123 image-id
注意：将最后的image-id改为homeassistant镜像ID
```
## 2.3 安装HACS
```bash
#进入hass目录,安装hacs
docker exec -it hass bash
wget -O - https://get.hacs.xyz | bash -
```
## 2.4 添加设备

# 3.网络环境搭建
## 3.1 内网穿透
1. 获取公网ip：
	联系运营商光猫从路由模式改为桥接模式；
	获取拨号上网的账号密码将路由器设为拨号上网；
    [查看主机IP](https://www.test-ipv6.com/)
2. DDNS
	前提准备：域名
	[jeessy2/ddns-go: 简单好用的DDNS。自动更新域名解析到公网IP(支持阿里云、腾讯云、Dnspod、Cloudflare、Callback、华为云、百度云、Porkbun、GoDaddy、Google Domain) (github.com)](https://github.com/jeessy2/ddns-go)  
    **关于内网穿透之后文章将会做详细解释。**
# 4.参考资料
[Windows 10 - Docker — 从入门到实践 (gitbook.io)](https://yeasy.gitbook.io/docker_practice/install/windows)  
[Docker部署homeassitant - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/522550319)  
[User Documentation | HACS](https://hacs.xyz/docs/user/)  
[无硬件 | 本地电脑docker运行homeassistant | homeassistant安装 | 智能家居系列教程]( https://www.bilibili.com/video/BV1ak4y167gQ/?share_source=copy_web&vd_source=0a84b68dfae2da46ea8442d9af037e5c)  
[小白成神之路，网络知识看这一期足矣！软路由 桥接 端口转发 旁路由 单臂路由 IPv4 IPv6 DDNS](https://www.bilibili.com/video/BV1Gz4y1r791/?share_source=copy_web&vd_source=0a84b68dfae2da46ea8442d9af037e5c)
