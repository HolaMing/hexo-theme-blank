---
layout: Post
title: 应用层协议浅析
date: 2024-03-26
author:   Jett 
useHeaderImage: true
headerImage: /img/in-post/2024-3-26/1.jpg
headerMask: rgba(40, 57, 101, .4)
catalog: true
tags: 
  - network
giscus: true  
---

# SSH（Secure Shell）
默认使用22端口，常见使用**公钥进行身份识别，私钥进行加密通讯数据**。  
应用场景：  
1. 远程连接PC；    
2. github 仓库操作（clone,pull,push等）时的身份识别；  
3. SCP,SFTP进行文件传输；  
# SOCKS5（Socket Secure 5）
一种**代理协议**，用于在客户端和服务器之间进行通信，并在这两者之间进行数据转发。  
SOCKS 代理协议的作用是为客户端提供访问目标服务器的中间层，同时**隐藏客户端的真实 IP 地址**。正向代理用于客户端需要访问互联网资源时的隧道，而反向代理则用于目标服务器需要向客户端提供服务时的隧道。  
# Shadowsocks
**基于Socks5代理协议**,Shadowsocks协议**对传输的数据进行加密**，以保护用户的隐私和数据安全。通常使用的加密算法包括AES、RC4等，用户可以根据需要选择不同的加密方式。  
Shadowsocks**通过加密和混淆流量来保护用户隐私和数据安全**。然而，这种加密流量的**特征可能与常规的网络流量有所不同**，这使得网络审查系统可以通过检测流量模式或特征来识别和封锁Shadowsocks流量。  
Shadowsocks协议的主要**优点**包括**高效**的数据传输、可靠的隐私保护和灵活的配置选项。  

# VMess（Virtual Mess）
伪装成HTTPS流量,支持混淆和伪装技术，动态端口分配功能。  
VMess 是一个**无状态协议**，即客户端和服务器之间**不需要握手**即可直接传输数据，每一次数据传输对之前和之后的其它数据传输没有影响。 VMess 的客户端发起一次请求，服务器判断该请求是否来自一个合法的客户端。如验证通过，则转发该请求，并把获得的响应发回给客户端。 VMess 使用非对称格式，即客户端发出的请求和服务器端的响应使用了不同的格式。
# Vless（Virtual Less）
Vless协议相比于传统的VMess协议更为**轻量**级，并且在加密、混淆等方面进行了优化，以提供更高的性能和隐蔽性。  
# Trojan
基本原理和Vless一致，相比更**新**，相对简单。
# Conclusion  
**运用加密，代理，伪装成一般流量**。  
**加密层数越多越安全；加密层数越少速度就越快。**  
# Reference
[V2Fly.org](https://www.v2fly.org/)    
[简介 - Trojan-Go Docs (p4gefau1t.github.io)](https://p4gefau1t.github.io/trojan-go/)  
[Trojan Documentation | trojan (trojan-gfw.github.io)](https://trojan-gfw.github.io/trojan/)


