# 第 7 章 存储管理

## 存储介质

阅读下面的参考资料

- [Cache 内存和寄存器的桥梁](https://www.bilibili.com/video/BV1Fd4y1u7LZ)
- [计算机组成原理之 SRAM 与 DRAM 的存储元原理讲解](https://www.bilibili.com/video/BV1Qq4y137pq)
- [内存芯片工作原理](https://www.bilibili.com/video/BV1Ce4y1W71k)
- [内存是如何工作的](https://www.bilibili.com/video/BV1vP411c7pt)
- [机械硬盘的工作原理](https://www.bilibili.com/video/BV1ug411b7Wo)
- [机械硬盘的组成结构](https://www.bilibili.com/video/BV1H24y1S7bJ)
- [闪存的工作原理](https://www.bilibili.com/video/BV1nV411b7fw)
- [SSD 固态硬盘工作原理](https://www.bilibili.com/video/BV1eL4y1G7c1)

## 存储引擎

要求：

- 下面的操作都在 `st` 数据库中进行
- 查看 MySQL 支持哪些存储引擎
- 查看 northwind.employees 使用的存储引擎
- 查看 MySQL 默认的存储引擎
- .
- 创建 tb_eng 表，属性为 `id int, name varchar(20)`
- 查看 tb_eng 表使用的存储引擎，是否为默认的存储引擎
- 修改 tb_eng 表的存储引擎为 myisam
- 查看 tb_eng 表的存储引擎，确认是否修改成功
- .
- 创建 tb_mem 表，属性为 `id int, name varchar(20)`，使用 memory 存储引擎
- 查看 tb_mem 的存储引擎
- 在 tb_mem 中插入两条记录
- 通过 select 语句查看 tb_mem 表的数据
- 在文件系统下查看 tb_mem 表的数据
- 重启 mysqld 服务，通过 select 语句查看 tb_mem 表的数据
- .
- 创建 tb_csv 表，属性为 `id int, name varchar(20)`，使用 csv 存储引擎
- 查看 tb_csv 的存储引擎
- 在 tb_csv 中插入两条记录
- 通过 select 语句查看 tb_csv 表的数据
- 在文件系统下查看 tb_csv 表的数据

## 存储结构

### 行结构

要求：

- 查看 MySQL 默认的行格式
- 查看 northwind.employees 表的行格式
- 创建 tb_rf 表，属性为 `id int, name varchar(20)`
- 查看表 tb_rf 的行格式，是否为默认的行格式
- 修改 tb_rf 表的行格式为 compact 行格式
- 查看 tb_rf 表的行格式，确认修改成功
- .
- 创建 tb_cmpt 表，属性如下，行格式为 compact，字符集为 latin1
  - col1 varchar(10)
  - col2 varchar(10)
  - col3 char(10)
  - col4 varchar(10)
- 在 tb_cmpt 表中插入两行记录，内容如下
  - ('a', 'bb', 'ccc', 'dddd')
  - ('e', null, 'fff', null)
- 查看数据库文件的行格式，`xxd /var/lib/mysql/st/tb_cmpt.ibd | less`
- 搜索 `dddd` 定位到第一条记录
- 分析两条记录的行格式，包括
  - 变长长度字段列表
  - NULL 值列表
  - 记录头信息
  - 隐藏列值
  - 真实列值

### 页结构

要求：

- 查看 MySQL 默认的页尺寸
- 切换到用户表空间路径，`cd /var/lib/mysql/st`
- 查看用户表空间中各种页的类型，`innodb_space -f tb_cmpt.ibd space-summary`
- 图形方式查看索引页的结构，`innodb_space -f tb_cmpt.ibd -p 3 page-illustrate`
- 查看索引页的结构信息：`innodb_space -f tb_cmpt.ibd -p 3 page-dump`

### 表空间

要求：

- 查看系统表空间和临时表空间的路径
- 查看使用系统表空间还是用户表空间（独立表空间）

## innodb_ruby 软件

- 按照下面的步骤安装 innodb_ruby 软件，`#` 后面是注释文字
- innodb_ruby 软件的使用方法，参考 [innodb_ruby 教程](https://juejin.cn/post/6844903844107780103)

```bash
# 已经安装了 ruby 2.0
ruby -v

# 安装 ruby 2.7
sudo yum install -y centos-release-scl-rh
sudo yum install rh-ruby27 rh-ruby27-ruby-devel -y

# 在 bash 下使用 ruby 2.7
scl enable rh-ruby27 bash
ruby -v

# 如果希望 bash 登录就能使用 ruby 2.7，修改 .bashrc
vi ~/.bashrc

# 把下面命令加到 .bashrc 的最后一行，保存并退出
source scl_source enable rh-ruby27

# 重新登录 bash
exit        # 退出 bash
exit        # 退出 zsh

# xshell 连接虚拟机，默认是 zsh
bash        # 进入 bash
ruby -v
# ruby 2.7.4p191 (2021-07-07 revision a21a3b7d23) [x86_64-linux]

# 查看 gem 的版本，应该是 3.1.6
gem -v

# 安装 innodb_ruby 工具
gem install innodb_ruby

# 确保工具能正常工作
innodb_space --help

# 把 wangding 用户加到 mysql 用户组中
# 因为 innodb_ruby 需要有 /var/lib/mysql 目录的访问权限
sudo usermod -aG mysql wangding
exit        # 退出 bash
exit        # 退出 zsh

# xshell 连接虚拟机，默认是 zsh
bash        # 进入 bash

# 确保有查看 /var/lib/mysql 目录的权限
ls /var/lib/mysql
```
