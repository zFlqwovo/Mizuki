---
title: "Debian 12 升级到 Debian 13（trixie）"
published: 2025-09-07
description: '记一次 Debian 12 升级到 Debian 13（trixie）'
image: ''
tags: [Debian, Linux, 更新]
category: Linux
draft: false 
lang: zh

---
> Debian 一直以稳定著称，但大版本更新还是绕不开的。  
> 本文记录一次从 **Debian 12（bookworm）升级到 Debian 13（trixie）** 的过程，简单直接，适合日常服务器或开发环境升级。  

---

## 升级前的准备

远程升级最怕断线，推荐在 **screen** 或 **tmux** 里操作，这样就算 SSH 掉线，升级也不会中断。  

```bash
apt install screen
screen -S upgrade
```

如果中途断了，可以重新连回来：  

```bash
screen -x
```

:::caution
如果是生产环境，升级前最好先做快照或备份。
:::

---

## 修改软件源

把系统源里的 `bookworm` 改成 `trixie`：  

```bash
sed -i 's/bookworm/trixie/g' /etc/apt/sources.list
sed -i 's/bookworm/trixie/g' /etc/apt/sources.list.d/*.list
```

然后检查一下，确认没有遗漏。  

---

## 正式升级

执行更新和完整升级：  

```bash
apt update
apt full-upgrade
```

这个过程可能比较久，耐心等待。  

---

## 升级完成后的清理

升级完成后，清理旧包，释放空间：  

```bash
apt autoremove -y
apt autoclean
```

最后重启：  

```bash
reboot
```

---

## 总结

升级 Debian 其实就两个关键步骤：  

1. **换源到 trixie**  
2. **执行 full-upgrade**  

收尾清理后重启即可，一般非常顺利。  

---
