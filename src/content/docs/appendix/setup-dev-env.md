---
title: 从零搭建实验环境
---

本文档介绍如何在 windows 操作系统上，创建 Ubuntu Server 22.04.3 LTS 的 Linux 虚拟机。并在该虚拟机中安装 MySQL Server 8 实验环境。下面的安装步骤，如果没有特殊说明，**一定不要在 root 账户下操作**。

本文档不适用苹果操作系统，苹果操作系统建议**直接安装 MySQL Server 8**，安装方法参考这个[教程](https://cloud.tencent.com/developer/article/1578583)。

## 下载软件

- [VMWare Workstation](https://www.vmware.com/go/getworkstation-win) 或 [VisualBox](https://pc.qq.com/detail/3/detail_1023.html)
- [XShell](https://www.xshell.com/zh/free-for-home-school/)
- [Ubuntu Server 22.04.3 LTS ISO 镜像文件](https://releases.ubuntu.com/22.04.3/ubuntu-22.04.3-live-server-amd64.iso)

## 安装软件

- 安装 VMWare Workstation
- 安装 XShell

## 安装 Linux 虚拟机

### 创建空白虚拟机

运行 VMWare Workstation 软件，创建一个空白虚拟机，操作如下：

- VMWare 软件窗口中点击【创建新的虚拟机】按钮
- 出现新建虚拟机向导对话框
- 您希望选择什么类型的配置，选择【自定义（高级）】，点击【下一步】按钮
- 虚拟机硬件兼容性配置，使用默认设置，点击【下一步】按钮
- 安装来源，选择【稍后安装操作系统】来创建一个空白的虚拟机，点击【下一步】按钮
- 客户端操作系统，选择【Linux】，版本选择【Ubuntu 64位】，点击【下一步】按钮
- 虚拟机名称和位置，使用默认设置或者自己定义（推荐设置为 `ubuntu`），点击【下一步】按钮
- 处理器配置，使用默认设置：1 个 CPU 1 个内核，点击【下一步】按钮
- 内存配置，使用默认设置：2048 M（2G 内存），点击【下一步】按钮
- 网络连接配置，使用默认设置：使用网络地址转换（NAT），点击【下一步】按钮
- I/O 控制器类型，使用默认设置：LSI Logic（推荐），点击【下一步】按钮
- 选择磁盘类型，使用默认设置：SCSI（推荐），点击【下一步】按钮
- 选择磁盘，使用默认设置：创建新虚拟磁盘，点击【下一步】按钮
- 指定磁盘容量，设置磁盘容量为：【50 G】，并选择【将虚拟磁盘存储为单个文件】，点击【下一步】按钮
- 指定磁盘文件：使用默认设置，点击【下一步】按钮
- 已经准备好虚拟机，点击“完成”按钮

### 设置虚拟机硬件

在刚创建的空白虚拟机上，需要进一步配置虚拟机硬件。点击【编辑虚拟机设置】，在弹出对话框中进行下面的操作：

- 选择【声卡】设备，点击【移除】按钮
- 选择【USB 控制器】设备，点击【移除】按钮
- 选择【打印机】设备，点击【移除】按钮
- 选择【CD/DVD (SATA)】设备，选择【使用 ISO 镜像文件】，点击【浏览】按钮，找到之前下载的 Ubuntu ISO 镜像文件
- 选择【显示器】设备，选择【指定监视器设置】，设置监视器分辨率为：【1024 X 768】
- 点击虚拟机设置对话框的【确定】按钮，完成虚拟机硬件设置

### 安装 Ubuntu

点击【开启虚拟机】绿色三角按钮，虚拟机窗口出现电脑自检画面，安装向导界面中，进行如下操作：

- 点击虚拟机窗口，进行配置操作，牢记下面三种常用按键
- 【ctrl + alt】键，让虚拟机释放光标，操作 windows 别的窗口
- 按【tab】键或【箭头/方向】键，在配置界面中不同的控件之前切换
- 按【回车】键，进行确认操作
- .
- 第一个安装画面：三个安装选项，默认使用第一个安装选项
- 操作系统的语言：使用 English 默认
- Installer Update：使用 Continue without updating 默认项
- Keyboard configuration：默认 English 布局，Done
- Choose Type of Install：使用 Ubuntu Server（minimized）最小化安装
- Network contents：使用默认
- Configure proxy：Proxy IP Address 空白，Done
- Configure Ubuntu archive mirror: 使用默认
- Guided storage configuration：默认磁盘设置
- Storage configuration：默认分区设置
- Confirm destructive action: Continue
- Profile steup：（按 tab 键在不同的文本框切换，用户名和密码要记住，后面登录用）
  - Your name: 自己姓名的拼音
  - Your server name: 随意（本文档用的是 lab）
  - Pick a username: 自己姓名的拼音（本文档用的是 wangding）
  - password：随意（本文档用的是 ddd）
  - Confirm your password: 跟上面相同
- Upgrade to ubuntu pro: Skip for now
- SSH Setup:
  - 选择 Install OpenSSH Server（tab 键切换选项，空格键选择）
  - Import SSH identity: No
- Featured Server snap: 一个都不选
- 等待安装完成，选择 Reboot now
- 重启时，提示 CD/DVD 挂载失败，点击虚拟机画面，直接按回车

## 用 XShell 连接虚拟机

- linux 命令行界面，所有的操作都是输入命令
- 下面的每个操作，会提示要输入的命令，注意命令输入完成后需要按【回车】键
- 所有命令输入成功或者失败是有提示信息的，请自己阅读提示信息，进行后续操作
- .
- 登录虚拟机，输入自己的用户名和密码
- 输入密码时，屏幕没有显示，是正常的，输入完成之后，按回车键
- 成功登录后会看到命令行提示符，类似：`wangding@lab:~$`
- 查看 IP 地址，`ip addr`，类似：`192.168.174.131`
- 启动 XShell，新建会话，名称随意（本文档是 lab），主机：上面的 IP 地址
- 点击【连接】按钮，按照提示操作，输入用户名和密码，注意【勾选记忆】
- 会看到虚拟机中的命令行提示符，类似：`wangding@lab:~$`
- 后续操作在 XShell 中完成（在虚拟机窗口的命令提示符后，输入`exit`，退出登录即可）

## 安装软件

- 安装 vim，`sudo apt install -y vim`
- 运行 `vim --version`，查看版本信息，验证 vim 安装成功
- 安装 git，`sudo apt install -y git`
- 运行 `git --version`，查看版本信息，验证 git 安装成功
- 安装 Node.js，`sudo apt install -y nodejs npm`
- 运行 `node -v`，查看版本信息，验证 Node.js 安装成功
- 安装 Node.js 版本管理工具，`sudo npm install -g n`
- 安装最新版的 Node.js，`sudo n stable`
- 运行 `hash -r`，重置 nodejs 应用程序安装位置reset the location hash with
- 运行 `node -v`，查看版本信息，验证 Node.js 升级到最新版本
- 安装 Python3，`sudo apt install -y python3`
- 运行 `python3 --version`，查看版本信息，验证 Python 安装成功
- 安装 SQLite3，`sudo apt install -y sqlite3`
- 运行 `sqlite3 --version`，查看版本信息，验证 SQLite3 安装成功
- 安装 PostgreSQL，`sudo apt install -y postgresql`
- 运行 `sudo -u postgres psql -c “select version();"`，查看版本信息，验证 PostgreSQL 安装成功
- 安装 Ruby，`sudo apt install -y ruby-full`
- 运行 `ruby --version`，查看版本信息，验证 Ruby 安装成功
- .
- 安装 MySQL，`sudo apt install -y mysql-server`，根据提示操作
- 运行 `mysql --version`，查看版本信息，验证 MySQL 安装成功
- 设置 root 账户的密码，`sudo passwd root`，根据提示操作，密码要记住（可以是 ddd）
- 切换 linux root 账户，`su`，输入 root 密码
- 看到 root 用户的命令行提示符，类似：`root@lab:/home/wangding#`
- 进入 MySQL 控制台，`mysql`，看到 MySQL 控制台提示符，类似：`mysql>`
- 查看数据库，`show databases;`
- 退出 MySQL 控制台，`quit`
