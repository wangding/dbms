# 从零搭建实验环境

本文档基于 Linux CentOS 7 发行版，搭建基于命令行的 MySQL 实验环境。下面的安装步骤，如果没有特殊说明，**一定不要在 root 账户下操作**。

## 下载软件包

在 Win10 操作系统下载下列软件包：

- 从腾讯软件中心下载 VMWare Worksation Pro 最新版
- 从腾讯软件中心下载 XShell 最新版
- 从 CentOS 官网下载 [CentOS 安装镜像包](https://www.centos.org/download/)

## 安装软件包

在 Win10 操作系统安装下列软件包：

- 安装 VMWare Workstation
- 安装 XShell

## 安装 Linux 虚拟机

### 创建空白虚拟机

运行 vmware workstation pro 软件，创建一个空白虚拟机，操作如下：

- vmware 软件窗口中点击“创建新的虚拟机”按钮
- 出现新建虚拟机向导对话框
- 您希望选择什么类型的配置，选择“自定义（高级）”，点击“下一步”按钮
- 虚拟机硬件兼容性配置，使用默认设置，点击“下一步”按钮
- 安装来源，选择“稍后安装操作系统”来创建一个空白的虚拟机，点击“下一步”按钮
- 客户端操作系统，选择“Linux”，版本，选择“CentOS 64位”，点击“下一步”按钮
- 虚拟机名称和位置，使用默认设置或者自己定义，点击“下一步”按钮
- 处理器配置，使用默认设置：1 个 CPU 1 个内核，点击“下一步”按钮
- 内存配置，使用默认设置：1024 M（1G 内存），点击“下一步”按钮
- 网络连接配置，使用默认设置：使用网络地址转换（NAT），点击“下一步”按钮
- I/O 控制器类型，使用默认设置：LSI Logic（推荐），点击“下一步”按钮
- 选择磁盘，使用默认设置：创建新虚拟磁盘，点击“下一步”按钮
- 指定磁盘容量，使用默认设置：20 G，并选择“将虚拟磁盘存储为单个文件”，点击“下一步”按钮
- 磁盘文件名称：使用默认设置，点击“下一步”按钮
- 已经准备好虚拟机，点击“完成”按钮

### 设置虚拟机硬件

在刚创建的空白虚拟机上，需要进一步编辑虚拟机设置，操作如下：

- 移除声卡硬件
- 移除 USB 控制器硬件
- 移除打印机硬件
- CD/DVD 使用 ISO 镜像文件：点击“浏览”按钮，找到下载的 CentOS ISO 镜像文件
- 指定显示器设置，配置监视器器的分辨率为：1024 X 768
- 最后，点击“确定”按钮，完成虚拟机硬件设置

### 安装操作系统

点击“开启虚拟机”绿色三角按钮，虚拟机窗口出现电脑自检画面，安装向导界面中，进行如下操作设置：

【有待完善】

- 第一个安装画面：选择安装 CentOS 7
- 语言：中文
- 安全策略：Common Profile for General-Purpose Systems
- 软件选择：
- 安装介质
- 安装位置
- 网络启用
- root 密码
- 创建新用户并设置密码，把新用户加到管理员组中

### 设置虚拟机 IP 地址

【有待完善】

### 通过 XShell 连接 Linux 虚拟机

【有待完善】

**此后的所有安装步骤都是在 Linux 虚拟机中进行操作。**

## 安装 MySQL

要求：

- 运行下面的安装命令

  ```bash
  # 下载并安装 MySQL 官方的 Yum Repository

  wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm

  # yum 安装 mysql

  sudo yum -y install mysql57-community-release-el7-10.noarch.rpm

  # 安装 mysql 服务程序，这个步骤时间可能会比较长，取决于个人网速

  sudo yum -y install mysql-community-server

  # 启动数据库服务

  sudo systemctl start mysqld.service

  # 查看 MySQL 运行状态

  sudo systemctl status mysqld.service

  # 找到 mysql 初始的 root 用户密码

  sudo grep "password" /var/log/mysqld.log

  # 进入数据库 Shell 环境，修改 root 账户密码
  # 注意，密码有复杂度要求，要记住改后的密码

  mysql -u root -p
  ALTER USER 'root'@'localhost' IDENTIFIED BY 'iqjLryKLu9%C';

  # 在数据库 Shell 环境中，测试 root 账户的权限

  show databases;
  create database abc;
  show databases;
  exit;
  ```

## 安装 nodejs

- nodejs 可以用来开发 MySQL 应用
- 运行下面的安装命令

  ```bash
  sudo yum install -y gcc-c++ make
  curl --location https://rpm.nodesource.com/setup_16.x | sudo bash -
  sudo yum install -y nodejs

  # 检查 node.js 安装是否成功
  node -v

  # 检查 npm 是否安装成功
  npm -v
  ```
