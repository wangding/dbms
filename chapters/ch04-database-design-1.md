# 第 4 掌 概念数据库设计

## 绘图软件

- 使用 [draw.io][draw_io_url] 绘制 E-R 图
- [draw.io][draw_io_url] 初始界面，可以不选择存储
- 绘制完成后，最好保存、下载图形到本地磁盘
- 图形的保存格式，选择默认的 XML 格式
- 本地的绘图文件，后续可以在 [draw.io][draw_io_url] 中打开继续编辑
- 左侧的绘图面板，选择【+更多图形】，找到【实体关系】

## 公司案例

需求：

- The company is organized into DEPARTMENTs. Each department has a name, number and an employee who manages the department. We keep track of the start date of the department manager. A department may have several locations.
- Each department controls a number of PROJECTs. Each project has a unique name, unique number and is located at a single location.
- We store each EMPLOYEE's social security number (SSN), address, salary, sex, and birthdate.
  - Each employee works for one department but may work on several projects.
  - We keep track of the number of hours per week that an employee currently works on each project.
  - We also keep track of the direct supervisor of each employee.
- Each employee may have a number of DEPENDENTs.
  - For each dependent, we keep track of their name, sex, birthdate, and relationship to the employee.

## 概念数据库设计

要求：

- 在 dbms-demo 仓库下，创建 04-conceptual-db-design 目录
- 对上面的公司案例，找出所以实体和属性，用 [draw.io][draw_io_url] 绘制 E-R 图
- 将图形保存为 `01-company-entity.drawio`
- 在上面工作的基础上，找出所有联系集，并对实体和属性做适当的修改
- 将图形保存为 `02-company-relationship.drawio`
- 在上面工作的基础上，细化联系集，标记联系的基数和参与度
- 将图形保存为 `03-company-relationship.drawio`
- 在上面工作的基础上，细化联系集，标记联系的属性、弱实体型和标识联系型
- 将图形保存为 `04-company-relationship.drawio`
- 在上面工作的基础上，整合出完整的 E-R 图
- 将图形保存为 `05-company-entity-relationship.drawio`
- 将上面的图形文件，放到 `04-conceptual-db-design` 目录下
- 提交代码仓库，推送到 bitbucket 远程代码仓库

<!-- url link -->
[draw_io_url]: https://draw.io
