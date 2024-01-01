---
title: 第 11 章 并发控制
---

## 搭建实验环境

要求：

- 创建 tx 数据库
- 在 tx 数据库中创建 t 表，表的字段如下
  - id int 主键
  - val int not null
- 在 t 表中插入两条元组：`(1, 100), (2, 200)`
- 下面的所有操作在 tx 库的 t 表中进行

## 基本事务操作

要求：

- 在 `dbms-demo` 目录下，创建 `11-transaction` 文件夹
- 在 MySQL Shell（或 MySQL Workbench）中完成下面的操作
- 启动事务
- 更新 t 表，实现 id 为 1 的账户给 id 为 2 的账户转 60 元
- 查看更新操作的效果
- 提交事务
- .
- 启动事务
- 更新 t 表，实现 id 为 2 的账户给 id 为 1 的账户转 60 元
- 查看更新操作的效果
- 回滚事务
- .
- 启动事务
- 更新 t 表，实现 id 为 2 的账户给 id 为 1 的账户转 60 元
- 查看更新操作的效果
- `ctrl + z` 把 mysql 客户端至于后台，查看进程信息
- `kill pid` 把 mysql 客户端进程杀掉，`fg` 确保 mysql 客户端不会被调到前台
- 进入 mysql 控制台，查看 tx.t 表的数据是否为事务前的数据

## 隔离级别和非串行调度的异常

要求：

- 查看 MySQL 默认的隔离级别
- .
- 打开两个 xshell 终端，每个终端都进入 mysql 控制台
- 两个终端都修改隔离级别为 read-uncommitted
- 在两个终端下分别查看 tx.t 表的数据，应该是 `(1, 40), (2, 260)`
- 两个终端分别启动事务，分别记为：T1 和 T2
- T1：更新 t 表，`(1, 40) -> (1, 100)`
- T1：查看更新是否成功
- T2：查看 t 表，如看到 `(1, 100)`，则此现象为脏读异常
- T1 和 T2 都 回滚
- .
- 两个终端都修改隔离级别为 read-committed
- 在两个终端下分别查看 tx.t 表的数据，应该是 `(1, 40), (2, 260)`
- 两个终端分别启动事务，分别记为：T1 和 T2
- T1：更新 t 表，`(1, 40) -> (1, 100)`
- T1：查看更新是否成功
- T2：查看 t 表，看到`(1, 40)` 而不是 `(1, 100)`，说明此隔离级别不存在脏读异常
- T1：提交
- T2：查看 t 表，如看到 `(1, 100)`，则此现象为不可重复读异常
- T2：回滚
- .
- 两个终端都修改隔离级别为 repeatable-read
- 在两个终端下分别查看 tx.t 表的数据，应该是 `(1, 100), (2, 260)`
- 两个终端分别启动事务，分别记为：T1 和 T2
- T1：更新 t 表，`(1, 100) -> (1, 140)`
- T1：查看更新是否成功
- T2：查看 t 表，如果没有 `(1, 140)`，则此隔离级别不存在脏读异常
- T1：提交
- T2：查看 t 表，如果没有 `(1, 140)`，则此隔离级别不存在不可重复读异常
- T2：回滚
- .
- 确保两个终端的隔离级别为 repeatable-read
- 在两个终端下分别查看 tx.t 表的数据，应该是 `(1, 140), (2, 260)`
- 两个终端分别启动事务，分别记为：T1 和 T2
- T1：t 表中插入新元组 `(3, 300)`
- T1：查看插入是否成功
- T2：查看 t 表，应该没有 `(3, 300)` 元组
- T1：提交
- T2：查看 t 表，还是没有 `(3, 300)` 元组
- T2：更新 t 表，`update t set val = val where id>1;`
- T2: 回滚
- 观察上面 update 操作的输出信息：`rows matched: 2`
- 说明存在幻影记录 `(3, 300)`，此现象称为幻读异常

## 查看锁信息

要求：

