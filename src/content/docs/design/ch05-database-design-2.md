---
title: 第 5 章 逻辑数据库设计
---

## 逻辑数据库设计

要求：

- 在 dbms-demo 仓库下，创建 `05-logical-db-design` 目录
- 基于第 4 章公司案例的概念设计，用 [draw.io][draw_io_url] 绘制数据库逻辑设计图
- 将上面的图形文件，放到 `05-logical-db-design` 目录下
- 提交代码仓库，推送到 bitbucket 远程代码仓库

## 关系数据理论

背景：

- 学校的 SLC 关系：SLC(Sno, Sdept, Sloc, Cno, Grade)
- 关系中的属性
  - Sno 为学生学号
  - Sdept 为学生所在系
  - Sloc 为学生宿舍楼地址
  - Cno 为学生选修的课程编号
  - Grade 为学生某课程的成绩
- 教务关系的现实语义如下
  - 一个系有若干学生，但一个学生只属于一个系
  - 一个系的学生住在同一个宿舍楼
  - 一个学生可以选修多门课程，每门课程有若干学生选修
  - 每个学生选的每门课程有一个成绩

要求：

- 标识 SLC 中的主码
- 标识 SLC 中的主属性和非主属性
- 写出 SLC 关系的函数依赖集 F
- 标识 F 中 (Sno, Cno) 的完全函数依赖和部分函数依赖
- 用 Armstrong 定理证明 F 逻辑蕴涵 Sno -> Sloc
- 用 Armstrong 定理证明 F 逻辑蕴涵 (Sno, Cno) -> (Sloc, Grade)
- 用 Armstrong 导出规则证明 F 逻辑蕴涵 (Sno, Cno) -> (Sloc, Grade)
- 将 SLC 模式分解成 2NF
- 将 SLC 模式分解成 3NF

<!-- url link -->
[draw_io_url]: https://draw.io

