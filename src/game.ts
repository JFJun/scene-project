/**
 * 第一步： 初始化实体
 * */
const base = new Entity()

/**
 * 第二步：为实体添加组件
 * */
// 方体模型
base.addComponent(new BoxShape())
// // 面片模型
// base.addComponent(new PlaneShape())
// // 圆锥模型
// base.addComponent(new ConeShape())
// // 圆柱模型
// base.addComponent(new CylinderShape())

base.addComponent(new Transform())

/**
 * 第三步：设置组件参数
 * */
// 设置位置
base.getComponent(Transform).position.set(1, 1, 1)
// 设置大小
base.getComponent(Transform).scale.set(1, 1, 1)
// 设置旋转角度
base.getComponent(Transform).rotation = Quaternion.Euler(180, 90, 0)

/**
 * 第四步： 将实体添加到引擎
 * */
engine.addEntity(base)
