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

## 阅读参考资料

### 函数依赖

- [什么是函数依赖](https://www.bilibili.com/video/BV1PJ411F78b?p=149)
- [部分函数依赖与完全函数依赖](https://www.bilibili.com/video/BV1PJ411F78b?p=150)
- [传递函数依赖](https://www.bilibili.com/video/BV1PJ411F78b?p=151)
- [函数依赖相关的几个重要概念](https://www.bilibili.com/video/BV1PJ411F78b?p=152)
- [关于函数依赖的 Armstrong 公理](https://www.bilibili.com/video/BV1PJ411F78b?p=153)
- [什么是属性集闭包](https://www.bilibili.com/video/BV1PJ411F78b?p=154)
- [属性闭包的计算算法与覆盖及其证明](https://www.bilibili.com/video/BV1PJ411F78b?p=155)
- [什么是最小覆盖](https://www.bilibili.com/video/BV1PJ411F78b?p=156)

### 关系范式

- [什么是 1NF](https://www.bilibili.com/video/BV1PJ411F78b?p=159)
- [什么是 2NF](https://www.bilibili.com/video/BV1PJ411F78b?p=160)
- [什么是 3NF](https://www.bilibili.com/video/BV1PJ411F78b?p=161)
- [什么是 BCNF](https://www.bilibili.com/video/BV1PJ411F78b?p=162)

### 模式分解

- [模式分解存在的问题](https://www.bilibili.com/video/BV1PJ411F78b?p=167)
- [无损连接分解及其检验算法](https://www.bilibili.com/video/BV1PJ411F78b?p=168)
- [保持依赖分解及其检验算法](https://www.bilibili.com/video/BV1PJ411F78b?p=169)
- [模式分解成 BCNF 及 3NF 的算法](https://www.bilibili.com/video/BV1PJ411F78b?p=170)

<!-- url link -->
[draw_io_url]: https://draw.io

