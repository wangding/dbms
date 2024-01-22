---
title: 第 1 章 绪论
---

## 了解数据库人才需求

要求：

- 在招聘网站（网站不限）做如下调查
- 搜索关键字：**数据库**或 **MySQL**
- 了解与数据库相关，有哪些不同工作岗位，待遇如何
- 了解不同岗位对数据库技能有哪些要求，差异是什么
- 了解哪些 DBMS 系统比较受企业欢迎

## 搭建实验环境

- 第一步：安装虚拟机软件
  - 已经安装过虚拟机软件的跳过此步
  - [VMWare Workstation](https://www.vmware.com/go/getworkstation-win) 或 [VisualBox](https://pc.qq.com/detail/3/detail_1023.html) 二选一
- 第二步：[下载](https://releases.ubuntu.com/22.04.3/ubuntu-22.04.3-live-server-amd64.iso) Ubuntu linux ISO 镜像
- 第三步：安装 Ubuntu Linux 虚拟机
- 第四步：[下载](https://www.xshell.com/zh/free-for-home-school/)并安装 XShell 软件
- 第五步：安装 MySQL 8.0
- 详细安装步骤请参考：[从零搭建实验环境](/appendix/setup-dev-env/)

## 配置实验环境

按照下面的操作步骤，配置 git 参数。

- 配置 git 的 user.name 和 user.email 参数，否则 `git commit` 不能正常工作
- 运行命令 `git config --list`，查看当前的 git 配置信息
- 如果没有配置 user.name 和 user.email 参数，请执行下面的操作
- 运行命令 `git config --global user.email "Your Email"`，配置 user.name 参数
- 运行命令 `git config --global user.name "Your Name"`，配置 user.email 参数
- **注意，上面两个命令需要把双引号中的文字改成具体的姓名和邮箱**
- 运行命令 `git config --list`，查看刚配置的 git 参数

## 熟悉实验环境的使用

- 熟悉常用的 [linux 命令用法](http://note.wangding.co/linux/centos.html)
- 熟悉 [Git 命令](http://note.wangding.co/office/git.html)的用法

### 启动实验环境

操作步骤如下：

- 运行 vmware 虚拟机软件，打开 vmware 程序窗口
- 启动 lab linux 虚拟机
- 打开 xshell 软件
- 连接到 lab linux 虚拟机
- 在 xshell 中使用开发环境
- **注意**：如果没有特殊情况，都是在 xshell 中操作 linux 虚拟机

### 关闭实验环境

操作步骤如下：

- 切换到 XShell 终端窗口
- 输入 `sudo shutdown -h  now` 命令，关闭 linux 操作系统
- XShell 的窗口为 DOS 命令行
- 在 DOS 命令行，输入 `exit` 命令，关闭 XShell 会话窗口
- XShell 窗口关闭后，关闭 VMware 程序窗口

## 使用 MySQL 帮助

要求：

- 使用 MySQL 官方手册
- 浏览器打开 [MySQL 手册](https://dev.mysql.com/doc/refman/8.0/en/)，添加到收藏夹里
- 反复仔细阅读并理解网站左侧的每个导航项，导航项是 MySQL 手册的目录，做到心中有数
- 导航上面的搜索框中输入关键字 `select`，点击第一个搜索项，浏览该页面，并观察对应的左侧导航项
- 导航上面的搜索框中输入关键字 `show`，点击 `SHOW Statements` 搜索项，浏览该页面，并观察对应的左侧导航项
- 导航上面的搜索框中输入关键字 `mysql_config_editor`，点击第一个搜索项，浏览该页面，并观察对应的左侧导航项
- .
- 使用 MySQL 客户端帮助
- 控制台输入，`mysql --help` 浏览这个帮助信息
- 控制台进入 MySQL 客户端界面，`mysql -h 127.0.0.1 -u root -pddd`
- 逐行阅读 MySQL 的提示信息
- 输入 `help` 命令，逐行阅读 MySQL 客户端的命令、快捷键及功能
- 尝试这些功能，有不明白的地方去 [MySQL 手册](https://dev.mysql.com/doc/refman/8.0/en/)搜索答案
- 输入 `help select` 命令，阅读该帮助文档
- 输入 `help contents` 命令，根据提示信息，进一步阅读你感兴趣的话题
- 退出 MySQL 客户端
- .
- 阅读 MySQL 客户端[快捷键](http://note.wangding.co/database/mysql.html)用法
- 在 MySQL 客户端中练习和理解这些快捷键的用法

## 安装 MySQL GUI 客户（可选）

方案一：MySQL Workbench

- 从 MySQL 官网[下载](https://dev.mysql.com/downloads/workbench/) MySQL Workbench windows 安装包
- 运行安装包，安装 MySQL Workbench
- 配置 MySQL Workbench 连接 mocha 虚拟机中的 MySQL Server
- MySQL Workbench 的安装和使用方法，请参考 MySQL 官方手册，或在 B 站搜索相关视频

方案二：VSCode + SQLTools 插件

- 从 [Visual Studio Code](https://code.visualstudio.com) 官网下载 VSCode 安装包
- 运行安装包，安装 VSCode
- 运行 VSCode，安装 SQLTools 插件，参考 [B 站视频](https://www.bilibili.com/video/BV1Zq4y1F7iA)

## 基于文件的数据管理

要求：

- [scores.csv](http://sample.wangding.co/dbms/scores.csv) 是学生成绩的 excel 表格，有近四百位学生的三门课程的成绩
- 下载 `scores.csv` 数据文件
- 创建 `dbms-demo` 仓库
- 在 `dbms-demo` 目录下，创建 `01-introduction` 文件夹
- 在 `01-introduction` 目录下，创建 `score.c` 代码文件
- 编写 C 程序，实现对学生成绩数据，增加、修改、删除和查询的功能
- 对学生成绩的操作保存在 `scores.csv` 中
- 运行并测试程序
- 程序功能和操作界面参考如下图：
<img src="/images/score.gif"></img>
- 编写 bash 脚本，实现同样的功能（选做）
- 使用程序的时候，输入错误数据，观察程序是否能正常工作
- 思考数据文件的格式发生下面的改变，程序是否可以正常运行
  - 课程字段排列顺序改变
  - 字段的间隔不是逗号，而是制表符或者空格
- 思考如果希望用户通过网络远程访问数据文件，如何实现
- 思考如果多个人同时修改或访问 `score.csv` 数据文件，会怎样

## 数据库系统

要求：

- 在纸上或软件上绘制数据库系统框架图，绘制时不要看书、幻灯片等参考资料
- 在实验环境中执行下面的命令行操作
- 在 MySQL 中查找变量，确定数据库存放的路径，把路径记录在上面的图中
- 在 MySQL 中查看有哪些数据库，把数据库的名称记录在上面的图中
- 在数据库存放的路径中，查看是否有每个数据库对应的目录
- 检查其中一个数据库目录下面的文件，把文件名称记录下来
- 在 MySQL 中找出这个数据库中的表名称，跟上一步的文件名进行比对
- 查看 linux 上运行的进程，找到 MySQL 守护进程，确定该进程的命令
- 查看 MySQL 守护进程的运行状态，查看该守护进程的用户手册
- 查看该守护进程程序所在的目录，查看该目录下有哪些 MySQL 相关的程序，了解他们的作用
- 查找 MySQL 客户端程序的安装目录，查看该目录下有哪些 MySQL 相关的程序，了解他们的作用
- 在纸上或软件上绘制数据库系统的详细框架图和 MySQL 系统框架图，可以照着画

## 数据模型

要求：

- 在纸上或软件上绘制三级数据模型图，绘制时不要看书、幻灯片等参考资料
- 绘制完成后，根据资料，对自己的图形进行修订
- 要求概念数据模型（E-R 图）和逻辑数据模型（数据库模式图）保持一致
- 在图的下方，用文字标注如下内容
- 模型是什么，模型的作用，如何创建模型
- 三级数据模型的作用
- 三级数据模型的分类

## 数据库模式

要求：

- 在纸上或软件上绘制三级数据数据库模式图，绘制时不要看书、幻灯片等参考资料
- 绘制完成后，根据资料，对自己的图形进行修订
- 在图的下方，用文字标注如下内容
- 模式是什么，模式的作用，如何创建模式
- 三级数据库模式的作用或存在的意义
- 三级数据库模式的分类名称
- 为什么外模式可以有多个
- 为什么外模式也叫子模式
- 三级模式如何实现模式映射和数据独立性的
- 分别解释两种数据独立性

## 扩展阅读

- [计算机教育中缺失的一课](https://missing-semester-cn.github.io/)
- [计算机教育中缺失的一课（视频）](https://www.bilibili.com/video/BV1Vq4y1k7Ko)
- [大数据时代纪录片](https://www.bilibili.com/bangumi/play/ep120905)
- [什么是数据库](https://www.bilibili.com/video/BV1mY411V7HW)
- [什么是数据模型](https://www.bilibili.com/video/BV1rt4y1w7FV)
