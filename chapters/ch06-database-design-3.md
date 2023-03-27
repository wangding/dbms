# 第 6 章 物理数据库设计

## 创建和删除索引

要求：

- 创建 `idx_demo` 数据库，并使用该数据库
- 如无特别说明，本章所有练习均在 `idx_demo` 数据库中完成
- 创建 dept 表，并**隐式创建**主键索引 `dept_id` 和唯一索引 `dept_name`，表的属性如下
  - `dept_id, int, auto_increment`
  - `dept_name, varchar(20)`
- 查询 dept 表的索引，验证主键索引和唯一索引创建成功
- 创建 emp 表，并**隐式创建**主键索引 `emp_id` 和外键索引 `dept_id`，表的属性如下
  - `emp_id, int, auto_increment`
  - `emp_name, varchar(20)`
  - `dept_id, int`
- 查询 emp 表的索引，验证主键索引和外键索引创建成功
- book 表的属性如下
  - `book_id, int`
  - `book_name, varchar(100)`
  - `authors varchar(100)`
  - `info varchar(100)`
  - `comment varchar(100)`
  - `year_publication datetime`
- 创建 `book` 表，同时为 `book_name` 属性显示创建普通索引，验证索引是否创建成功
- 创建 `book1` 表，同时为 `comment` 属性显示创建唯一索引，验证索引是否创建成功
- 创建 `book2` 表，同时为 `book_id` 属性显示创建主键索引，验证索引是否创建成功
- 创建 `book3` 表，同时为 `book_name` 属性显示创建单列索引，验证索引是否创建成功
- 创建 `book4` 表，同时为 `book_id, book_name, info` 属性显示创建联合索引，验证索引是否创建成功
- 创建 `book5` 表，然后修改 `book5` 表，并为 `comment` 属性创建普通索引，为 `book_name` 属性创建普通索，为 `book_id, book_name, info` 属性创建联合索引，验证索引是否创建成功
- 创建 `book6` 表，然后，为 `comment` 属性创建普通索引，为 `book_name` 属性创建普通索，为 `book_id, book_name, info` 属性创建联合索引，验证索引是否创建成功
- 删除 `book2` 的主键，查看 `book2` 的主键索引是否自动删除
- 修改 `book5` 表，删除 `comment` 属性的普通索引，检查索引是否删除成功
- 直接删除 `book5` 表的唯一索引，检查索引是否删除成功
- 删除 `book5` 表的 `book_id` 字段，检查联合索引的变化
- 删除 `book5` 表的 `book_name` 字段，检查联合索引的变化
- 删除 `book5` 表的 `info` 字段，检查联合索引是否存在

## 使用索引

准备实验环境

- 创建表 `abc`，属性如下，id 是主键
  - `id int(11) not null auto_increment`
  - `tag char(8) not null`
  - `a int not null`
  - `b int not null`
  - `c int not null`
- 创建表 `abc_idx`，属性与表 `abc` 相同，id 是主键
- 表 `abc_idx` 有 a,b,c 和 b,c 两个联合索引，tag 普通索引，tag(4) 前缀索引
- 编写存储过程 `insertData`，向 `abc` 和 `abc_idx` 插入一百万条记录，数据规则如下
  - `tag = rpad(id, 8, '-')`
  - `a = id % 10000`
  - `b = id % 1000`
  - `c = id % 100`
  - `abc` 和 `abc_idx` 表的数据相同
- 调用 `insertData` 存储过程，向 `abc` 和 `abc_idx` 表插入数据
- 注意，因为数据量比较大，存储过程执行的时间可能比较长，需要耐心等待

使用索引

- 检查 `index_demo` 数据库中有哪些表，是否有 `abc` 和 `abc_idx` 表
- 查看 `abc` 和 `abc_idx` 表的结构
- 查看 `abc` 和 `abc_idx` 表的记录数量
- 查看 `abc` 和 `abc_idx` 表的索引
- 在 `abc` 表中查询满足条件 `a=10` 的记录，记录查询执行的时长
- 在 `abc_idx` 表中查询满足条件 `a=10` 的记录，记录查询执行的时长
- 对上面的两个查询，用查询分析器分析，查看以下三个参数：
  - 查询类型
  - 使用的索引
  - 可能扫描的记录数量

## 设计索引

- 下面的操作分别在 `abc` 和 `abc_idx` 表上完成
- 查询 `id=1234` 的元组。查询时长有何区别，id 属性有何特点，通过 explain 分析用到的索引
- 查询 `a=1234` 的元组。查询时长有何区别，a 属性有何特点，通过 explain 分析用到的索引
- 统计 b 取值和相同 b 的数量。查询时长有何区别，b 属性有何特点，通过 explain 分析用到的索引
- 统计 a=1000 条件下，b 取值和相同 b 的数量。查询时长有何区别，b 属性有何特点，通过 explain 分析用到的索引
- 对于 tag='4444----' 的记录，更新 b = b + 10000。查询时长有何区别，tag 属性有何特点，通过 explain 分析用到的索引
- 查询不同 b 的数量。查询时长有何区别，b 属性有何特点，通过 explain 分析用到的索引
- 对前一万条记录自连接，连接条件是 b 字段等值。查询时长有何区别，b 属性有何特点，通过 explain 分析用到的索引
- 查询 tag 字段以 1234 开头的记录。查询时长有何区别，b 属性有何特点，通过 explain 分析用到的索引
- 计算 tag 前缀长度为 5, 6, 7, 8 的选择度，思考 tag 前缀长度选多少最好
- 计算每个字段的区分度，查询 tag='1234----' 的记录。查询时长有何区别，tag 属性有何特点，通过 explain 分析用到的索引
- 查询 b 取值 123~234 的记录。查询时长有何区别，b 属性有何特点，通过 explain 分析用到的索引
- 查询 b 取值 223~234 的记录。查询时长有何区别，b 属性有何特点，通过 explain 分析用到的索引
- 查询 b=123 且 c=23 的记录。查询时长有何区别，b 属性有何特点，通过 explain 分析用到的索引
