---
title: 第 3 章 关系代数
---

## relax 软件

- 浏览器打开 [college.txt][college_url]
- 浏览器打开 [relax][relax_url]
- 点击【Get Started】按钮
- 点击【Group Editor】选项卡
- 将 [college.txt][college_url] 的所有内容复制、粘贴到【Group Editor】文本框中
- 点击【preview】按钮
- 点击【preview】按钮右侧的【use group in editor】超链接
- 直到左侧 college 数据库的表结构出现
- 如果不出现，继续点击【use group in editor】超链接
- 左侧的 college 数据库的表结构出现后
- 就可以在【Relational algebra】和【SQL】中做查询了

## 关系代数

要求：

- 在 `dbms-demo` 目录下，创建 `03-relational-algebra` 文件夹
- 下面的所有关系代数表达式查询，都在 [relax][relax_url] 软件的 college 数据库上完成
- .
- 查找计算机系的学生【选择】
- 查找计算机系的男生【选择】
- 查找学生信息，列出学号和姓名【投影】
- 查找所有系部【投影】
- 查找计算机系和数学系的学生【并】
- 查找选了 1002 号课程，但没选 3006 号课程的学生编号【差】
- 查找已选课的学生和成绩信息【积】
- 查找与 Elsa 同系的学生学号和姓名【积】
- 查找 3006 号课程的最高分【积】
- 查找计算机系学生的 Sno 和 Ssex，重命名为 ID 和 Gender【重命名】
- 将 SC 的 Grade 属性名修改为 Score【重命名】
- 查找既选了 1002 号课程，又选了 3006 号课程的学生编号【交】
- 查找计算机系学生的选课情况，列出学号、姓名、课号和分数【连接】
- 查找没选课的学生编号和姓名【左外连接】
- 查找选修了所有课程的学生编号【除】
- 统计每个系的男生人数和女生人数【分组】
- 统计每位已选课学生的选课数和平均分【分组】
- .
- 将上面的代码放到 `03-relational-algebra` 目录下的 `01-college.txt` 文件中
- 提交代码仓库，推送到 bitbucket 远程代码仓库

## 等价表达式

要求：

- 下面的所有关系代数表达式查询，都在 [relax][relax_url] 软件的 college 数据库上完成
- 下面的每个题目要求利用运算规律至少写出两个等价的关系代数表达式
- .
- 查找数学专业的女生【选择之交换律】
- 查找计算机系 19 岁男生【选择之合并律】
- 查找全体学生的学号和姓名【投影之归一律】
- 查找物理系、计算机系以及数学系的学生【并之结合律】
- 查找计算机系和物理系的所有女生【并之分配律】
- 查找计算机系 19 岁男生【交之结合律】
- 查找计算机系 19 岁男生【交之分配律】
- 查找学号为 PH-001，但没选 1002 课程，成绩为 88 分的学生【差之分配律】
- 查询学生和成绩信息【连接之交换律】
- 查询学生、课程和成绩信息【连接之结合律】
- 查找学号为 PH-001 的学生和成绩信息【连接和选择之分配律】
- 查询学号为 PH-001 且成绩为 88 分的学生和成绩信息【连接和选择之分配律】
- 查询学生和成绩信息，包括：学号、系部、课号和成绩【连接和投影之分配律】
- .
- 查找计算机系 19 岁男生【整理上面所有的表达式】
- .
- 将上面的代码放到 `03-relational-algebra` 目录下的 `02-equivalent-expressions.txt` 文件中
- 提交代码仓库，推送到 bitbucket 远程代码仓库

## 扩展阅读

- E.F. Codd 的著名论文：[A relational model of data for large shared data banks](https://dl.acm.org/doi/pdf/10.1145/362384.362685)

<!-- url link -->

[college_url]: http://sample.wangding.co/dbms/college.txt
[relax_url]: http://relax.wangding.co/