- 查看 MySQL 锁相关的变量，`show variables like '%lock%';`，如下所示
```
+-----------------------------------------+----------------------+
| Variable_name                           | Value                |
+-----------------------------------------+----------------------+
| innodb_api_disable_rowlock              | OFF                  |
| innodb_autoinc_lock_mode                | 1                    |
| innodb_deadlock_detect                  | ON                   |
| innodb_lock_wait_timeout                | 50                   |
| innodb_locks_unsafe_for_binlog          | OFF                  |
| innodb_print_all_deadlocks              | OFF                  |
| innodb_status_output_locks              | OFF                  |
| innodb_table_locks                      | ON                   |
| lock_wait_timeout                       | 31536000             |
| locked_in_memory                        | OFF                  |
| max_write_lock_count                    | 18446744073709551615 |
| metadata_locks_cache_size               | 1024                 |
| metadata_locks_hash_instances           | 8                    |
| performance_schema_max_metadata_locks   | -1                   |
| performance_schema_max_rwlock_classes   | 50                   |
| performance_schema_max_rwlock_instances | -1                   |
| performance_schema_max_table_lock_stat  | -1                   |
| query_cache_wlock_invalidate            | OFF                  |
| skip_external_locking                   | ON                   |
+-----------------------------------------+----------------------+
```
- 针对上述列表，在 [MySQL 手册](https://dev.mysql.com/doc/refman/8.0/en/)中查找自己感兴趣的变量，了解该变量的作用的默认值
- 锁监控，`show status like '%lock%';`，这些信息是动态的，会随时产生变化

## 隔离级别与锁

要求：

- 四种隔离级别都消除了脏写异常
- 以最弱的隔离级别 `read-uncommitted`，说明如何利用锁机制来消除脏写异常
- 两个终端都修改隔离级别为 read-uncommitted
- 在两个终端下分别查看 tx.t 表的数据，应该是 `(1, 140), (2, 260), (3, 300)`
- 执行锁监控，`show status like '%row_lock%';`，对锁信息截图 p1
- 两个终端分别启动事务，分别记为：T1 和 T2
- T1：更新 t 表，`(1, 140) -> (1, 100)`
- T1：查看更新是否成功
- T2：更新 t 表，`(1, 140) -> (1, 180)`，此更新操作被阻止，处于等待状态
- T1：提交
- T2：更新成功
- T2：查看更新是否成功
- T2：提交
- 执行锁监控，`show status like '%row_lock%';`，对锁信息截图 p2
- 比较 p2 和 p1 中的锁信息的变化，说明上面 T2 更新被阻止的原因是元组 `(1, 140)` 被锁住，所以没有更新成功，因此没有发生脏写异常

## S 锁与 X 锁的相容性


要求：

- 两个终端的隔离级别都为 read-uncommitted
- 在两个终端下分别查看 tx.t 表的数据，应该是 `(1, 180), (2, 260), (3, 300)`
- 两个终端分别启动事务，分别记为：T1 和 T2
- T1：对元组 `(1, 180)` 申请 S 锁，`select * from t where id=1 lock in share mode;`
- T2：对元组 `(1, 100)` 申请 S 锁
- （T2 成功，说明 S 锁和 S 锁相容）
- T1：回滚
- T2：回滚
- .
- 两个终端分别启动事务，分别记为：T1 和 T2
- T1：对元组 `(1, 180)` 申请 S 锁，`select * from t where id=1 lock in share mode;`
- T2：对元组 `(1, 100)` 申请 X 锁，`select * from t where id=1 for update;`
- （T2 等待，说明 S 锁和 X 锁不相容）
- T1：提交（T2 获得 X 锁，查到数据，退出等待）
- T2：回滚
- .
- X 锁与 S 锁不相容，类似上面的操作，不在赘述
- .
- X 锁与 X 锁不相容，类似上面的操作，自行验证

## 死锁

要求：

- 两个终端的隔离级别都为 read-uncommitted
- 在两个终端下分别查看 tx.t 表的数据，应该是 `(1, 180), (2, 260), (3, 300)`
- 两个终端分别启动事务，分别记为：T1 和 T2
- T1：更新 t 表，`(1, 180) -> (1, 140)`
- T1：查看更新是否成功
- T2：更新 t 表，`(2, 260) -> (2, 200)`
- T2：查看更新是否成功
- T1：更新 t 表，`(2, 260) -> (2, 240)`，等待 T2 释放锁
- T2：更新 t 表，`(1, 180) -> (1, 100)`，等待 T1 释放锁（此时发生死锁）
  - 通过自动死锁检测，发现发生死锁
  - 执行下面的动作来解决死锁
  - T2 自动回滚，并提示死锁发生
  - T2 回滚，所以 T2 对第二个元组的 X 锁释放
  - T1 更新成功，死锁解决
- T1：回滚
